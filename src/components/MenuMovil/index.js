import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './menuMovil.module.css'
import styled from 'styled-components'
import { $$ } from 'utils'

const LinkBtn = styled(Link)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 0.5rem 1rem;
  color: var(--white-color);
  text-decoration: none;
  width: fit-content;
  border-radius: 8px;
  &:hover {
    background-color: var(--color-secondary-light);
  }
`

function MenuMovil({ viewMenu }) {
  const [route, setRoute] = useState(undefined)

  const locationHook = useLocation()

  useEffect(() => {
    if (route !== locationHook.pathname && route) {
      const details = $$('details')

      Array.from(details).forEach((detail) =>
        detail.classList.toggle('close-menu', 'open-menu')
      )
      viewMenu()
    }
  }, [locationHook, route])

  useEffect(() => {
    setRoute(locationHook.pathname)
  }, [locationHook])

  const toggleMenu = (event) => {
    const target = event.target

    target.classList.toggle('is_active')

    if (target.matches('.close-menu')) {
      target.classList.toggle('open-menu', 'close-menu')
    } else if (target.matches('.open-menu')) {
      target.classList.toggle('close-menu', 'open-menu')
    }
  }

  return (
    <>
      <details className={styles.detail} open data-list>
        <summary></summary>
        <nav>
          <LinkBtn to="/">Inicio</LinkBtn>
          <LinkBtn to="/institucion">Institución</LinkBtn>
          <details>
            <summary className={styles.seccion} onClick={toggleMenu}>
              <h4 className="close-menu">Estudiantes</h4>
            </summary>
            <nav>
              <LinkBtn to="/cuadernillo-de-ingreso">
                Cuadernillo de ingreso
              </LinkBtn>
              <LinkBtn to="/horarios-de-cursado">Horarios de cursado</LinkBtn>
              <details>
                <summary className={styles.seccion}>
                  <h5 className="close-menu" onClick={toggleMenu}>
                    Tecnicaturas
                  </h5>
                </summary>
                <nav>
                  <LinkBtn to="/estudiantes/electromecanica">
                    Tecnicatura en Electromecánica
                  </LinkBtn>
                  <LinkBtn to="/estudiantes/electronica">
                    Tecnicatura en Electrónica
                  </LinkBtn>
                  <LinkBtn to="/estudiantes/energias-renovables">
                    Tecnicatura en Energías renovables
                  </LinkBtn>
                </nav>
              </details>
            </nav>
          </details>
        </nav>
      </details>
    </>
  )
}

export default React.memo(MenuMovil)
