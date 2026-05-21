import Link from "next/link";
import styles from "./page.module.css";

export const dynamic = "force-dynamic";

export default function PourQuiPage() {
  return (
    <main className={styles.page}>
      <section className={`${styles.hero} ${styles.reveal}`}>
        <div className={styles.kicker}>RELANCE</div>
        <h1 className={styles.heroTitle}>
          Ce n’est pas pour tout le monde.
          <br />
          Et c’est précisément le but.
        </h1>
        <p className={styles.lead}>
          RELANCE s’adresse aux profils qui sentent qu’il y a un écart entre ce
          qu’ils valent, ce qu’ils montrent et ce que leur image renvoie
          réellement. Si tu veux clarifier ton positionnement, reprendre la main
          sur ton récit et construire quelque chose de plus net, plus juste et
          plus lisible, tu es probablement au bon endroit.
        </p>
      </section>

      <section className={`${styles.split} ${styles.reveal}`}>
        <div className={styles.number}>01</div>
        <div className={styles.content}>
          <p className={styles.overline}>Pour qui</p>
          <h2 className={styles.sectionTitle}>
            Pour celles et ceux qui ont quelque chose,
            <br />
            mais pas encore la bonne lecture.
          </h2>

          <div className={styles.grid}>
            <article className={styles.card}>
              <h3>Tu avances, mais rien ne s’aligne</h3>
              <p>
                Tu as une offre, des idées, un univers, parfois même de vraies
                qualités. Pourtant, le tout paraît flou, dispersé ou mal perçu.
              </p>
            </article>

            <article className={styles.card}>
              <h3>Tu veux être plus clair, pas plus bruyant</h3>
              <p>
                Tu ne cherches pas à surjouer, mais à mieux structurer ton
                message, ton image et ta présence.
              </p>
            </article>

            <article className={styles.card}>
              <h3>Tu sens que ton niveau mérite mieux</h3>
              <p>
                Ce que tu proposes est plus solide que ce que ton positionnement
                actuel laisse comprendre.
              </p>
            </article>

            <article className={styles.card}>
              <h3>Tu veux une direction exploitable</h3>
              <p>
                Pas juste une impression générale, mais une lecture nette, des
                axes précis et une façon concrète d’avancer.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={`${styles.statement} ${styles.reveal}`}>
        <p className={styles.statementText}>
          RELANCE n’est pas là pour inventer une façade.
          <br />
          RELANCE sert à remettre de la cohérence là où il y a déjà du fond.
        </p>
      </section>

      <section className={`${styles.split} ${styles.reverse} ${styles.reveal}`}>
        <div className={styles.number}>02</div>
        <div className={styles.content}>
          <p className={styles.overline}>Pas pour tout le monde</p>
          <h2 className={styles.sectionTitle}>
            Si tu veux une solution magique,
            <br />
            ce ne sera pas le bon endroit.
          </h2>

          <div className={styles.list}>
            <div className={styles.listItem}>
              <span>01</span>
              <p>
                Si tu veux juste un rendu joli sans travail de fond sur le
                positionnement.
              </p>
            </div>
            <div className={styles.listItem}>
              <span>02</span>
              <p>
                Si tu attends une transformation instantanée sans implication de
                ta part.
              </p>
            </div>
            <div className={styles.listItem}>
              <span>03</span>
              <p>
                Si tu veux parler à tout le monde au lieu d’assumer une lecture
                plus précise de ta valeur.
              </p>
            </div>
            <div className={styles.listItem}>
              <span>04</span>
              <p>
                Si tu n’es pas prêt à regarder avec honnêteté ce qui bloque dans
                ton image, ton message ou ton offre.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.process} ${styles.reveal}`}>
        <div className={styles.sectionHead}>
          <p className={styles.overline}>Comment</p>
          <h2 className={styles.sectionTitle}>
            Une lecture.
            <br />
            Un repositionnement.
            <br />
            Une trajectoire.
          </h2>
        </div>

        <div className={styles.processGrid}>
          <article className={styles.step}>
            <span>01</span>
            <h3>Observer</h3>
            <p>
              On regarde ce qui est visible, ce qui est perçu et ce qui manque.
              L’idée est d’identifier l’écart entre ton intention et la lecture
              réelle.
            </p>
          </article>

          <article className={styles.step}>
            <span>02</span>
            <h3>Comprendre</h3>
            <p>
              On clarifie les blocages, les incohérences, les signaux faibles et
              les éléments qui brouillent ton positionnement.
            </p>
          </article>

          <article className={styles.step}>
            <span>03</span>
            <h3>Reformuler</h3>
            <p>
              On redonne de la tenue à ton image, à ton récit et à ton offre
              pour que l’ensemble soit plus lisible, plus fort et plus juste.
            </p>
          </article>
        </div>
      </section>

      <section className={`${styles.offers} ${styles.reveal}`}>
        <div className={styles.sectionHead}>
          <p className={styles.overline}>Choisir</p>
          <h2 className={styles.sectionTitle}>
            Trois niveaux.
            <br />
            Trois profondeurs.
          </h2>
        </div>

        <div className={styles.offersGrid}>
          <article className={styles.offerCard}>
            <p className={styles.offerLabel}>RELANCE +</p>
            <h3>Diagnostic</h3>
            <p>
              Pour obtenir une lecture claire, identifier les points de friction
              et comprendre ce qui mérite d’être corrigé en priorité.
            </p>
          </article>

          <article className={`${styles.offerCard} ${styles.featured}`}>
            <p className={styles.offerLabel}>RELANCE ++</p>
            <h3>Repositionnement</h3>
            <p>
              Pour aller plus loin, retravailler la perception globale et poser
              une direction plus affirmée, plus cohérente et plus structurée.
            </p>
          </article>

          <article className={styles.offerCard}>
            <p className={styles.offerLabel}>RELANCE PLUS</p>
            <h3>Offre complète</h3>
            <p>
              Pour celles et ceux qui veulent une lecture d’ensemble, un
              repositionnement plus poussé et une vision plus complète de la
              suite.
            </p>
          </article>
        </div>
      </section>

      <section className={`${styles.cta} ${styles.reveal}`}>
        <p className={styles.ctaText}>
          Si tu as besoin de comprendre où tu en es,
          <br />
          quoi corriger,
          <br />
          et quelle offre est réellement adaptée,
          <br />
          commence ici.
        </p>

        <div className={styles.actions}>
          <Link href="/offre" className={`${styles.button} ${styles.primary}`}>
            Voir les offres
          </Link>
          <Link href="/my-access" className={`${styles.button} ${styles.secondary}`}>
            My Access
          </Link>
        </div>
      </section>
    </main>
  );
}