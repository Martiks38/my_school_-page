import React, { useEffect, useState } from 'react'
import getData from 'api/technicalData'
import Lista from 'components/Lista'
import Tabla from 'components/Tabla/index'
import styles from 'styles.module.css'
import { Helmet } from 'react-helmet-async'

function Tecnicaturas() {
  const [data, setData] = useState(undefined)
  const technique = location.pathname.slice(13)

  useEffect(() => {
    getData().then((res) => {
      setData(res[technique])
    })
  }, [technique])

  return (
    <>
      {data && (
        <>
          <Helmet>
            <title>{`${data.titulo} | EETP N° 477`}</title>
            <meta
              name="description"
              content="Perfil profesional, área ocupacional y espacios curriculares de los títulos ofecidos."
            />
          </Helmet>
          <h1 className={styles.title}>{data.titulo}</h1>
          <h2>Perfil Profesional</h2>
          <Lista data={data.perfil} />
          <h2>Área ocupacional</h2>
          <Lista data={data.areaOcupacional} />
          <h2>Espacios curriculares</h2>
          <Tabla data={data.espacioCurricular} />
        </>
      )}
    </>
  )
}

export default Tecnicaturas
