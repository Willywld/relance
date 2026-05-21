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

  if (!session_id) {
    redirect("/");
  }

  const { data: sessionResponse } = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${session_id}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      },
    }
  ).then((res) => res.json());

  const email = sessionResponse?.customer_details?.email;

  if (!email) {
    redirect("/");
  }

  const { data, error } = await supabase
    .from("paid_access")
    .select("*")
    .eq("email", email)
    .eq("access_granted", true)
    .maybeSingle();

  if (error || !data) {
    redirect("/");
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Accès autorisé</h1>
      <p>Ton paiement a bien été validé.</p>
    </main>
  );
}