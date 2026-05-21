import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export async function POST(req: Request) {
  const formData = await req.formData();
  const rawEmail = formData.get("email");

  const email = typeof rawEmail === "string" ? rawEmail.trim().toLowerCase() : "";

  if (!email) {
    return NextResponse.redirect(new URL("/offre", req.url));
  }

  const { data, error } = await supabase
    .from("paid_access")
    .select("offer, access_granted")
    .eq("email", email)
    .eq("access_granted", true)
    .maybeSingle();

  if (error || !data) {
    return NextResponse.redirect(new URL("/offre", req.url));
  }

  if (data.offer === "complete") {
    return NextResponse.redirect(new URL(`/relance-plus?email=${encodeURIComponent(email)}`, req.url));
  }

  if (data.offer === "repositionnement") {
    return NextResponse.redirect(new URL(`/relance-plus-plus?email=${encodeURIComponent(email)}`, req.url));
  }

  if (data.offer === "diagnostic") {
    return NextResponse.redirect(new URL(`/acces?email=${encodeURIComponent(email)}`, req.url));
  }

  return NextResponse.redirect(new URL("/offre", req.url));
}