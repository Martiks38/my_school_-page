import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import MenuMovil from 'components/MenuMovil/index'

const LinkBtn = styled(Link)`
  display: block;
  color: var(--white-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-size: 1.3rem;
`

function Navbar() {
  const [viewMenuMovil, setViewMenuMovil] = useState(false)
  const [viewIcon, setViewIcon] = useState(false)

  const toggleViewMenu = () => {
    setViewMenuMovil(!viewMenuMovil)
  }

  useEffect(() => {
    const toggleIconNavbar = (event) => {
      if (event.target.innerWidth < 520) {
        setViewIcon(true)
      } else {
        setViewMenuMovil(false)
        setViewIcon(false)
      }
    }

    const pressedOutMenu = (event) => {
      const $details = document.querySelector('details[open]')
      if (event.target === $details) setViewMenuMovil(false)
    }

    if (window.innerWidth < 520) setViewIcon(true)

    window.addEventListener('resize', toggleIconNavbar)
    window.addEventListener('click', pressedOutMenu)
    return () => {
      window.removeEventListener('resize', toggleIconNavbar)
      window.removeEventListener('click', pressedOutMenu)
    }
  }, [])

  return (
    <>
      {!viewIcon ? (
        <nav>
          <ul className={styles.menu}>
            <li>
              <LinkBtn to="/">Inicio</LinkBtn>
            </li>
            <li>
              <LinkBtn to="/institucion">Institución</LinkBtn>
            </li>
            <li
              className={styles.subMenu}
              tabIndex={0}
              aria-label="Lista de temas importantes para los estudiantes"
            >
              Estudiantes
              <ul>
                <li>
                  <LinkBtn to="/cuadernillo-de-ingreso">
                    Cuadernillo de ingreso
                  </LinkBtn>
                </li>
                <li
                  className={`${styles.subMenu} ${styles.subMenu_left}`}
                  tabIndex={0}
                  aria-label="Lista de carreras que ofrece la escuela"
                >
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
      ) : (
        <span className={styles.panelMenu}>
          <button
            className="hamburger hamburger--minus"
            type="button"
            onClick={toggleViewMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </span>
      )}
      {viewMenuMovil && <MenuMovil />}
    </>
  )
}

export default Navbar
