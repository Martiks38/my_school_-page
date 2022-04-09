import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from 'Layout/Header'
import Main from 'Layout/Main'
import Footer from 'Layout/Footer'
import Home from 'pages/Home'
import Institucion from 'pages/Institucion'
import Cuadernillo from 'pages/Cuadernillo'
import Tecnicaturas from 'pages/Estudiantes'
import ErrorPage from 'pages/ErrorPage/index'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function Apployout() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.2.1/hamburgers.min.css"
            integrity="sha512-+mlclc5Q/eHs49oIOCxnnENudJWuNqX5AogCiqRBgKnpoplPzETg2fkgBFVC6WYUVxYYljuxPNG8RE7yBy1K+g=="
            crossOrigin="anonymous"
            referrerpolicy="no-referrer"
          />
        </Helmet>
        <Header />
        <Main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/institucion" element={<Institucion />} />
            <Route path="/cuadernillo-de-ingreso" element={<Cuadernillo />} />
            <Route path="/estudiantes">
              <Route path="electromecanica" element={<Tecnicaturas />} />
              <Route path="electronica" element={<Tecnicaturas />} />
              <Route path="energias-renovables" element={<Tecnicaturas />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Main>
        <Footer />
      </HelmetProvider>
    </>
  )
}

export default Apployout
