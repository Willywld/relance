'use client'

import { useMemo, useState } from 'react'
import { supabase } from '../../lib/supabase/client'

export default function ContactPage() {
  const [nom, setNom] = useState('')
  const [mail, setMail] = useState('')
  const [typeDeProjet, setTypeDeProjet] = useState('')
  const [message, setMessage] = useState('')
  const [company, setCompany] = useState('')
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [feedbackType, setFeedbackType] = useState<'success' | 'error' | ''>('')

  const messageCount = useMemo(() => message.trim().length, [message])

  const resetForm = () => {
    setNom('')
    setMail('')
    setTypeDeProjet('')
    setMessage('')
    setCompany('')
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setFeedback('')
    setFeedbackType('')

    if (!nom.trim() || !mail.trim() || !typeDeProjet.trim() || !message.trim()) {
      setFeedback('Merci de remplir tous les champs.')
      setFeedbackType('error')
      setLoading(false)
      return
    }

    if (message.trim().length < 20) {
      setFeedback('Ton message doit contenir au moins 20 caractères.')
      setFeedbackType('error')
      setLoading(false)
      return
    }

    if (company.trim() !== '') {
      setFeedback('Message envoyé avec succès.')
      setFeedbackType('success')
      resetForm()
      setLoading(false)
      return
    }

    const { error } = await supabase.from('contact_requests').insert([
      {
        nom: nom.trim(),
        mail: mail.trim(),
        type_de_projet: typeDeProjet.trim(),
        message: message.trim(),
      },
    ])

    if (error) {
      setFeedback("Une erreur est survenue. Réessaie dans un instant.")
      setFeedbackType('error')
      setLoading(false)
      return
    }

    setFeedback('Message envoyé avec succès.')
    setFeedbackType('success')
    resetForm()
    setLoading(false)
  }

  return (
    <main className="contact-page contact-page-premium">
      <a href="/" className="return-home-pill">
        Relance / Menu
      </a>

      <div className="contact-bg" aria-hidden="true">
        <div className="contact-beam beam-a" />
        <div className="contact-beam beam-b" />
        <div className="contact-orb orb-a" />
        <div className="contact-orb orb-b" />
        <div className="contact-grid" />
      </div>

      <section className="contact-hero">
        <div className="page-shell contact-hero-inner">
          <div className="contact-copy contact-copy-animated">
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

          <form className="contact-form contact-form-premium" onSubmit={handleSubmit}>
            <div
              style={{
                position: 'absolute',
                left: '-9999px',
                opacity: 0,
                pointerEvents: 'none',
              }}
              aria-hidden="true"
            >
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                tabIndex={-1}
                autoComplete="one-time-code"
              />
            </div>

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

            <div className="contact-form-meta">
              <p className={`contact-counter ${messageCount >= 20 ? 'is-valid' : ''}`}>
                {messageCount < 20
                  ? `Minimum conseillé : 20 caractères (${messageCount}/20)`
                  : `${messageCount} caractères`}
              </p>
            </div>

            <button type="submit" className="button-primary button-primary-premium" disabled={loading}>
              <span>{loading ? 'Envoi...' : 'Envoyer'}</span>
            </button>

            {feedback && (
              <p
                className={`form-feedback form-feedback-premium ${feedbackType}`}
                aria-live="polite"
                role={feedbackType === 'error' ? 'alert' : 'status'}
              >
                {feedback}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}