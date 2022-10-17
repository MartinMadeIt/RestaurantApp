import React from 'react'
import styles from '../Styles/Clients.module.css'
import HomeBtn from './HomeBtn'
import { Link } from 'react-router-dom'
import DescriptionText from './DescriptionText'


function Clients() {
  return (
    
    <div className={styles.container}>
        <HomeBtn />
        <DescriptionText site="Client Menu" />
        <div className={styles.options}>
            <Link to='/clients/clientlist'>Clients Database Readme</Link>
            <Link to='/clients/add'>Add new Client</Link>
        </div>
    </div>
  )
}

export default Clients