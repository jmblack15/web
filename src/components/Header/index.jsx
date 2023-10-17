"use client"
import Image from "next/image"
import styles from './header.module.css'
import { useState } from "react"
import Link from "next/link"

const Header = () => {

  const [isBurguer, setIsBurguer] = useState(false)

  const handleMenu = () => {
    setIsBurguer(!isBurguer)

  }

  return (
    <header className={styles.header}>

      <nav>
        <a
          className={styles.logo_container}
          href="/"
        >
          <Image
            src='/logo_ciudad.png'
            alt="logo"
            fill
            sizes="313px"
            style={{
              objectFit: 'contain'
            }}
          />
        </a>

        <div
          className={isBurguer ? `${styles.hamburguer} ${styles.hamburguer_active}` : styles.hamburguer}
          onClick={handleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <div
        className={isBurguer ? `${styles.nav_links} ${styles.expanded}` : styles.nav_links}
      >
        <Link href="/">INICIO</Link>
        <a href="/#nosotros">NOSOTROS</a>
        <Link href="/proyectos">PROYECTOS</Link>
        <a href="/#contacto">CONTACTO</a>
      </div>
    </header>
  )
}

export { Header }