import React from 'react'
import Navbar from 'components/Navbar'
import styles from './style.module.css'
import { Logo } from 'components/Logo/index'
import Search from 'components/Search/index'

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Logo to="/">
          <img src="/Escudo.webp" alt="logo" className={styles.img} />
        </Logo>
        <div className={styles.content}>
          <Navbar />
          <Search />
        </div>
      </header>
    </>
  )
}

export default Header
