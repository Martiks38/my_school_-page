import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const LinkBtn = styled(Link)`
  display: block;
  color: var(--white-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
`

function Navbar() {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          <LinkBtn to="/">Inicio</LinkBtn>
        </li>
        <li>
          <LinkBtn to="/institucion">Institución</LinkBtn>
        </li>
        <li className={styles.subMenu}>
          Estudiantes
          <ul>
            <li>
              <LinkBtn to="/cuadernillo-de-ingreso">
                Cuadernillo de ingreso
              </LinkBtn>
            </li>
            <li className={`${styles.subMenu} ${styles.subMenu_left}`}>
              Tecnicatura
              <ul>
                <li>
                  <LinkBtn to="/estudiantes/electromecanica">
                    Tecnicatura en Electromecánica
                  </LinkBtn>
                </li>
                <li>
                  <LinkBtn to="/estudiantes/electronica">
                    Tecnicatura en Electrónica
                  </LinkBtn>
                </li>
                <li>
                  <LinkBtn to="/estudiantes/energias-renovables">
                    Tecnicatura en Energías renovables
                  </LinkBtn>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
