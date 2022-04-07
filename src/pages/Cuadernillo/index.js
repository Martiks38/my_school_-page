import React from 'react'
import styles from 'styles.module.css'
import ListaCuadernillos from './ListaCuadernillos'
import Helmet from 'react-helmet'

function Cuadernillo() {
  return (
    <>
      <Helmet>
        <title>Cuadernillos de ingreso | EETP N° 477</title>
      </Helmet>
      <h1 className={styles.title}>Cuadernillo de ingreso</h1>
      <p className={styles.p}>
        A continuación están los enlaces a los cuadernillos de ingreso para que
        puedan imprimirlos. También pueden encargarlos en la fotocopiadora
        dentro de la escuela.
      </p>
      <ListaCuadernillos />
    </>
  )
}

export default Cuadernillo
