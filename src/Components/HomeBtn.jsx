import React from 'react'
import { GoHome } from "react-icons/go";
import styles from '../Styles/HomeBtn.module.css'
import { Link } from 'react-router-dom';


const HomeBtn = () => <Link className={styles.btn} to='/'><GoHome /></Link>

export default HomeBtn
