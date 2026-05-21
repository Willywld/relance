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

  let destination = "/offre";

  if (data.offer === "complete") {
    destination = "/relance-plus";
  } else if (data.offer === "repositionnement") {
    destination = "/relance-plus-plus";
  } else if (data.offer === "diagnostic") {
    destination = "/acces";
  }

  const response = NextResponse.redirect(new URL(destination, req.url));

  response.cookies.set("relance_access_email", email, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}