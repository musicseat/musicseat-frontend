'use client'

import { useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: '🎉 Você está na lista! Em breve entraremos em contato.' 
        })
        setFormData({ name: '', email: '' })
      } else {
        throw new Error(data.error || 'Erro ao enviar')
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Ops! Algo deu errado. Tente novamente.' 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.hero} id="cadastro">
      <div className={styles.container}>
        {/* Background Gradient Orbs */}
        <div className={styles.orbLime}></div>
        <div className={styles.orbCyan}></div>
        <div className={styles.orbMagenta}></div>

        <div className={styles.content}>
          <h1 className={styles.headline}>
            Viver da música <br />
            <span className={styles.gradient}>não é sorte.</span> <br />
            É direito.
          </h1>

          <p className={styles.subheadline}>
            Junte-se à plataforma que conecta músicos, transforma talentos 
            em carreiras e redefine o acesso à música como trabalho.
          </p>

          {/* Lead Capture Form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={loading}
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={loading}
                className={styles.input}
              />
            </div>

            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Entrar na lista de espera'}
            </button>

            {status.message && (
              <p className={`${styles.status} ${styles[status.type]}`}>
                {status.message}
              </p>
            )}
          </form>

          <p className={styles.privacy}>
            Seus dados estão seguros. Sem spam, prometemos. 🎸
          </p>
        </div>
      </div>
    </section>
  )
}
