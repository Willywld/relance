import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

const ALLOWED_OFFERS = ["repositionnement", "complete"];

export default async function RelancePlusPlusPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; email?: string }>;
}) {
  const { session_id, email: rawEmail } = await searchParams;

  let email = rawEmail?.trim().toLowerCase() || "";

  if (!email && session_id) {
    const sessionResponse = await fetch(
      `https://api.stripe.com/v1/checkout/sessions/${session_id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        },
        cache: "no-store",
      }
    ).then((res) => res.json());

    email = sessionResponse?.customer_details?.email?.trim().toLowerCase() || "";
  }

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
      <nav style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
        <Link href="/">Relance / Menu</Link>
        <Link href="/my-access">My Access</Link>
        <Link href={`/acces?email=${encodeURIComponent(email)}`}>RELANCE +</Link>
        <span style={{ opacity: 0.5 }}>RELANCE ++</span>
        {data.offer === "complete" && (
          <Link href={`/relance-plus?email=${encodeURIComponent(email)}`}>
            RELANCE PLUS
          </Link>
        )}
      </nav>

      <h1>RELANCE ++</h1>
      <p>Bienvenue, tu as accès à l’offre Repositionnement.</p>
    </main>
  );
}