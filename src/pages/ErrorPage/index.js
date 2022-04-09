import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import errorStyles from './errorStyles.module.css'

function ErrorPage() {
  const path = location.href

  return (
    <>
      <Helmet>
        <title>Error 404 | EETP N° 477</title>
      </Helmet>
      <h1 className={errorStyles.titleWarn}>Error 404</h1>
      <p className={errorStyles.p}>
        La ruta <span>{path.slice(path.indexOf('l'))}</span> no es una ruta
        válida. <Link to="/">Volver al inicio</Link>
      </p>
    </>
  )
}

export default ErrorPage
