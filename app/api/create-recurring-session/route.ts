import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getServerSession } from "next-auth";
import { authOptions } from "auth";

// Inizializza Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-09-30.acacia",
});

// Definisci l'interfaccia del tipo di richiesta
interface RequestBody {
  amount: number;
  productName?: string;
  currency?: string;
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions) as any;
    if (!session || !session.token?.userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userID = session.token.userId;

    // Forza il tipo del body della richiesta
    const body: RequestBody = await req.json() as RequestBody;

    const { amount, productName, currency } = body;

    // Generiamo un nome del prodotto in base all'importo
    const generatedProductName = productName || `${amount} Credits Subscription`;
    const usedCurrency = currency || "usd"; // Definiamo la valuta, può essere dinamico se richiesto

    // Cerca se esiste già un prodotto con quel nome
    const productSearch = await stripe.products.search({
      query: `name:'${generatedProductName}'`,
    });

    let productId: string = "";
    if (productSearch?.data?.length > 0 && productSearch.data[0]) {
      productId = productSearch.data[0].id;
    } else {
      // Se il prodotto non esiste, crealo
      const product = await stripe.products.create({
        name: generatedProductName,
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
          currency: usedCurrency,
          recurring: {
            interval: "month",  // Puoi scegliere "day", "week", "month", "year"
          },
        });
        priceId = price.id;
      }

      if (priceId) {
        // Crea la sessione di pagamento per l'abbonamento ricorrente
        const checkoutSession = await stripe.checkout.sessions.create({
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
          metadata: {
            userID: userID,
          },
        });

        return NextResponse.json({ id: checkoutSession.id });
      }
    }

    return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
  } catch (error) {
    console.error("Error creating subscription session:", error);
    return NextResponse.json({ error: "Failed to create subscription session" }, { status: 500 });
  }
}