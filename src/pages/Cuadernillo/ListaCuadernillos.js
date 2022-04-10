import React from 'react'
import key from 'weak-key'
import styles from './cuadernillo.module.css'

const lista = [
  {
    topic: 'Lengua y Literatura',
    link: '#',
  },
  {
    topic: 'Lengua extranjera - Inglés',
    link: '#',
  },
  {
    topic: 'Matemática',
    link: '#',
  },
  {
    topic: 'Educación tecnológica',
    link: '#',
  },
  {
    topic: 'Biología',
    link: '#',
  },
]

function ListaCuadernillos() {
  return (
    <table className={styles.table}>
      <tbody>
        {lista.map((cuadernillo) => (
          <tr key={key(cuadernillo)}>
            <td>{cuadernillo.topic}</td>
            <td>
              <a
                href={cuadernillo.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                Ver enlace
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ListaCuadernillos
