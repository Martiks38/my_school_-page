import React from 'react'
import styles from './styles.module.css'

function Main({ children }) {
  return (
    <>
      <div className={styles.fondo}>
        <img
          src="https://escuelatecnica477.com/wp-content/uploads/2021/02/escu.jpeg"
          alt="Foto de la escuela"
          className={styles.img}
        />
      </div>
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Main
