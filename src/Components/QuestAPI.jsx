import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getSingleItem from '../Controllers/getSingleItem';
import styles from '../Styles/QuestAPI.module.css'
import HomeBtn from './HomeBtn';


const QuestAPI = () => {

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
        
        {data.client ? <p className={styles.person}>{data.client.name}, {data.client.city}, {data.client.phone}</p> : <p>No client data</p>}
        <p className={styles.desc}>Order:</p>
        <div className={styles.card}>
     
          <div className={styles.order}>
              {data.body ? data.body.map((el) => <p key={el.id} className={styles.orderItem}>{el}</p>) : <p>Brak produktów</p>}
          </div> 
      
        </div> 
        <p className={styles.price}>{data?.price} PLN</p>
    </div>

  )
}

export default QuestAPI;