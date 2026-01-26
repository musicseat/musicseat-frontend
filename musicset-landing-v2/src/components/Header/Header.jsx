'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Image 
            src="/images/ICON009.png" 
            alt="MusicSet" 
            width={48}
            height={48}
            className={styles.logoIcon}
          />
          <span className={styles.logoText}>MusicSet</span>
        </div>
      </div>
    </header>
  )
}
