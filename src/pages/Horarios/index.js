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
      </Helmet>
      <h1 className={styles.title}>Horarios de cursado</h1>
      <LinkTable list={listaHorarios} />
    </>
  )
}

export default Horarios
