import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getServerSession } from "next-auth";
import { authOptions } from "auth"

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
    const session = await getServerSession(authOptions) as any;
    console.warn(session);
    if (!session || !session.token?.userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userID = session.user.userId;

    // Forza il tipo del body della richiesta
    const body: RequestBody = await req.json() as RequestBody;

    const { amount } = body;

    // Crea una sessione di Checkout
    const checkoutSession = await stripe.checkout.sessions.create({
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
      metadata: {
        userID: userID,
      },
    });

    return NextResponse.json({ id: checkoutSession.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create session" }, { status: 500 });
  }
}
