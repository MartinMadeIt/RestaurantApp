import React, {useState} from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/GetClient.module.css'
import HomeBtn from './HomeBtn'
import getAllDatas from '../Controllers/getAllDatas'
import DescriptionText from './DescriptionText'
import GoBack from './GoBack'

const destination = "clients"

const GetClientAll = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getAllDatas(destination)
            .then(datas => setData(datas))
    }, [])
    
    return (
        <div className={styles.container}>
            <HomeBtn />
            <GoBack />
            <DescriptionText site="List" />
            <div className={styles.list}>
                {data.map(element => <Link to={`/${destination}/clientlist/${element.id}`} key={element.id} className={styles.nameOfClient}> {element.name} {element.surname}</Link>)}
            </div>
        </div>
    )
}

export default GetClientAll