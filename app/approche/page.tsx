export default function ApprochePage() {
  const sequence = [
    "Lire le mauvais niveau de perception",
    "Identifier la perte de tension",
    "Retirer le bruit qui affaiblit",
    "Recomposer un système plus fort",
  ];

  const blocks = [
    {
      id: "01",
      title: "Lecture",
      text: "Commencer par comprendre où le projet cesse d’imprimer comme il devrait.",
      tone: "approach3-tone-peach",
    },
    {
      id: "02",
      title: "Clarification",
      text: "Faire remonter ce qui compte et réduire tout ce qui brouille la lecture.",
      tone: "approach3-tone-blue",
    },
    {
      id: "03",
      title: "Recomposition",
      text: "Reconnecter message, image, structure et interface dans une même logique perceptive.",
      tone: "approach3-tone-lime",
    },
    {
      id: "04",
      title: "Relance",
      text: "Réinstaller le projet à un niveau de présence plus haut, plus net et plus stable.",
      tone: "approach3-tone-pink",
    },
  ];

  return (
    <main className="approach3-page">
      <a href="/" className="return-home-pill">
        Relance / Menu
      </a>

      <div className="approach3-bg" aria-hidden="true">
        <div className="approach3-beam beam-a" />
        <div className="approach3-beam beam-b" />
        <div className="approach3-beam beam-c" />
      </div>

      <section className="approach3-hero">
        <div className="page-shell approach3-hero-inner">
          <div className="approach3-copy">
            <div className="eyebrow">Approche</div>
            <h1 className="approach3-title">
              Nous traitons
              <br />
              la perception
              <br />
              comme une matière.
            </h1>
            <p className="approach3-text">
              Un projet ne décroît pas toujours par manque de valeur. Il décroît
              parfois parce que son signal s’est affaibli, que sa structure s’est
              relâchée ou que sa présence ne porte plus assez. Relance agit à cet
              endroit précis.
            </p>
          </div>

          <div className="approach3-words">
            <span>Lire</span>
            <span>Voir</span>
            <span>Ressentir</span>
            <span>Élaguer</span>
            <span>Recentrer</span>
            <span>Élever</span>
          </div>
        </div>
      </section>

      <section className="approach3-statement">
        <div className="page-shell approach3-statement-inner">
          <div className="section-label">Constat</div>
          <h2 className="approach3-mega">
            Un bon projet
            <br />
            peut produire
            <br />
            un effet trop faible.
          </h2>
        </div>
      </section>

      <section className="approach3-sequence">
        <div className="page-shell">
          <div className="section-label">Séquence de travail</div>
          <div className="approach3-sequence-stack">
            {sequence.map((item, index) => (
              <div key={item} className="approach3-sequence-line">
                <span className="approach3-sequence-id">0{index + 1}</span>
                <span className="approach3-sequence-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="approach3-cards">
        <div className="page-shell">
          <div className="section-label">4 blocs</div>
          <div className="approach3-cards-grid">
            {blocks.map((item) => (
              <article key={item.id} className={`approach3-card ${item.tone}`}>
                <span className="approach3-card-id">{item.id}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="approach3-breaker">
        <div className="approach3-breaker-track">
          <span>Le problème n’est pas toujours le projet</span>
          <span>Le problème est parfois son niveau de lecture</span>
          <span>Le problème n’est pas toujours le projet</span>
          <span>Le problème est parfois son niveau de lecture</span>
        </div>
      </section>

      <section className="approach3-end">
        <div className="page-shell approach3-end-shell">
          <div>
            <div className="section-label approach3-end-label">
              Intention
            </div>
            <h2 className="section-title light narrow">
              Faire remonter un projet au niveau auquel il devrait déjà être perçu.
            </h2>
          </div>

          <a href="/pour-qui" className="button-primary">
            Est-ce pour toi
          </a>
        </div>
      </section>
    </main>
  );
}