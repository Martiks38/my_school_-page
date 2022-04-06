import React from 'react'
import key from 'weak-key'
import styles from './styles.module.css'

function Tabla({ data }) {
  const datos = Object.entries(data)

  return (
    <table className={styles.table}>
      <tbody>
        {datos.map((el) => (
          <React.Fragment key={key(el)}>
            <tr key={key(el)}>
              <th>{el[0]}</th>
            </tr>
            {el[1].map((materia, index) => (
              <tr key={index}>
                <td>{materia}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  )
}

export default Tabla
