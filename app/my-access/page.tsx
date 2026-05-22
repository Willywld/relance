export const dynamic = "force-dynamic";

type SearchParams = Promise<{ error?: string }>;

export default async function MyAccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { error } = await searchParams;
  const hasError = error === "impossible";

  return (
    <main className="my-access-page">
      <div className="my-access-atmosphere" aria-hidden="true">
        <div className="my-access-orb my-access-orb-1" />
        <div className="my-access-orb my-access-orb-2" />
        <div className="my-access-grid" />
      </div>

      <section className="my-access-shell">
        <div className="my-access-panel">
          <div className="my-access-copy">
            <p className="my-access-kicker">Accès privé</p>
            <h1 className="my-access-title">
              Retrouve ton accès
              <br />
              dans un espace à part.
            </h1>
            <p className="my-access-intro">
              Entre l’adresse email utilisée lors de ton achat pour retrouver
              ton offre, reprendre le fil et accéder à ton espace personnel.
            </p>
          </div>

          {hasError && (
            <div
              className="my-access-alert"
              role="alert"
              aria-live="polite"
            >
              Impossible de retrouver un accès avec cette adresse email.
              Vérifie l’adresse exacte utilisée au moment de l’achat.
            </div>
          )}

          <form action="/api/my-access" method="POST" className="my-access-form">
            <div className="my-access-field">
              <label htmlFor="email" className="my-access-label">
                Adresse email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="ton@email.com"
                autoComplete="email"
                required
                aria-invalid={hasError}
                aria-describedby={hasError ? "my-access-error" : undefined}
                className="my-access-input"
              />
            </div>

            {hasError && (
              <p id="my-access-error" className="my-access-error-text">
                Utilise l’email exact avec lequel tu as acheté ton offre.
              </p>
            )}

            <button type="submit" className="my-access-button">
              Accéder à mon offre
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}