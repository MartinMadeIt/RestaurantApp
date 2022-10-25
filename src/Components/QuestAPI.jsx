import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import getSingleItem from '../Controllers/getSingleItem';
import styles from '../Styles/QuestAPI.module.css'
import HomeBtn from './HomeBtn';
import GoBack from './GoBack';
import deleteSingleItem from '../Controllers/deleteSingleItem';
import { AiOutlineDelete } from "react-icons/ai";


const QuestAPI = () => {

    const { orderId }  = useParams()
    const [data,setData]=useState([])
    const navigate = useNavigate();
    const [notify, setNotify] = useState(false);

    useEffect(() => {
      getSingleItem("orders", orderId)
          .then(data=>{ setData(data)})
    }, [orderId])
    
    const handleDelete = () => {
        deleteSingleItem("orders", orderId);
        navigate(-1)
    }

  return (
    <div className={styles.container}>
        <HomeBtn />
        <GoBack />

        {notify && 
        <div className={styles.notification}>
          <div className={styles.notiCard}>
            <p>Are you sure want to delete order ?</p>
            <div className={styles.notiButtons}>
              <button onClick={() => {setNotify(false)}} className={styles.cancel}>Cancel</button>
              <button onClick={handleDelete} className={styles.deleteNow}>Delete</button>
            </div>
          </div>
        </div>
        }

        <p className={styles.number}>{data.id}</p>
        
        {data.client ? <p className={styles.person}>{data.client.name}, {data.client.city}, {data.client.phone}</p> : <p>No client data</p>}
        <div className={styles.card}>
          <p className={styles.desc}>Order:</p>
          <button onClick={()  => {setNotify(true)}} className={styles.delete}><AiOutlineDelete /></button>
          <div className={styles.order}>
              {data.body ? data.body.map((el) => <p key={el.id} className={styles.orderItem}>{el}</p>) : <p>Brak produktów</p>}
          </div> 
      
        </div> 
        <p className={styles.price}>{data?.price} PLN</p>
    </div>

  )
}

export default QuestAPI;