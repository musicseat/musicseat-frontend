import styles from './Hero.module.css'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Grafismo animado de fundo */}
      <div className={styles.backgroundGraphic}></div>
      
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Image 
            src="/images/ICON009.png" 
            alt="MusicSet Logo" 
            width={80}
            height={80}
            className={styles.logo}
          />
        </div>

        {/* Headline com gradient */}
        <h1 className={styles.headline}>
          Viver da música <br />
          <span className={styles.gradientText}>não é sorte.</span> <br />
          É direito.
        </h1>

        {/* Sub-headline */}
        <p className={styles.subheadline}>
          A plataforma que conecta músicos, transforma talentos em carreiras 
          e redefine o acesso à música como trabalho.
        </p>

        {/* CTA */}
        <a href="https://musicset.ms" target="_blank" rel="noopener noreferrer" className={styles.cta}>
          Acessar Plataforma
        </a>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
