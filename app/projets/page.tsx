export default function ProjetsPage() {
  const projects = [
    {
      id: "01",
      title: "Maison relancée",
      category: "Mode / repositionnement",
      text: "Relecture du signal d’une marque en perte de tension, avec remontée de clarté, d’image et de désirabilité.",
      tone: "projects-tone-peach",
    },
    {
      id: "02",
      title: "Présence réécrite",
      category: "Narration / plateforme",
      text: "Refonte d’une manière de se raconter pour faire émerger une lecture plus directe, plus dense et plus crédible.",
      tone: "projects-tone-blue",
    },
    {
      id: "03",
      title: "Image rehaussée",
      category: "Direction visuelle",
      text: "Réorganisation des signes et de la hiérarchie visuelle pour redonner une présence plus forte à l’ensemble.",
      tone: "projects-tone-lime",
    },
    {
      id: "04",
      title: "Site remonté",
      category: "Digital / expérience",
      text: "Transformation d’un site trop sage en une expérience plus marquante, plus fluide et plus mémorable.",
      tone: "projects-tone-pink",
    },
  ];

  return (
    <main className="projects-page">
      <a href="/" className="return-home-pill">
        Relance / Menu
      </a>

      <div className="projects-bg" aria-hidden="true">
        <div className="projects-glow glow-a" />
        <div className="projects-glow glow-b" />
        <div className="projects-glow glow-c" />
      </div>

      <section className="projects-hero">
        <div className="page-shell projects-hero-inner">
          <div className="projects-copy">
            <div className="eyebrow">Projets</div>
            <h1 className="projects-title">
              Voir comment
              <br />
              une relance
              <br />
              se manifeste.
            </h1>
            <p className="projects-text">
              Chaque projet présenté ici raconte une remontée : plus de clarté,
              plus de tension, plus de présence. Pas une addition d’effets.
              Une remontée de niveau perceptif.
            </p>
          </div>

          <div className="projects-tags">
            <span>Signal</span>
            <span>Image</span>
            <span>Récit</span>
            <span>Digital</span>
            <span>Impact</span>
          </div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="page-shell">
          <div className="section-label">Sélection</div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.id} className={`project-card ${project.tone}`}>
                <span className="project-id">{project.id}</span>
                <div className="project-meta">{project.category}</div>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
                <a href="/my-access" className="project-link">
                  Je Relance
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-statement">
        <div className="page-shell projects-statement-inner">
          <div className="section-label">Lecture</div>
          <h2 className="projects-mega">
            Un projet fort
            <br />
            se reconnaît
            <br />
            à l’effet qu’il laisse.
          </h2>
        </div>
      </section>

      <section className="projects-end">
        <div className="page-shell projects-end-shell">
          <div>
            <div className="section-label projects-end-label">
              Continuer
            </div>
            <h2 className="section-title light narrow">
              Reprendre la lecture d’un projet à partir de ce qu’il devrait provoquer.
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