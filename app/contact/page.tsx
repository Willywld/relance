'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase/client'

export default function ContactPage() {
  const [nom, setNom] = useState('')
  const [mail, setMail] = useState('')
  const [typeDeProjet, setTypeDeProjet] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setFeedback('')

    const { error } = await supabase.from('contact_requests').insert([
      {
        nom,
        mail,
        type_de_projet: typeDeProjet,
        message,
      },
    ])

    if (error) {
      setFeedback("Une erreur est survenue. Réessaie dans un instant.")
      setLoading(false)
      return
    }

    setFeedback('Message envoyé avec succès.')
    setNom('')
    setMail('')
    setTypeDeProjet('')
    setMessage('')
    setLoading(false)
  }

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

          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              <span>Nom</span>
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </label>

            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                placeholder="vous@email.com"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                required
              />
            </label>

            <label>
              <span>Type de projet</span>
              <input
                type="text"
                name="project"
                placeholder="Marque, site, repositionnement..."
                value={typeDeProjet}
                onChange={(e) => setTypeDeProjet(e.target.value)}
                required
              />
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                rows={6}
                placeholder="Décris le projet, le contexte et ce qui doit remonter."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>

            <button type="submit" className="button-primary" disabled={loading}>
              {loading ? 'Envoi...' : 'Envoyer'}
            </button>

            {feedback && <p className="form-feedback">{feedback}</p>}
          </form>
        </div>
      </section>
    </main>
  )
}