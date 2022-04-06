import React, { useEffect, useState } from 'react'
import getData from 'api/technicalData'
import Lista from 'components/Lista'
import Tabla from 'components/Tabla/index'
import styles from 'styles.module.css'

function Tecnicaturas() {
  const [data, setData] = useState(undefined)
  const technique = location.pathname.slice(13)

  useEffect(() => {
    getData().then((res) => {
      setData(res[technique])
    })
  }, [])

  return (
    <>
      {data && (
        <>
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
