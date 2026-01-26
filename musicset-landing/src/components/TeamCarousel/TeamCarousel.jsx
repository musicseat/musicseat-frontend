'use client'

import { useState } from 'react'
import styles from './TeamCarousel.module.css'
import Badge from './Badge'

const teamMembers = [
  {
    name: 'Yuri',
    role: 'CEO',
    photo: null,
    color: 'lime'
  },
  {
    name: 'Vitor',
    role: 'CTO',
    photo: null,
    color: 'cyan'
  },
  {
    name: 'Victor',
    role: 'Desenvolvedor Fullstack',
    photo: null,
    color: 'orange'
  },
  {
    name: 'Pedro',
    role: 'Analista',
    photo: null,
    color: 'magenta'
  },
  {
    name: 'Novo Membro',
    role: 'Em breve',
    photo: null,
    color: 'lime'
  }
]

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  return (
    <section className={styles.team}>
      <div className={styles.container}>
        <h2 className={styles.title}>Quem faz a MusicSet acontecer</h2>
        
        <div className={styles.carouselWrapper}>
          {/* Botão Anterior */}
          <button 
            onClick={prev} 
            className={styles.navButton}
            aria-label="Anterior"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Carrossel */}
          <div className={styles.carousel}>
            <div 
              className={styles.track}
              style={{ 
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {teamMembers.map((member, index) => (
                <div key={index} className={styles.slide}>
                  <Badge {...member} />
                </div>
              ))}
            </div>
          </div>

          {/* Botão Próximo */}
          <button 
            onClick={next} 
            className={styles.navButton}
            aria-label="Próximo"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Dots de navegação */}
        <div className={styles.dots}>
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
              aria-label={`Ir para membro ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
