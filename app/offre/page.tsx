"use client";

import { useState } from "react";
import Link from "next/link";

export default function OfferPage() {
  const [loadingOffer, setLoadingOffer] = useState<string | null>(null);

  const offers = [
    {
      id: "01",
      slug: "diagnostic",
      name: "Relance Diagnostic",
      price: "290 €",
      tone: "peach",
      intro:
        "Pour les projets qui sentent qu’il y a une perte de justesse, sans encore savoir exactement d’où elle vient.",
      points: [
        "Lecture du projet, de son image et de son positionnement perçu.",
        "Repérage des zones de friction, de flou ou de perte d’intensité.",
        "Retour synthétique avec priorités concrètes de correction.",
        "Format pensé pour débloquer vite, sans engager une refonte lourde.",
      ],
      cta: "Choisir cette relance",
      meta: "Porte d’entrée · lecture ciblée",
    },
    {
      id: "02",
      slug: "repositionnement",
      name: "Relance Repositionnement",
      price: "690 €",
      tone: "blue",
      intro:
        "Pour les projets qui ont déjà une base, mais dont le message, l’image ou la direction ne portent plus suffisamment juste.",
      points: [
        "Diagnostic initial puis clarification du positionnement réel à reprendre.",
        "Travail sur le discours, la perception et la direction générale du projet.",
        "Recommandations structurées pour réaligner le fond et la forme.",
        "Format idéal pour relancer une marque ou un projet déjà existant.",
      ],
      cta: "Choisir cette relance",
      meta: "Offre centrale · clarification + cap",
      featured: true,
    },
    {
      id: "03",
      slug: "complete",
      name: "Relance Complète",
      price: "1 290 €",
      tone: "lime",
      intro:
        "Pour les projets qui demandent une intervention plus profonde, à la fois stratégique, visuelle et perceptive.",
      points: [
        "Lecture complète du projet et de ce qui freine sa projection.",
        "Repositionnement plus poussé et direction d’image plus articulée.",
        "Travail global pour retrouver cohérence, crédibilité et intensité.",
        "Format pensé pour repartir sur une base plus nette.",
      ],
      cta: "Choisir cette relance",
      meta: "Relance haute · reconstruction plus ample",
    },
  ];

  const effects = [
    "Clarté retrouvée",
    "Perception rehaussée",
    "Direction plus crédible",
    "Base plus juste pour la suite",
  ];

  const steps = [
    "Lecture du projet et de la perte d’intensité.",
    "Cadrage de ce qui doit être corrigé, déplacé ou clarifié.",
    "Réécriture du signal, de la direction ou de la perception.",
    "Restitution synthétique, exploitable, pensée pour relancer vite.",
  ];

 async function startCheckout(offer: string) {
  setLoadingOffer(offer);

  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ offer }),
  });

  const data = await res.json();

  if (!res.ok) {
    alert(data?.error || "Erreur checkout");
    setLoadingOffer(null);
    return;
  }

  if (!data?.url) {
    alert("URL Stripe manquante");
    setLoadingOffer(null);
    return;
  }

  window.location.href = data.url;
}

  return (
    <main className="offer-page" id="top">
      <div className="offer-bg" aria-hidden="true">
        <span className="offer-ray a" />
        <span className="offer-ray b" />
        <span className="offer-glow c" />
      </div>

      <section className="offer-hero">
        <div className="page-shell offer-hero-inner">
          <div>
            <span className="eyebrow">Offre Relance</span>
            <h1 className="offer-title">Choisir la relance juste.</h1>
            <p className="offer-text" style={{ marginTop: 24 }}>
              Toutes les situations ne demandent pas le même niveau d’intervention.
              Certaines ont besoin d’une lecture nette. D’autres d’un repositionnement.
              D’autres encore d’une remise à niveau plus profonde, pour que le projet
              retrouve une présence juste, désirable et crédible.
            </p>
            <div className="offer-actions">
              <Link href="#offres" className="button-primary">
                Voir les relances
              </Link>
              <Link href="#contact" className="button-secondary">
                Parler du projet
              </Link>
            </div>
          </div>

          <div className="offer-orbit" aria-hidden="true">
            <div className="offer-orbit-core">Relance</div>
            <div className="offer-orbit-tag a">Diagnostic</div>
            <div className="offer-orbit-tag b">Repositionnement</div>
            <div className="offer-orbit-tag c">Complète</div>
            <div className="offer-orbit-tag d">Direction d’image</div>
          </div>
        </div>
      </section>

      <section className="offer-qualifier" id="qualification">
        <div className="page-shell">
          <div className="offer-qualifier-shell">
            <span className="section-label">Orientation</span>
            <h2 className="offer-divider-title">Avant de reconstruire, il faut savoir où ça cède.</h2>
          </div>

          <div className="offer-lines">
            <div className="offer-line">
              <div className="offer-line-id">01</div>
              <div className="offer-line-text">
                Tu sens qu’il y a un problème, mais tu ne sais pas encore précisément ce qui affaiblit le projet.
              </div>
            </div>
            <div className="offer-line">
              <div className="offer-line-id">02</div>
              <div className="offer-line-text">
                Le projet existe déjà, mais son image, son discours ou sa perception ne tiennent plus correctement.
              </div>
            </div>
            <div className="offer-line">
              <div className="offer-line-id">03</div>
              <div className="offer-line-text">
                Tu as besoin d’une relance plus profonde, avec une direction plus nette, plus cohérente et plus ambitieuse.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-grid-section" id="offres">
        <div className="page-shell">
          <span className="section-label">Les relances</span>
          <div className="offer-grid">
            {offers.map((offer) => (
              <article key={offer.id} className={`offer-card ${offer.tone} ${offer.featured ? "featured" : ""}`}>
                <div className="offer-card-top">
                  <div className="offer-card-id">{offer.id}</div>
                  <h2>{offer.name}</h2>
                  <p>{offer.intro}</p>
                  <div className="offer-price">{offer.price}</div>
                  <div className="offer-meta">{offer.meta}</div>
                  <ul className="offer-list">
                    {offer.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  className={offer.featured ? "button-primary" : "button-secondary"}
                  onClick={() => startCheckout(offer.slug)}
                  disabled={loadingOffer === offer.slug}
                >
                  {loadingOffer === offer.slug ? "Ouverture..." : offer.cta}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="offer-effects">
        <div className="page-shell offer-effects-layout">
          <div className="offer-effects-copy">
            <span className="section-label">Effets</span>
            <h2 className="offer-process-title" style={{ fontSize: "clamp(3rem,6vw,6rem)", maxWidth: "8ch" }}>
              Ce que chaque relance change réellement.
            </h2>
            <p style={{ marginTop: 24 }}>
              L’objectif n’est pas seulement de produire une recommandation ou une direction esthétique.
              Chaque relance doit remettre le projet dans une lecture plus juste, plus crédible et plus lisible pour l’extérieur.
            </p>
          </div>

          <div className="offer-effects-grid">
            {effects.map((effect) => (
              <div key={effect} className="offer-effect-box">
                {effect}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="offer-process" id="process">
        <div className="page-shell offer-process-layout">
          <div className="offer-process-copy">
            <span className="section-label">Process</span>
            <h2 className="offer-process-title" style={{ fontSize: "clamp(3rem,6vw,6rem)", maxWidth: "8ch" }}>
              Une méthode courte, mais nette.
            </h2>
            <p style={{ marginTop: 24 }}>
              Le parcours reste lisible et rassurant. Il ne s’agit pas d’empiler des couches,
              mais de lire juste, recentrer, recomposer et restituer un cap utilisable.
            </p>
          </div>

          <div className="offer-process-steps">
            {steps.map((step, index) => (
              <div key={step} className="offer-step">
                <div className="offer-step-id">0{index + 1}</div>
                <div className="offer-step-text">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="offer-ending" id="contact">
        <div className="page-shell">
          <div className="offer-ending-shell">
            <div>
              <div className="offer-ending-label">Entrer dans Relance</div>
              <h2 className="offer-ending-title">Choisir le bon niveau d’intervention.</h2>
              <p className="offer-ending-text">
                Le bon format ne sert pas à impressionner. Il sert à intervenir juste, au bon moment,
                avec le bon degré d’intensité.
              </p>
            </div>

            <div className="offer-actions">
              <Link href="/contact" className="button-primary">
                Demander une relance
              </Link>
              <Link href="/services" className="button-secondary">
                Revoir les services
              </Link>
              <Link href="/" className="button-secondary">
                Relance / menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}