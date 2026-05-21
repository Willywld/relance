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
        <div className="success-backdrop" aria-hidden="true">
          <span className="success-glow a" />
          <span className="success-glow b" />
          <span className="success-grid" />
        </div>

        <div className="page-shell success-shell">
          <div className="success-copy">
            <span className="eyebrow">Paiement confirmé</span>
            <h1 className="success-title">Votre relance est lancée.</h1>
            <p className="success-text">
              Merci pour votre achat. Le paiement a bien été validé et votre espace
              est en train de s’ouvrir.
            </p>

            <div className="success-status">
              <div className="success-status-item">
                <span className="success-status-label">Statut</span>
                <span className="success-status-value">Validation en cours</span>
              </div>
              <div className="success-status-item">
                <span className="success-status-label">Accès</span>
                <span className="success-status-value">Déblocage automatique</span>
              </div>
            </div>

            {searchParams?.session_id ? (
              <p className="success-note">
                Référence de session <strong>{searchParams.session_id}</strong>
              </p>
            ) : null}
          </div>

          <aside className="success-card">
            <div className="success-card-label">Étapes suivantes</div>
            <ul className="success-list">
              <li>Stripe confirme le paiement.</li>
              <li>L’accès au service se prépare automatiquement.</li>
              <li>Vous pouvez entrer dans votre espace Relance.</li>
            </ul>

            <div className="success-actions">
  <Link href="/acces" className="button-primary">
    Accéder au service
  </Link>
</div>
          </aside>
        </div>
      </section>
    </main>
  );
}