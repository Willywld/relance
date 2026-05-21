import Link from "next/link";

export default function AccessPage() {
  const features = [
    "Accès à la relance achetée",
    "Livrables et éléments associés",
    "Suivi de votre commande",
    "Retour rapide vers l’offre ou le menu",
  ];

  return (
    <main className="access-page">
      <section className="access-hero">
        <div className="access-backdrop" aria-hidden="true">
          <span className="access-radial a" />
          <span className="access-radial b" />
          <span className="access-line" />
        </div>

        <div className="page-shell access-shell">
          <div className="access-copy">
            <span className="eyebrow">Accès Relance</span>
            <h1 className="access-title">Votre espace est désormais ouvert.</h1>
            <p className="access-text">
              Vous êtes dans l’espace lié à votre achat. Ici commencent les éléments
              concrets de votre relance, avec une lecture plus nette et une mise en
              mouvement immédiate.
            </p>

            <div className="access-badge-row">
              <span className="access-badge">Débloqué</span>
              <span className="access-badge">Sur-mesure</span>
              <span className="access-badge">Confidentiel</span>
            </div>
          </div>

          <aside className="access-card">
            <div className="access-card-label">Ce que vous obtenez</div>
            <ul className="access-list">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="access-note">
              Votre relance a franchi le point de bascule. Vous pouvez maintenant
              poursuivre depuis cet espace.
            </div>

           <div className="access-actions">
  <Link href="/" className="button-primary">
    Retour au menu
  </Link>
</div>
          </aside>
        </div>
      </section>
    </main>
  );
}