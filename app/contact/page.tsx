export default function ContactPage() {
  return (
    <main className="contact-page">
      <a href="/" className="return-home-pill">
        Relance / Menu
      </a>

      <div className="contact-bg" aria-hidden="true">
        <div className="contact-beam beam-a" />
        <div className="contact-beam beam-b" />
      </div>

      <section className="contact-hero">
        <div className="page-shell contact-hero-inner">
          <div className="contact-copy">
            <div className="eyebrow">Contact</div>
            <h1 className="contact-title">
              Décrire
              <br />
              ce qui doit
              <br />
              remonter.
            </h1>
            <p className="contact-text">
              Un projet peut perdre en clarté, en impact, en désirabilité ou en
              présence. Décris simplement où tu sens que ça baisse, et Relance
              pourra reprendre le fil.
            </p>
          </div>

          <form className="contact-form">
            <label>
              <span>Nom</span>
              <input type="text" name="name" placeholder="Votre nom" />
            </label>

            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="vous@email.com" />
            </label>

            <label>
              <span>Type de projet</span>
              <input type="text" name="project" placeholder="Marque, site, repositionnement..." />
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows={6}
                placeholder="Décris le projet, le contexte et ce qui doit remonter."
              />
            </label>

            <button type="submit" className="button-primary">
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}