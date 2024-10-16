import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Inizializza Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-09-30.acacia",
});

// Definisci l'interfaccia del tipo di richiesta
interface RequestBody {
  amount: number;
}

export async function POST(req: NextRequest) {
  try {
    // Forza il tipo del body della richiesta
    const body: RequestBody = await req.json() as RequestBody;

    const { amount } = body;

    // Crea una sessione di Checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `${amount} Credits`,
            },
            unit_amount: amount * 100, // Stripe gestisce gli importi in centesimi
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/Credits`,  // URL dopo il successo
      cancel_url: `${process.env.NEXTAUTH_URL}/Credits`,    // URL dopo il fallimento
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
  }
}
