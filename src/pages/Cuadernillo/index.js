import React from 'react'
import styles from 'styles.module.css'

function Cuadernillo() {
  return (
    <>
      <h1 className={styles.title}>Cuadernillo de ingreso</h1>
      <p className={styles.p}>
        A continuación están los enlaces a los cuadernillos de ingreso para que
        puedan imprimirlos. También pueden encargarlos en la fotocopiadora
        dentro de la escuela.
      </p>
      <ul className={styles.p}>
        <li>
          <span>Lengua y Literatura</span>
          <a href="#" rel="noopener noreferrer" className={styles.a}>
            Ver cuadernillo
          </a>
        </li>
        <li>
          <span>Lengua extranjera - Inglés</span>
          <a href="#" rel="noopener noreferrer" className={styles.a}>
            Ver cuadernillo
          </a>
        </li>
        <li>
          <span>Matemática</span>
          <a href="#" rel="noopener noreferrer" className={styles.a}>
            Ver cuadernillo
          </a>
        </li>
        <li>
          <span>Biología</span>
          <a href="#" rel="noopener noreferrer" className={styles.a}>
            Ver cuadernillo
          </a>
        </li>
        <li>
          <span>Educación tecnológica</span>
          <a href="#" rel="noopener noreferrer" className={styles.a}>
            Ver cuadernillo
          </a>
        </li>
      </ul>
    </>
  )
}

export default Cuadernillo
