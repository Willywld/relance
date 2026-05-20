export default function AProposPage() {
  const values = [
    "Lire avant d’ajouter",
    "Clarifier avant d’embellir",
    "Monter en impact sans perdre en précision",
    "Faire parler le fond et la forme ensemble",
  ];

  return (
    <main className="about-page">
      <a href="/" className="return-home-pill">
        Relance / Menu
      </a>

      <div className="about-bg" aria-hidden="true">
        <div className="about-wave wave-a" />
        <div className="about-wave wave-b" />
        <div className="about-wave wave-c" />
      </div>

      <section className="about-hero">
        <div className="page-shell about-hero-inner">
          <div className="about-copy">
            <div className="eyebrow">À propos</div>
            <h1 className="about-title">
              Relance est un
              <br />
              studio de lecture,
              <br />
              de tension
              <br />
              et de relance.
            </h1>
            <p className="about-text">
              Nous travaillons sur ce moment particulier où un projet a encore
              de la valeur, mais n’est plus perçu à son vrai niveau. Notre rôle
              est de relire, recentrer et rehausser ce qui doit redevenir net,
              désirable et crédible.
            </p>
          </div>

          <div className="about-cloud">
            <span>Clarté</span>
            <span>Exigence</span>
            <span>Perception</span>
            <span>Relance</span>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="page-shell about-values-layout">
          <div className="about-values-copy">
            <div className="section-label">Principes</div>
            <h2 className="section-title narrow">
              Une manière de travailler plus précise que décorative.
            </h2>
          </div>

          <div className="about-values-stack">
            {values.map((item, index) => (
              <div key={item} className="about-value-line">
                <span className="about-value-id">0{index + 1}</span>
                <span className="about-value-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-statement">
        <div className="page-shell about-statement-inner">
          <div className="section-label">Position</div>
          <h2 className="about-mega">
            Nous ne cherchons pas
            <br />
            à faire plus.
            <br />
            Nous cherchons
            <br />
            à faire juste.
          </h2>
        </div>
      </section>

      <section className="about-end">
        <div className="page-shell about-end-shell">
          <div>
            <div className="section-label about-end-label">
              Échange
            </div>
            <h2 className="section-title light narrow">
              Parler d’un projet, d’une baisse d’impact ou d’un besoin de relance.
            </h2>
          </div>

          <a href="/contact" className="button-primary">
            Entrer en contact
          </a>
        </div>
      </section>
    </main>
  );
}