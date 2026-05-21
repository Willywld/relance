export default function Home() {
  const warnings = [
    "Message devenu trop faible",
    "Image qui ne porte plus assez",
    "Site qui n’imprime plus",
    "Présence devenue trop lisse",
    "Valeur réelle mal perçue",
  ];

  const chapters = [
    {
      id: "01",
      title: "Voir la perte d’intensité",
      text: "Identifier le moment où un projet existe encore, mais ne produit plus le bon impact.",
      tone: "tone-peach",
    },
    {
      id: "02",
      title: "Recentrer le signal",
      text: "Retirer le bruit, faire émerger le cœur, remettre le message en tension.",
      tone: "tone-blue",
    },
    {
      id: "03",
      title: "Recomposer la présence",
      text: "Faire du site, de l’image et du langage un seul système plus fort.",
      tone: "tone-lime",
    },
    {
      id: "04",
      title: "Créer une lecture qui reste",
      text: "Donner au projet une force plus nette, plus sensible, plus mémorable.",
      tone: "tone-pink",
    },
  ];

  const outcomes = [
    "Clarté retrouvée",
    "Présence rehaussée",
    "Lecture plus immédiate",
    "Impact plus durable",
  ];

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <a href="/" className="brand">
            Relance
          </a>

       <nav className="nav">
  <a href="/approche">Approche</a>
  <a href="/services">Services</a>
  <a href="/offre">Offre</a>
  <a href="/projets">Projets</a>
  <a href="/a-propos">À propos</a>
  <a href="/my-access">My Access</a>

  <div className="nav-dropdown">
    <a href="/acces" className="nav-parent">
      RELANCE +
    </a>

    <div className="nav-dropdown-menu">
      <a href="/acces">RELANCE +</a>
      <a href="/relance-plus-plus">RELANCE ++</a>
      <a href="/relance-plus">RELANCE PLUS</a>
    </div>
  </div>
</nav>

          <a href="/contact" className="header-cta">
            Nous contacter
          </a>
        </div>
      </header>

      <main className="lumen-home">
        <div className="scroll-light" aria-hidden="true">
          <div className="scroll-light-beam" />
          <div className="scroll-light-glow glow-one" />
          <div className="scroll-light-glow glow-two" />
          <div className="scroll-light-glow glow-three" />
          <div className="scroll-light-node node-one" />
          <div className="scroll-light-node node-two" />
          <div className="scroll-light-node node-three" />
          <div className="scroll-light-node node-four" />
        </div>

        <section className="intro-flash">
          <div className="page-shell intro-flash-inner">
            <span className="intro-kicker">Relance / cinematic mode</span>
            <p className="intro-sentence">Certains projets n’ont pas besoin d’être refaits.</p>
            <p className="intro-sentence strong">Ils ont besoin d’être relancés avec violence et précision.</p>
          </div>
        </section>

        <section className="hero-lumen">
          <div className="page-shell hero-lumen-grid">
            <div className="hero-lumen-copy">
              <div className="eyebrow">Studio de relance stratégique et visuelle</div>

              <h1 className="hero-lumen-title">
                Faire remonter
                <br />
                un projet
                <br />
                à son vrai niveau.
              </h1>

              <p className="hero-lumen-text">
                Relance intervient quand un projet a encore de la valeur, mais
                n’exprime plus assez de clarté, de désir ou de crédibilité.
                Nous réécrivons le signal, l’image et la structure pour que
                l’ensemble retrouve une vraie puissance de perception.
              </p>

              <div className="hero-actions">
                <a href="/contact" className="button-primary">
                  Présenter un projet
                </a>
                <a href="/services" className="button-secondary">
                  Voir les services
                </a>
              </div>
            </div>

            <div className="hero-lumen-stage">
              <div className="hero-stage-grid" />
              <div className="hero-card hero-main-card">
                <span className="micro-label">Relance / active</span>
                <strong>Le bon projet. Le mauvais niveau de perception.</strong>
                <p>
                  Nous remettons le message, le site et la présence dans un
                  système plus dense, plus net, plus désirable.
                </p>
              </div>

              <div className="hero-card hero-side-card side-a tone-peach">
                <span className="micro-label">Signal 01</span>
                <strong>Le bruit tombe.</strong>
              </div>

              <div className="hero-card hero-side-card side-b tone-blue">
                <span className="micro-label">Signal 02</span>
                <strong>Le sens remonte.</strong>
              </div>

              <div className="hero-card hero-side-card side-c tone-lime">
                <span className="micro-label">Signal 03</span>
                <strong>La présence prend place.</strong>
              </div>

              <div className="hero-card hero-side-card side-d tone-pink">
                <span className="micro-label">Signal 04</span>
                <strong>Le regard reste.</strong>
              </div>

              <div className="hero-meter meter-a">
                <small>Clarté</small>
                <b>01</b>
              </div>

              <div className="hero-meter meter-b">
                <small>Impact</small>
                <b>02</b>
              </div>

              <div className="hero-meter meter-c">
                <small>Présence</small>
                <b>03</b>
              </div>
            </div>
          </div>
        </section>

        <section className="warning-section">
          <div className="page-shell warning-layout">
            <div className="section-copy">
              <div className="section-label">Acte I — Le signal faible</div>
              <h2 className="section-title narrow">
                Ce n’est pas toujours le projet qui baisse.
              </h2>
            </div>

            <div className="warning-list">
              {warnings.map((item, index) => (
                <div key={item} className="warning-row">
                  <span className="warning-index">0{index + 1}</span>
                  <span className="warning-value">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="statement-section">
          <div className="page-shell statement-inner">
            <div className="section-label">Acte II — Le constat</div>
            <h2 className="statement-title">
              Un projet peut rester bon.
              <br />
              Et pourtant
              <br />
              cesser de produire
              <br />
              le bon effet.
            </h2>
          </div>
        </section>

        <section className="chapter-section">
          <div className="page-shell">
            <div className="section-label">Acte III — La relance en 4 mouvements</div>

            <div className="chapter-track">
              {chapters.map((chapter) => (
                <article key={chapter.id} className={`chapter-panel ${chapter.tone}`}>
                  <span className="chapter-id">{chapter.id}</span>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="blast-section">
          <div className="page-shell blast-stage">
            <div className="blast-word word-a">Clarté</div>
            <div className="blast-word word-b">Tension</div>
            <div className="blast-word word-c">Présence</div>
            <div className="blast-word word-d">Impact</div>
            <div className="blast-center">
              Ce qui compte doit redevenir impossible à ignorer.
            </div>
          </div>
        </section>

        <section className="outcome-section">
          <div className="page-shell outcome-layout">
            <div className="outcome-copy">
              <div className="section-label">Acte IV — L’effet</div>
              <h2 className="outcome-title">
                Plus net.
                <br />
                Plus fort.
                <br />
                Plus haut.
              </h2>
            </div>

            <div className="outcome-grid">
              {outcomes.map((item) => (
                <div key={item} className="outcome-box">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-section">
          <div className="page-shell final-shell">
            <div className="final-copy">
              <div className="section-label final-label">Acte V — La relance commence ici</div>
              <h2 className="section-title narrow light">
                Reprendre la main sur la perception d’un projet.
              </h2>
              <p className="final-text">
                Relance clarifie, repositionne et rehausse ce qui doit redevenir
                lisible, désirable et convaincant.
              </p>
            </div>

            <a href="/contact" className="button-primary final-cta">
              Lancer la relance
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell">
          Relance — Studio de relance stratégique et visuelle.
        </div>
      </footer>
    </>
  );
}