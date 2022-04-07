import { Logo } from 'components/Logo'
import Navbar from 'components/Navbar'
import React from 'react'
import styles from './styles.module.css'

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Logo to="/">
          <img src="/Escudo.webp" alt="logo" className={styles.img} />
        </Logo>
        <div className={styles.content}>
          <Navbar />
        </div>
      </header>
    </>
  )
}

export default Header
