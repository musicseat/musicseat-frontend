'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './Features.module.css'

const features = [
  {
    image: '/images/IMAGEMPrancheta-1.png',
    title: 'Conecte-se',
    description: 'Rede de músicos, produtores e oportunidades para expandir sua presença no mercado musical.',
    color: 'cyan'
  },
  {
    image: '/images/IMAGENS2Prancheta-3.png',
    title: 'Profissionalize',
    description: 'Ferramentas e recursos para desenvolver sua carreira de forma sustentável e estratégica.',
    color: 'orange'
  },
  {
    image: '/images/IMAGEMPrancheta-4.png',
    title: 'Transforme',
    description: 'Converta seu talento em carreira real, com reconhecimento e retorno financeiro.',
    color: 'magenta'
  }
]

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll(`.${styles.card}`)
    cards?.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.features} id="como-funciona" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Como a <span className={styles.gradient}>MusicSet</span> funciona
          </h2>
          <p className={styles.subtitle}>
            Três pilares para transformar sua carreira musical
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={`${styles.card} ${styles[feature.color]}`}>
              <div className={styles.imageWrapper}>
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={200}
                  height={200}
                  className={styles.instrumentImage}
                />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
              
              {/* Decorative gradient */}
              <div className={styles.cardGradient}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
