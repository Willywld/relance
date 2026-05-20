import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Relance — Conseil, positionnement et direction d’image",
  description:
    "Relance accompagne les projets, marques et initiatives qui souhaitent gagner en clarté, en cohérence et en impact.",
  openGraph: {
    title: "Relance — Conseil, positionnement et direction d’image",
    description:
      "Une approche exigeante pour renforcer la clarté du message, la qualité de l’image et la présence d’un projet.",
    url: "https://relance-qhu5lo7t4-relance-studio-s-projects.vercel.app",
    siteName: "Relance",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relance — Conseil, positionnement et direction d’image",
    description:
      "Une approche exigeante pour renforcer la clarté du message, la qualité de l’image et la présence d’un projet.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}