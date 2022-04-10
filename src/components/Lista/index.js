import React from 'react'
import styles from './list.module.css'

function Lista({ data }) {
  return (
    <ul className={styles.li}>
      {data.map((li, index) => (
        <li key={index}>{li}</li>
      ))}
    </ul>
  )
}

export default Lista
