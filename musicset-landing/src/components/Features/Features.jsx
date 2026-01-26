import styles from './Features.module.css'

const features = [
  {
    title: 'Conecte-se',
    description: 'Rede de músicos e oportunidades para expandir sua presença no mercado musical.',
    color: 'cyan',
    icon: '🎸'
  },
  {
    title: 'Profissionalize',
    description: 'Ferramentas para crescer e desenvolver sua carreira como músico profissional.',
    color: 'orange',
    icon: '🎹'
  },
  {
    title: 'Transforme',
    description: 'Converta seu talento em carreira sustentável e reconhecimento no mercado.',
    color: 'magenta',
    icon: '🎵'
  }
]

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={styles.card}
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className={`${styles.iconWrapper} ${styles[feature.color]}`}>
                <span className={styles.icon}>{feature.icon}</span>
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
