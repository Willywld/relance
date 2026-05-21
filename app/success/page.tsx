import Link from "next/link";

type SuccessPageProps = {
  searchParams?: {
    session_id?: string;
  };
};

export default function SuccessPage({ searchParams }: SuccessPageProps) {
  return (
    <main className="success-page">
      <section className="success-hero">
        <div className="page-shell success-shell">
          <div className="success-copy">
            <span className="eyebrow">Paiement confirmé</span>
            <h1 className="success-title">Votre relance est lancée.</h1>
            <p className="success-text">
              Merci pour votre achat. Votre paiement a bien été pris en compte.
              L’accès au service correspondant est maintenant en cours d’activation.
            </p>

            {searchParams?.session_id ? (
              <p className="success-note">
                Référence de session : <strong>{searchParams.session_id}</strong>
              </p>
            ) : null}
          </div>

          <div className="success-card">
            <div className="success-card-label">Étapes suivantes</div>
            <ul className="success-list">
              <li>Le paiement est vérifié par Stripe.</li>
              <li>L’accès au service est ouvert automatiquement.</li>
              <li>Vous pouvez ensuite rejoindre votre espace Relance.</li>
            </ul>

            <div className="success-actions">
              <Link href="/acces" className="button-primary">
                Accéder au service
              </Link>
              <Link href="/offre" className="button-secondary">
                Retour aux offres
              </Link>
              <Link href="/" className="button-secondary">
                Retour au menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}