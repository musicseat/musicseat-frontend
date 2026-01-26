import styles from './Badge.module.css'

export default function Badge({ name, role, photo, color = 'lime' }) {
  return (
    <div className={styles.badge}>
      {/* Grafismo no topo */}
      <div className={`${styles.graphic} ${styles[color]}`}>
        <svg viewBox="0 0 200 60" className={styles.wave}>
          <path 
            d="M0,30 Q50,10 100,30 T200,30" 
            fill="none" 
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Foto (placeholder se não tiver foto) */}
      <div className={styles.photoContainer}>
        {photo ? (
          <img src={photo} alt={name} className={styles.photo} />
        ) : (
          <div className={styles.photoPlaceholder}>
            <span>{name?.charAt(0) || '?'}</span>
          </div>
        )}
      </div>

      {/* Nome e Cargo */}
      <div className={styles.info}>
        <h3 className={styles.name}>{name || 'Nome'}</h3>
        <p className={`${styles.role} ${styles[`role-${color}`]}`}>
          {role || 'Cargo'}
        </p>
      </div>

      {/* Logo pequeno no rodapé */}
      <div className={styles.footer}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={styles.logoIcon}>
          <path d="M3 12 L8 7 L8 17 Z M16 7 L21 12 L16 17 Z" />
        </svg>
      </div>
    </div>
  )
}
