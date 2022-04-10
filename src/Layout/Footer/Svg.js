import React from 'react'
import styles from './footer.module.css'

function Svg({ children }) {
  return (
    <svg
      className={styles.svg}
      aria-hidden="true"
      role="img"
      focusable="false"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      {children}
    </svg>
  )
}

export default Svg
