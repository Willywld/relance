import Link from "next/link";

type CheckoutPageProps = {
  searchParams?: {
    offer?: string;
  };
};

const offers = {
  diagnostic: {
    name: "Relance Diagnostic",
    price: "290 €",
    description:
      "Lecture du projet, repérage des zones de friction et priorités de correction.",
  },
  repositionnement: {
    name: "Relance Repositionnement",
    price: "690 €",
    description:
      "Clarification du positionnement, du discours et de la direction générale.",
  },
  complete: {
    name: "Relance Complète",
    price: "1 290 €",
    description:
      "Intervention plus profonde, stratégique, visuelle et perceptive.",
  },
};

export default function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const offerKey = searchParams?.offer && offerKeyExists(searchParams.offer) ? searchParams.offer : "repositionnement";
  const offer = offers[offerKey as keyof typeof offers];

  return (
    <main className="checkout-page">
      <section className="checkout-hero">
        <div className="page-shell checkout-shell">
          <div className="checkout-copy">
            <span className="eyebrow">Checkout</span>
            <h1 className="checkout-title">Finaliser votre relance.</h1>
            <p className="checkout-text">
              Vous avez choisi <strong>{offer.name}</strong>. Le paiement valide l’accès
              au service correspondant, puis vous êtes redirigé vers la confirmation.
            </p>
          </div>

          <div className="checkout-card">
            <div className="checkout-card-label">Offre sélectionnée</div>
            <h2>{offer.name}</h2>
            <p>{offer.description}</p>
            <div className="checkout-price">{offer.price}</div>

            <div className="checkout-actions">
              <Link href="/api/checkout" className="button-primary">
                Procéder au paiement
              </Link>
              <Link href="/offre" className="button-secondary">
                Retour aux offres
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function offerKeyExists(value: string): value is keyof typeof offers {
  return value in offers;
}