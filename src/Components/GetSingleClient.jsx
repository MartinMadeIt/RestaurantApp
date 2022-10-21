import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getSingleItem from '../Controllers/getSingleItem';
import styles from '../Styles/GetSingleClient.module.css'
import HomeBtn from './HomeBtn';
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

function GetSingleClient() {

    const { clientId } = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        getSingleItem("clients", clientId)
            .then(data => setData(data))
    },[clientId])


    return (
        <div className={styles.container}>
            <HomeBtn />
            <div className={styles.clientDatas}>
                <p className={styles.name}>{data.name} {data.surname}</p>
                <div className={styles.address}>
                    <p>{data.street}</p>
                    <p>{data.city}</p>
                    <p>{data.region}</p>
                    <div className={styles.icon}><FaLocationArrow /></div>
                </div>
                <div className={styles.contact}>
                    <p>{data.email}</p>
                    <p>{data.phone}</p>
                    <div className={styles.icon}><FaPhoneAlt /></div>
                </div>
            </div>
        </div>
    )
}

export default GetSingleClient