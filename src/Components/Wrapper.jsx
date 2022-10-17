import React from 'react'
import styles from '../Styles/Wrapper.module.css'

const Wrapper = ({children}) =>{
  return (
    <div className={styles.wrapper}>
        {children}
        {/* <button className={styles.themeChanger}></button> */}
        </div>
  )
}

export default Wrapper