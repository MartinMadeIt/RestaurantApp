import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.img}></div>
      <div className={styles.navSide}>
        <Link to='/nav' className={styles.tile}>ORDERS MENU</Link>
        <Link to='/clients' className={styles.tile}>CLIENTS MENU</Link>
      </div>
    </div>
  )
}

export default Home
