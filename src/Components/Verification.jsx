import React, {useState, useEffect} from 'react'
import HomeBtn from './HomeBtn'
import styles from '../Styles/Verification.module.css'
import getAllDatas from '../Controllers/getAllDatas'


function Verification() {

    const [client, setClient] = useState([])
    const [datas, setDatas] = useState([])
    const [value, setValue] = useState("")
 
    useEffect(() => {
        getAllDatas("clients")
            .then(data => setDatas(data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const finded = datas.find(el => value === el.phone)
        if(finded) {
            console.log(finded);
            setClient(finded)}

        return client;
    }

    return (

        <div className={styles.container}>
            <HomeBtn />
            <form onSubmit={handleSubmit}>
                <input type="text"  value={value} onChange={e => setValue(e.target.value)}/>
                <button type='submit'>Go to Order</button>
            </form>
        </div>
    )
}

export default Verification
