import React from 'react'
<<<<<<< HEAD
import styles from './main.module.css'
=======
import styles from './styles.module.css'
>>>>>>> dev/main

function Main({ children }) {
  return (
    <>
      <div className={styles.fondo}>
        <img
          src="escuela.webp"
          alt="Foto de la escuela"
          className={styles.img}
        />
      </div>
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Main
