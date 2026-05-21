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
      setFeedback('Transmission reçue.')
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
      setFeedback('La transmission a été interrompue. Réessaie dans un instant.')
      setFeedbackType('error')
      setLoading(false)
      return
    }

    setFeedback('Transmission reçue. Le signal peut remonter.')
    setFeedbackType('success')
    resetForm()
    setLoading(false)
  }

  return (
    <main className="contact-page contact-final">
      <a href="/" className="return-home-pill">
        Relance / Menu
      </a>

      <div className="contact-bg final-bg" aria-hidden="true">
        <div className="contact-beam beam-a" />
        <div className="contact-beam beam-b" />
        <div className="final-glow glow-a" />
        <div className="final-glow glow-b" />
        <div className="final-grid" />
        <div className="final-noise" />
      </div>

      <section className="contact-hero final-contact-hero">
        <div className="page-shell final-contact-shell">
          <div className="final-contact-copy">
            <div className="section-label">Acte final — Transmission</div>

            <h1 className="contact-title final-contact-title">
              Décrire
              <br />
              ce qui doit
              <br />
              remonter.
            </h1>

            <p className="contact-text final-contact-text">
              Quand la clarté baisse, que l’impact se dilue ou que la présence ne
              tient plus, il faut rouvrir un passage. Décris le projet, le
              contexte et le point de rupture. Relance reprendra le signal là où
              il a perdu de sa force.
            </p>

            <div className="final-contact-markers">
              <div className="final-marker">
                <span>01</span>
                <p>Nommer la perte de tension.</p>
              </div>
              <div className="final-marker">
                <span>02</span>
                <p>Isoler ce qui doit remonter.</p>
              </div>
              <div className="final-marker">
                <span>03</span>
                <p>Relancer avec plus de netteté.</p>
              </div>
            </div>
          </div>

          <div className="final-form-wrap">
            <div className="final-form-topline">
              <span className="pulse-dot" />
              Canal ouvert
            </div>

            <form className="contact-form final-contact-form" onSubmit={handleSubmit}>
              <div
                className="hp-field"
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
                  rows={7}
                  placeholder="Décris le projet, le contexte et ce qui doit remonter."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>

              <div className="final-form-meta">
                <p className={`contact-counter final-counter ${messageCount >= 20 ? 'is-valid' : ''}`}>
                  {messageCount < 20
                    ? `Seuil de clarté : 20 caractères (${messageCount}/20)`
                    : `${messageCount} caractères — signal exploitable`}
                </p>
              </div>

              <button
                type="submit"
                className="button-primary final-submit"
                disabled={loading}
              >
                <span className="final-submit-text">
                  {loading ? 'Transmission en cours...' : 'Transmettre le projet'}
                </span>
                <span className="final-submit-glint" aria-hidden="true" />
              </button>

              <div className="final-feedback-zone" aria-live="polite">
                {feedback && (
                  <p
                    className={`form-feedback final-feedback ${feedbackType}`}
                    role={feedbackType === 'error' ? 'alert' : 'status'}
                  >
                    {feedback}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}