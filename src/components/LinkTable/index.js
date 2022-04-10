import React from 'react'
import key from 'weak-key'
import styles from './link-table.module.css'

function LinkTable({ list }) {
  return (
    <table className={styles.table}>
      <tbody>
        {list.map((item) => (
          <tr key={key(item)}>
            <td>{item.topic}</td>
            <td>
              <a href={item.link} rel="noopener noreferrer" target="_blank">
                Ver enlace
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default LinkTable
