export default function MyAccessPage() {
  return (
    <main style={{ padding: 40, maxWidth: 520, margin: "0 auto" }}>
      <h1>My Access</h1>
      <p>Entre l’email utilisé lors de ton achat pour retrouver ton accès.</p>

      <form
        action="/api/my-access"
        method="POST"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          marginTop: 24,
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="ton@email.com"
          required
          style={{
            padding: "14px 16px",
            borderRadius: 10,
            border: "1px solid rgba(0,0,0,0.12)",
            fontSize: 16,
          }}
        />

        <button
          type="submit"
          style={{
            padding: "14px 16px",
            borderRadius: 10,
            border: "none",
            background: "black",
            color: "white",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Accéder à mon offre
        </button>
      </form>
    </main>
  );
}