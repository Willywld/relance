import Link from "next/link";

export default function AccessPage() {
  const features = [
    "Accès à votre relance achetée",
    "Ressources et livrables associés",
    "Suivi de votre commande",
    "Retour vers l’offre ou le menu",
  ];

  return (
    <main className="access-page">
      <section className="access-hero">
        <div className="page-shell access-shell">
          <div className="access-copy">
            <span className="eyebrow">Accès Relance</span>
            <h1 className="access-title">Votre espace est prêt.</h1>
            <p className="access-text">
              Vous êtes dans l’espace lié à votre achat. Ici, vous retrouvez les
              éléments associés à votre relance et les prochaines étapes.
            </p>
          </div>

          <div className="access-card">
            <div className="access-card-label">Ce que vous pouvez faire</div>
            <ul className="access-list">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <div className="access-actions">
              <Link href="/offre" className="button-secondary">
                Retour aux offres
              </Link>
              <Link href="/services" className="button-secondary">
                Voir les services
              </Link>
              <Link href="/" className="button-primary">
                Retour au menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}