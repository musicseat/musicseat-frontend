import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Image 
              src="/images/ICON009.png" 
              alt="MusicSet" 
              width={32}
              height={32}
              className={styles.logo}
            />
            <span className={styles.tagline}>
              Viver da música é direito.
            </span>
          </div>

          <div className={styles.links}>
            <a href="https://instagram.com/musicseat" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="mailto:musicseat.co@gmail.com">
              Contato
            </a>
            <a href="https://musicset.ms" target="_blank" rel="noopener noreferrer">
              Plataforma
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} MusicSet. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
