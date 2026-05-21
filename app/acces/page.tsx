import { redirect } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

export const dynamic = "force-dynamic";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export default async function AccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  console.log("ACCESS PAGE session_id =", session_id);

  if (!session_id) {
    console.log("No session_id, redirect /offre");
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

  console.log("Stripe session response =", sessionResponse);

  const email = sessionResponse?.customer_details?.email;

  console.log("Email found =", email);

  if (!email) {
    console.log("No email, redirect /offre");
    redirect("/offre");
  }

  const { data, error } = await supabase
    .from("paid_access")
    .select("*")
    .eq("email", email)
    .eq("access_granted", true)
    .maybeSingle();

  console.log("Supabase data =", data);
  console.log("Supabase error =", error);

  if (error || !data) {
    console.log("No paid access, redirect /offre");
    redirect("/offre");
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>RELANCE +</h1>
      <p>Bienvenue, ton accès est bien actif.</p>
    </main>
  );
}