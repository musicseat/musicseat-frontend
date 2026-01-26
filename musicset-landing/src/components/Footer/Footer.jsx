import styles from './Footer.module.css'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* CTA Final */}
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>
            Seu próximo passo <br />
            <span className={styles.gradient}>é MusicSet.</span>
          </h2>
          <a 
            href="https://musicset.ms" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Começar agora
          </a>
        </div>

        {/* Linha divisória */}
        <div className={styles.divider}></div>

        {/* Footer Info */}
        <div className={styles.info}>
          <div className={styles.logoSection}>
            <Image 
              src="/images/ICON009.png" 
              alt="MusicSet" 
              width={40}
              height={40}
              className={styles.logo}
            />
          </div>

          <div className={styles.links}>
            <a href="https://musicset.ms" target="_blank" rel="noopener noreferrer">
              Plataforma
            </a>
            <a href="mailto:contato@musicset.ms">
              Contato
            </a>
            <a href="https://instagram.com/musicset" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>

          <p className={styles.copyright}>
            © {currentYear} MusicSet. Viver da música é direito.
          </p>
        </div>
      </div>
    </footer>
  )
}
