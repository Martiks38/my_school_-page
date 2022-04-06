import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from 'Layout/Header'
import Main from 'Layout/Main'
import Footer from 'Layout/Footer'
import Home from 'pages/Home'
import Institucion from 'pages/Institucion'

function Apployout() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="institucion" element={<Institucion />} />
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default Apployout
