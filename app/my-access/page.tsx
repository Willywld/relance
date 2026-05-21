export const dynamic = "force-dynamic";

export default async function MyAccessPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const hasError = error === "impossible";

  return (
    <main className="my-access-page">
      <section className="my-access-hero">
        <div className="page-shell">
          <div className="my-access-layout">
            <div className="my-access-copy">
              <span className="section-label">My Access</span>
              <h1 className="my-access-title">Retrouver son accès.</h1>
              <p className="my-access-text">
                Entre l’adresse email utilisée lors de ton achat pour accéder à
                ton offre. Le système retrouve automatiquement le bon niveau et
                t’oriente vers la bonne page.
              </p>

              {hasError && (
                <div className="my-access-error">
                  Impossible de retrouver un accès avec cette adresse email.
                </div>
              )}
            </div>

            <div className="my-access-panel">
              <div className="my-access-panel-inner">
                <div className="my-access-panel-kicker">Accès privé</div>
                <h2>Une seule adresse suffit.</h2>
                <p>
                  Si ton achat est bien enregistré, tu seras redirigé vers la
                  bonne offre en fonction de ton niveau d’accès.
                </p>

                <form action="/api/my-access" method="POST" className="my-access-form">
                  <label className="sr-only" htmlFor="email">
                    Adresse email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="ton@email.com"
                    required
                    className="my-access-input"
                  />
                  <button type="submit" className="my-access-button">
                    Accéder à mon offre
                  </button>
                </form>

                <div className="my-access-links">
                  <a href="/">Relance / menu</a>
                  <a href="/offre">Voir les offres</a>
                  <a href="/pour-qui">Est-ce pour toi ?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .my-access-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 30%),
            radial-gradient(circle at bottom right, rgba(255,255,255,0.03), transparent 26%),
            #0a0a0a;
          color: #f5f1ea;
        }

        .my-access-hero {
          padding: 120px 0 100px;
        }

        .page-shell {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .my-access-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(420px, 0.85fr);
          gap: 28px;
          align-items: start;
        }

        .section-label,
        .my-access-panel-kicker {
          display: inline-block;
          font-size: 12px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(245, 241, 234, 0.56);
          margin-bottom: 18px;
        }

        .my-access-title,
        .my-access-panel h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 500;
          letter-spacing: -0.04em;
          line-height: 0.95;
          margin: 0;
        }

        .my-access-title {
          font-size: clamp(3.5rem, 7vw, 7rem);
          max-width: 8ch;
        }

        .my-access-text {
          margin-top: 24px;
          max-width: 620px;
          font-size: clamp(1rem, 1.35vw, 1.15rem);
          line-height: 1.8;
          color: rgba(245, 241, 234, 0.78);
        }

        .my-access-panel {
          position: sticky;
          top: 24px;
        }

        .my-access-panel-inner {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border-radius: 28px;
          padding: 28px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.24);
        }

        .my-access-panel h2 {
          font-size: clamp(2rem, 3vw, 3.2rem);
          margin-bottom: 14px;
        }

        .my-access-panel p {
          margin: 0;
          line-height: 1.8;
          color: rgba(245, 241, 234, 0.74);
        }

        .my-access-form {
          display: grid;
          gap: 14px;
          margin-top: 28px;
        }

        .my-access-input {
          width: 100%;
          min-height: 54px;
          border-radius: 999px;
          border: 1px solid rgba(245, 241, 234, 0.16);
          background: rgba(10, 10, 10, 0.5);
          color: #f5f1ea;
          padding: 0 18px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }

        .my-access-input:focus {
          border-color: rgba(245, 241, 234, 0.36);
          transform: translateY(-1px);
        }

        .my-access-input::placeholder {
          color: rgba(245, 241, 234, 0.4);
        }

        .my-access-button {
          min-height: 54px;
          border: none;
          border-radius: 999px;
          background: #f5f1ea;
          color: #0a0a0a;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }

        .my-access-button:hover {
          transform: translateY(-2px);
        }

        .my-access-error {
          margin-top: 22px;
          padding: 14px 16px;
          border-radius: 14px;
          background: rgba(255, 80, 80, 0.08);
          border: 1px solid rgba(255, 80, 80, 0.18);
          color: #ffb4b4;
          line-height: 1.6;
        }

        .my-access-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 18px;
        }

        .my-access-links a {
          color: rgba(245, 241, 234, 0.72);
          text-decoration: none;
          border-bottom: 1px solid rgba(245, 241, 234, 0.18);
          padding-bottom: 2px;
        }

        .my-access-links a:hover {
          color: #f5f1ea;
          border-bottom-color: rgba(245, 241, 234, 0.48);
        }

        @media (max-width: 980px) {
          .my-access-layout {
            grid-template-columns: 1fr;
          }

          .my-access-panel {
            position: static;
          }
        }

        @media (max-width: 640px) {
          .my-access-hero {
            padding: 96px 0 80px;
          }

          .page-shell {
            padding: 0 18px;
          }

          .my-access-panel-inner {
            padding: 22px;
            border-radius: 24px;
          }
        }
      `}</style>
    </main>
  );
}