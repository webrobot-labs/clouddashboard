import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-09-30.acacia",
});
// Definisci l'interfaccia per il corpo della richiesta
interface RequestBody {
    productName: string;
    currency: string;
    amount: number;
  }
  export async function POST(req: NextRequest) {
    try {
      const body = await req.json() as RequestBody;
      const { amount } = body;
  
      // Generiamo un nome del prodotto in base all'importo
      const productName = `${amount} Credits Subscription`;
      const currency = "usd"; // Definiamo la valuta, può essere dinamico se richiesto
  
      // Cerca se esiste già un prodotto con quel nome
      const productSearch = await stripe.products.search({
        query: `name:'${productName}'`,
      });
  
      let productId: string = "";
      if (productSearch?.data?.length > 0 && productSearch.data[0]) {
        productId = productSearch.data[0].id;
      } else {
        // Se il prodotto non esiste, crealo
        const product = await stripe.products.create({
          name: productName,
          description: `${amount} credits per month subscription`,
        });
        productId = product.id;
      }
  
      if (productId) {
        // Cerca se esiste già un prezzo ricorrente associato a quel prodotto
        const priceSearch = await stripe.prices.list({
          product: productId,
          active: true,
        });
  
        let priceId: string = "";
        if (priceSearch?.data?.length > 0 && priceSearch.data[0]) {
          priceId = priceSearch.data[0].id;
        } else {
          // Se il prezzo non esiste, crealo
          const price = await stripe.prices.create({
            product: productId,
            unit_amount: amount * 100, // L'importo deve essere in centesimi
            currency: currency,
            recurring: {
              interval: "month",  // Puoi scegliere "day", "week", "month", "year"
            },
          });
          priceId = price.id;
        }
  
        if (priceId) {
          // Crea la sessione di pagamento per l'abbonamento ricorrente
          const session = await stripe.checkout.sessions.create({
            mode: "subscription",  // Usa il mode "subscription" per i pagamenti ricorrenti
            payment_method_types: ["card"],
            line_items: [
              {
                price: priceId,
                quantity: 1,
              },
            ],
            success_url: `${process.env.NEXTAUTH_URL}/Credits`,  // URL di successo
            cancel_url: `${process.env.NEXTAUTH_URL}/Credits`,   // URL di cancellazione
          });
  
          return NextResponse.json({ id: session.id });
        }
      }
  
      return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
    } catch (error) {
      console.error("Error creating subscription session:", error);
      return NextResponse.json({ error: "Failed to create subscription session" }, { status: 500 });
    }
  }