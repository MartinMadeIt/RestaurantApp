import { Link } from 'react-router-dom';
import styles from '../Styles/GetOrder.module.css'
import HomeBtn from './HomeBtn';
import getAllDatas from '../Controllers/getAllDatas';
import { useQuery } from '@tanstack/react-query';
import DescriptionText from './DescriptionText';

const destination = "orders"

function GetOrder() {

    const {data, isLoading, error} = useQuery([destination], () => getAllDatas(destination))

    if(error) {
        return (
            <div className={styles.container}>
                <p className={styles.state}>Cannot get orders</p>
            </div>
                )
    }

    if(isLoading) {
        return (    
            <div className={styles.container}>
                <p className={styles.state}>Loading your datas</p>
            </div>
                )
    }

    return (
        <div className={styles.container}>
            <HomeBtn />
            <DescriptionText site="Orders All" />
            <div className={styles.gridContent}>
                {data.map(element => <Link to={`/${destination}/${element.id}`} key={element.id} className={styles.orderNmb}>{element.id}</Link>)}
            </div>
        </div>
    )

}

export default GetOrder