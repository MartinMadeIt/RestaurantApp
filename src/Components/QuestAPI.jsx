import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getSingleItem from '../Controllers/getSingleItem';
import styles from '../Styles/QuestAPI.module.css'
import HomeBtn from './HomeBtn';


const QuestAPI = () => {

    // const URL = "http://localhost:3000"
    const { orderId }  = useParams()
    const [data,setData]=useState([])


  useEffect(() => {
    getSingleItem("orders", orderId)
        .then(data=>{ setData(data)})
  }, [orderId])
  

  return (
    <div className={styles.container}>
        <HomeBtn />
        <p className={styles.number}>{data.id}</p>
        <div className={styles.card}>

        {data.client ? <p className={styles.client}>Client: {data.client.name}, {data.client.city}, {data.client.phone}</p> : <p>No client data</p>}

          <div className={styles.order}>
              {data.body ? data.body.map((el) => <p key={el.id} className={styles.orderItem}>{el}</p>) : <p>Brak produktów</p>}
          </div> 

           
          <p className={styles.price}>{data?.price} PLN</p>
        </div> 
    </div>

  )
}

export default QuestAPI;