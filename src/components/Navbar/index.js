import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkBtn = styled(Link)`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  font-size: 1.3rem;
  color: var(--white-color);
  text-decoration: none;
  &:hover {
    background: var(--hover);
    border-radius: 8px;
  }
`

function Navbar() {
  return (
    <nav>
      <LinkBtn to="/">Inicio</LinkBtn>
      <LinkBtn to="institucion">Institución</LinkBtn>
      <LinkBtn to="#">Estudiantes</LinkBtn>
    </nav>
  )
}

export default Navbar
