import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getSingleItem from '../Controllers/getSingleItem';
import styles from '../Styles/GetSingleClient.module.css'
import HomeBtn from './HomeBtn';

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
                <p>{data.name} {data.surname}</p>
                <p>{data.street}</p>
            </div>
        </div>
    )
}

export default GetSingleClient