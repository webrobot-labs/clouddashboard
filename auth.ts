import NextAuth from "next-auth";
import { Session } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import { JWT } from "next-auth/jwt";
import { Account, Profile, User } from "next-auth"; // Importa i tipi per account, profilo e user
import Stripe from 'stripe';
import axios from 'axios';

// Inizializza Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-09-30.acacia",
});

export const authOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID || "",
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || "",
      issuer: process.env.KEYCLOAK_ISSUER,
      authorization: { params: { scope: "openid profile email" } },
    }),
  ],
  callbacks: {
    // Funzione per creare o recuperare l'utente di Lago
    async getOrCreateLagoCustomer (email: string, externalId: string, name: string) {
      try {
        const LAGO_API_URL = process.env.LAGO_API_BASE_URL;
        const API_KEY = process.env.LAGO_API_KEY;
    
        // Tentativo di recuperare il cliente esistente
        const searchResponse = await axios.get(`${LAGO_API_URL}/customers`, {
          params: { email },
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
          },
        });
    
        // Se esiste un cliente con quell'email, restituire il suo ID
        if (searchResponse.data && searchResponse.data.customers && searchResponse.data.customers.length > 0) {
          console.log('Customer found:', searchResponse.data.customers[0]);
          return searchResponse.data.customers[0].id; // Restituisce l'ID del primo customer trovato
        }
    
        // Se il cliente non esiste, crearlo
        const createResponse = await axios.post(
          `${LAGO_API_URL}/customers`,
          {
            customer: {
              external_id: externalId, // ID univoco fornito dal sistema esterno
              email, // Email del cliente
              currency: "USD", // Valuta predefinita (o cambiala in base alle tue necessità)
              name, // Nome del cliente
            },
          },
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );
    
        console.log('Customer created successfully:', createResponse.data);
        return createResponse.data.customer.id; // Restituisce l'ID del customer creato
      } catch (error) {
        //console.error('Error in getOrCreateLagoCustomer:', error.response ? error.response.data : error.message);
        throw new Error('Failed to create or retrieve Lago customer');
      }
    },
    // Funzione per recuperare o creare il Customer ID di Stripe
    async getOrCreateStripeCustomer(email: string): Promise<string> {
      try {
        // Cerca i clienti di Stripe con l'email fornita
        const customers = await stripe.customers.list({
          email,
        });

        // Se esiste un cliente con quell'email, restituisci il suo ID
        if (customers != null && customers.data != null  &&  customers.data.length > 0 && customers.data[0] != null ) {
          return customers.data[0].id;
        } else {
          // Se non esiste, crea un nuovo cliente con quell'email
          const customer = await stripe.customers.create({
            email,
          });
          return customer.id; // Restituisci il nuovo Customer ID
        }
      } catch (error) {
        console.error("Errore durante la creazione o il recupero del Customer ID di Stripe:", error);
        throw new Error("Failed to create or retrieve Stripe customer");
      }
    },

    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }) {
      // Aggiungi i campi personalizzati alla sessione
      session.user.stripeCustomerId = token.stripeCustomerId;
      session.user.lagoUserId = token.lagoUserId;
      session.user.name = token.name;
      session.user.email = token.email;
      session.accessToken = typeof token.accessToken === 'string' ? token.accessToken : undefined;
      return session;
    },

    // Callback JWT fortemente tipizzata
  async jwt({
    token,
    user,
    account,
  }: {
  token: JWT;
  user?: User;
  account?: Account | null;
  }) {
  // Se esiste un utente, popola il JWT con l'userId e altre informazioni
  if (user) {
    token.userId = user.id;  // Aggiungi l'user ID di Keycloak
    token.name = user.name ?? undefined;
    token.email = user.email ?? undefined;
  }

  // Se esiste un account (solo durante la prima autenticazione), assegna l'accessToken
  if (account) {
    token.accessToken = account.access_token; // Aggiungi l'accessToken dal provider (Keycloak in questo caso)
  }
  const customerName = user?.name ?? 'Default Name';  // Usa "Default Name" se `user.name` è undefined o null
  
  // Creare o recuperare lo user ID di Lago
  if (!token.lagoUserId && user?.email) {
    
    const lagoUserId = await authOptions.callbacks.getOrCreateLagoCustomer(user.email,user.id,customerName);
    token.lagoUserId = lagoUserId;
  }

  
  // Creare o recuperare il customer ID di Stripe
  if (!token.stripeCustomerId && user?.email) {
    const stripeCustomerId = await authOptions.callbacks.getOrCreateStripeCustomer(user.email);
    token.stripeCustomerId = stripeCustomerId;
  }

  return token;
},
  },
  debug: true,
};

// Esportazione del default NextAuth con la configurazione
export default NextAuth(authOptions);

// Estensione del tipo Session
declare module "next-auth" {
  interface Session {
    user: {
      name?: string;
      email?: string;
      stripeCustomerId?: string;
      lagoUserId?: string;
    };
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    stripeCustomerId?: string;
    lagoUserId?: string;
    userId?: string;
    name?: string;
    email?: string;
  }
}