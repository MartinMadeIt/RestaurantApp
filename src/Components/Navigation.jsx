import React from 'react'
import styles from '../Styles/Navigation.module.css'
import { Link } from 'react-router-dom'
import HomeBtn from './HomeBtn'
import DescriptionText from './DescriptionText';
import { GiStack } from "react-icons/gi";
import { GoDiffAdded } from "react-icons/go";


function Navigation() {
  return (
    <div className={styles.container}>
      <HomeBtn />
      <DescriptionText site="Orders" />
      <Link to="/orders" className={styles.tile}>
        <p><GiStack /></p>
        <p>Show Orders</p>
      </Link>
      <Link to="/addorder" className={styles.tile}>
        <p><GoDiffAdded /></p>
        <p>Add Order</p>
      </Link>
    </div>
  )
}

export default Navigation
