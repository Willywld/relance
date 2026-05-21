import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("Missing STRIPE_SECRET_KEY environment variable");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2026-04-22.dahlia",
});

const PRICE_IDS = {
  diagnostic: process.env.STRIPE_PRICE_DIAGNOSTIC as string,
  repositionnement: process.env.STRIPE_PRICE_REPOSITIONNEMENT as string,
  complete: process.env.STRIPE_PRICE_COMPLETE as string,
};

export async function POST(req: Request) {
  try {
    const { offer } = await req.json();

    if (!offer || !["diagnostic", "repositionnement", "complete"].includes(offer)) {
      return NextResponse.json({ error: "Offre invalide." }, { status: 400 });
    }

    const priceId = PRICE_IDS[offer as keyof typeof PRICE_IDS];

    if (!priceId) {
      return NextResponse.json({ error: "Price ID Stripe manquant." }, { status: 500 });
    }

    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_URL;

    if (!origin) {
      return NextResponse.json({ error: "Origin manquant." }, { status: 500 });
    }
console.log("SUCCESS URL =", `${origin}/acces?session_id={CHECKOUT_SESSION_ID}`);
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/acces?session_id={CHECKOUT_SESSION_ID}`,
cancel_url: `${origin}/offre`,
      metadata: { offer },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du checkout." },
      { status: 500 }
    );
  }
}