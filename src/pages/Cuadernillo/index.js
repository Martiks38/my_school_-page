import React from 'react'
import { Helmet } from 'react-helmet-async'
import LinkTable from 'components/LinkTable'
import styles from 'styles.module.css'
import { listaCuadernillos } from 'consts/listas'

function Cuadernillo() {
  return (
    <>
      <Helmet>
        <title>Cuadernillos de ingreso | EETP N° 477</title>
        <meta
          name="description"
          content="Material de estudio para los nuevos estudiantes ingresantes."
        />

        <meta
          property="og:title"
          content="Cuadernillos de ingreso | EETP N° 477"
        />
        <meta
          property="og:description"
          content="Material de estudio para los nuevos estudiantes ingresantes."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./logo310.png" />
      </Helmet>
      <h1 className={styles.title}>Cuadernillo de ingreso</h1>
      <p className={styles.p}>
        A continuación están los enlaces a los cuadernillos de ingreso para que
        puedan imprimirlos. También pueden encargarlos en la fotocopiadora
        dentro de la escuela.
      </p>
      <LinkTable list={listaCuadernillos} />
    </>
  )
}

export default Cuadernillo
