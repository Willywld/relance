import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      id: "01",
      title: "Relance stratégique",
      text: "Repositionner le projet, clarifier le cœur du message et redéfinir l’axe dominant.",
      tone: "services3-tone-peach",
    },
    {
      id: "02",
      title: "Relance narrative",
      text: "Réécrire la manière dont le projet se raconte pour restaurer l’adhésion et la densité.",
      tone: "services3-tone-blue",
    },
    {
      id: "03",
      title: "Relance visuelle",
      text: "Rehausser les signes, l’image, la direction artistique et la cohérence perceptive.",
      tone: "services3-tone-lime",
    },
    {
      id: "04",
      title: "Relance digitale",
      text: "Transformer le site en expérience plus précise, plus forte et plus marquante.",
      tone: "services3-tone-pink",
    },
  ];

  const outcomes = [
    "Signal plus net",
    "Clarté plus rapide",
    "Présence plus haute",
    "Désirabilité renforcée",
    "Lecture plus immédiate",
    "Crédibilité rehaussée",
  ];

  return (
    <main className="services3-page">
      <a href="/" className="return-home-pill">
        Relance / Menu
      </a>

      <div className="services3-bg" aria-hidden="true">
        <div className="services3-orb orb-a" />
        <div className="services3-orb orb-b" />
        <div className="services3-orb orb-c" />
      </div>

      <section className="services3-hero">
        <div className="page-shell services3-hero-inner">
          <div className="services3-copy">
            <div className="eyebrow">Services</div>
            <h1 className="services3-title">
              Plusieurs
              <br />
              formes de relance.
              <br />
              Une seule montée.
            </h1>
            <p className="services3-text">
              Chaque service intervient sur une couche différente du projet,
              mais poursuit la même ambition : refaire monter sa lisibilité,
              sa tension et sa présence perçue.
            </p>
          </div>

          <div className="services3-cloud">
            <span>Stratégie</span>
            <span>Récit</span>
            <span>Image</span>
            <span>Digital</span>
          </div>
        </div>
      </section>

      <section className="services3-grid-section">
        <div className="page-shell">
          <div className="section-label">Interventions</div>
          <div className="services3-grid">
            {services.map((service) => (
              <article key={service.id} className={`services3-card ${service.tone}`}>
                <span className="services3-card-id">{service.id}</span>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </article>
            ))}
          </div>

          <div className="services3-offer-cta">
            <Link href="/offre" className="button-primary services3-offer-button">
              Voir l’offre
            </Link>
          </div>
        </div>
      </section>

      <section className="services3-statement">
        <div className="page-shell services3-statement-inner">
          <div className="section-label">Effet</div>
          <h2 className="services3-mega">
            Pas plus de choses.
            <br />
            Plus de force
            <br />
            dans les bonnes choses.
          </h2>
        </div>
      </section>

      <section className="services3-results">
        <div className="page-shell services3-results-layout">
          <div className="services3-results-copy">
            <div className="section-label">Résultats recherchés</div>
            <h2 className="section-title narrow">
              Ce que la relance transforme concrètement.
            </h2>
          </div>

          <div className="services3-results-grid">
            {outcomes.map((item) => (
              <div key={item} className="services3-result-box">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services3-end">
        <div className="page-shell services3-end-shell">
          <div>
            <div className="section-label services3-end-label">
              Point d’entrée
            </div>
            <h2 className="section-title light narrow">
              Choisir la relance adaptée à l’endroit précis où le projet faiblit.
            </h2>
          </div>

          <a href="/contact" className="button-primary">
            Demander une relance
          </a>
        </div>
      </section>
    </main>
  );
}