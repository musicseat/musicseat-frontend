'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import styles from './Manifesto.module.css'

export default function Manifesto() {
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

    const elements = sectionRef.current?.querySelectorAll(`.${styles.animateOnScroll}`)
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.manifesto} id="manifesto" ref={sectionRef}>
      <div className={styles.container}>
        {/* Block 1 */}
        <div className={`${styles.block} ${styles.animateOnScroll}`}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Do palco à <span className={styles.gradient}>renda</span>
            </h2>
            <p className={styles.text}>
              Músicos brasileiros enfrentam invisibilidade no mercado. 
              A MusicSet transforma essa realidade, conectando talentos 
              a oportunidades reais e construindo carreiras sustentáveis.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <Image 
              src="/images/Imagem004.jpeg" 
              alt="Músicos em estúdio"
              fill
              className={styles.image}
            />
          </div>
        </div>

        {/* Block 2 - Reversed */}
        <div className={`${styles.block} ${styles.reversed} ${styles.animateOnScroll}`}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <Image 
              src="/images/Imagem007.jpg" 
              alt="Músico profissional"
              fill
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Música como <span className={styles.gradient}>trabalho</span>
            </h2>
            <p className={styles.text}>
              Chega de sobreviver da música. É hora de viver dela. 
              Nossa plataforma oferece as ferramentas, conexões e suporte 
              para que você profissionalize sua arte.
            </p>
          </div>
        </div>

        {/* Block 3 */}
        <div className={`${styles.block} ${styles.animateOnScroll}`}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Uma rede de <span className={styles.gradient}>transformação</span>
            </h2>
            <p className={styles.text}>
              Conecte-se com outros músicos, produtores e profissionais da indústria. 
              Colabore, aprenda e cresça em uma comunidade que acredita que 
              viver da música é um direito, não um privilégio.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imageGlow}></div>
            <Image 
              src="/images/Imagem014.jpg" 
              alt="Comunidade musical"
              fill
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
