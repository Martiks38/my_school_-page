import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from 'Layout/Header'
import Main from 'Layout/Main'
import Footer from 'Layout/Footer'
import Home from 'pages/Home'
import Institucion from 'pages/Institucion'
import Cuadernillo from 'pages/Cuadernillo'
import Tecnicaturas from 'pages/Estudiantes'

function Apployout() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/institucion" element={<Institucion />} />
          <Route path="/cuadernillo-de-ingreso" element={<Cuadernillo />} />
          <Route path="/estudiantes">
            <Route path="electromecanica" element={<Tecnicaturas />} />
            <Route path="electronica" element={<Tecnicaturas />} />
            <Route path="energias-renovables" element={<Tecnicaturas />} />
          </Route>
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default Apployout
