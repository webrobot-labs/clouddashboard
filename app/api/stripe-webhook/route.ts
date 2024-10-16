import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2024-09-30.acacia",
});
import axios from 'axios';
export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

  let event;

  try {
    const body = await req.text(); // Ottieni il raw body come stringa
    event = stripe.webhooks.constructEvent(body, sig as string, webhookSecret);
  } catch (err: any) {
    console.error("Errore nella verifica del webhook:", err.message);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  // Gestisci l'evento di successo del pagamento
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // Logica per accreditare i crediti tramite Lago
    console.log(`Pagamento riuscito per la sessione ${session.id}`);


    
    // Esempio: chiama API di Lago per accreditare crediti all'utente
     await createOrUpdateWallet(session.metadata.userId, session.amount_total / 100);
  }

  return NextResponse.json({ received: true });
}


const createOrUpdateWallet = async (customerId, credits) => {
  try {
    // 1. Verifica se esiste già un wallet per l'external_customer_id
    const walletCheckResponse = await axios.get(`${process.env.LAGO_API_URL}/wallets`, {
      params: {
        external_customer_id: customerId,
        per_page: 2,
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const wallets = walletCheckResponse.data.wallets;

    if (wallets && wallets.length > 0) {
      // 2. Se il wallet esiste, ottieni l'ID e aggiorna il credito
      const walletId = wallets[0].id; // Presumendo che prenda il primo wallet se ne esistono diversi

      console.log(`Wallet found for customer: ${walletId}, updating credits...`);

      // 3. Aggiungi i nuovi crediti al wallet esistente
      const updatedWalletResponse = await axios.patch(
        `${process.env.LAGO_API_URL}/wallets/${walletId}`,
        {
          wallet: {
            paid_credits: credits, // Aggiungi il credito
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Wallet updated successfully:', updatedWalletResponse.data);
    } else {
      // 4. Se il wallet non esiste, creane uno nuovo
      console.log('No wallet found, creating a new one...');

      const newWalletResponse = await axios.post(
        `${process.env.LAGO_API_URL}/wallets`,
        {
          wallet: {
            name: "Prepaid",
            rate_amount: "1.5",
            paid_credits: credits.toString(), // Aggiungi i nuovi crediti
            granted_credits: "0.0", // Puoi impostare granted_credits se necessario
            currency: "USD",
            expiration_at: "2025-12-31", // Data di scadenza del credito
            external_customer_id: customerId,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Wallet created successfully:', newWalletResponse.data);
    }
  } catch (error) {
    console.error('Error creating or updating wallet:', error ? error : error);
  }
};