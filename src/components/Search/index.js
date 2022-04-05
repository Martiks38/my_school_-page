import React from 'react'
import styles from './styles.module.css'

function Search() {
  return (
    <form className={styles.form}>
      <button type="submit" className={styles.submit}>
        Buscar
      </button>
      <input
        placeholder="Buscar sobre..."
        type="text"
        name="topic"
        className={styles.input}
      />
    </form>
  )
}

export default Search
