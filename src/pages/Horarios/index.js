import React from 'react'
import { Helmet } from 'react-helmet-async'
import LinkTable from 'components/LinkTable'
import { listaHorarios } from 'consts/listas'
import styles from 'styles.module.css'

function Horarios() {
  return (
    <>
      <Helmet>
        <title>Horarios de cursado | EETP N° 477</title>
        <meta
          name="description"
          content="Horarios de cursado para cada tecnicatura."
        />

        <meta property="og:title" content="Horarios de cursado | EETP N° 477" />
        <meta
          property="og:description"
          content="Horarios de cursado para cada tecnicatura."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="./logo310.png" />
      </Helmet>
      <h1 className={styles.title}>Horarios de cursado</h1>
      <LinkTable list={listaHorarios} />
    </>
  )
}

export default Horarios
