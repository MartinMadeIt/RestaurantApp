import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/Home.module.css'

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.img}></div>
      <div className={styles.navSide}>
        <div className={styles.tile}><Link to='/nav'>ORDERS MENU</Link></div>
        <div className={styles.tile}><Link to='/clients'>CLIENTS MENU</Link></div>
      </div>
    </div>
  )
}

export default Home