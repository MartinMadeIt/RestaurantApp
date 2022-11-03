import React, { useEffect } from 'react'
import styles from '../Styles/Message.module.css'
import { MdReportGmailerrorred, MdCheckCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const Message = ({message, setState, positive=false, link=false}) => {

    useEffect(() => {
        setTimeout(() => {setState(false)}, 10000)
    })

    return (        
        <div className={styles.container}>
            {positive && <p className={styles.check}><MdCheckCircle /></p>}
            {!positive && <p className={styles.error}><MdReportGmailerrorred /></p>}
            {positive && <p className={styles.checkMes}>{message}</p>}
            {!positive && <p className={styles.errorMes}>{message}</p>}
            {link && <Link to='/clients/add'>
                <button className={styles.add}>Add new Client</button>
            </Link>}
        </div>
    )
}

export default Message;
