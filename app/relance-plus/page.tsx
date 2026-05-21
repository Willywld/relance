import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

const ALLOWED_OFFERS = ["complete"];

export default async function RelancePlusPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    redirect("/offre");
  }

  const sessionResponse = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${session_id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      },
      cache: "no-store",
    }
  ).then((res) => res.json());

  const email = sessionResponse?.customer_details?.email;

  if (!email) {
    redirect("/offre");
  }

  const { data, error } = await supabase
    .from("paid_access")
    .select("*")
    .eq("email", email)
    .eq("access_granted", true)
    .in("offer", ALLOWED_OFFERS)
    .maybeSingle();

  if (error || !data) {
    redirect("/offre");
  }

  return (
    <main style={{ padding: 40 }}>
      <nav style={{ display: "flex", gap: 12, marginBottom: 24 }}>
        <Link href={`/acces?session_id=${session_id}`}>RELANCE +</Link>
        <Link href={`/relance-plus-plus?session_id=${session_id}`}>RELANCE ++</Link>
        <span style={{ opacity: 0.5 }}>RELANCE PLUS</span>
      </nav>

      <h1>RELANCE PLUS</h1>
      <p>Bienvenue, tu as accès à l’offre complète.</p>
    </main>
  );
}