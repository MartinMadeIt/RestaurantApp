import React, {useState, useEffect} from 'react'
import HomeBtn from './HomeBtn';
import styles from '../Styles/AddOrder.module.css'
import { Link } from 'react-router-dom';
import { postData } from '../Controllers/postDatas'
import getAllDatas from '../Controllers/getAllDatas'
import { TbPhoneCheck } from "react-icons/tb";
import Message from './Message';


const available =  {
        "Pizza": 32,
        "Add topping": 2,
        "Pancakes": 15,
        "Cat meat": 20,
        "Oatmeal": 10,
        "Kebab L": 32,
        "Kebab M": 25,
        "Kebab S": 18,
        "Pepsi": 8,
        "7up": 9,
        "Mirinda": 8
    }

export const AddNewOrder = () => {

    const [data, setData] = useState([])
    const [client, setClient] = useState([]);
    const [isValid, setIsValid] = useState(false)
    const [phone, setPhone] = useState()
    const [order, setOrder] = useState([]);
    const [price, setPrice] = useState(0);    
    const [value, setValue] = useState("");
    const [state, setState] = useState(false)

    const handleAdd = () => {

        postData("orders", {
            body: order, 
            price: price, 
            client: {
                name: client.name,
                phone: client.phone,
                street: client.street,
                city: client.city}}).then((data) => {
            console.log("succes", data)
        }).finally(()=>{
            setOrder([])
            setPrice(0)
        })

    };

    const addToOrder = () => {
        if(value){ 
        setOrder(prev => [...prev, value])
        
        // to cos dziwngeo
        Object.entries(available).forEach(([key, val]) => {
            if (key === value) {
                return setPrice(price => price + val)
            }
        })
        }
    }

    const handleClear = () => {
        setOrder("")
        setPrice(0)
    }

    useEffect(() => {
        getAllDatas("clients")
            .then(datas => setData(datas))
    }, [])

    const handleVerify = (e) => {
        e.preventDefault();
        const finded =data.find(el => {return phone === el.phone})
        if(finded) {
            setClient(finded)
            setIsValid(true)
        } else {
            setState(true)
        }

        return client;
    }

    return (

        <div className={styles.container}>
            <HomeBtn />

            {!isValid && 
            <div className={styles.phone}>
                <form onSubmit={handleVerify}>
                    <input type="text" className={styles.inputPhone} value={phone} onChange={e => setPhone(e.target.value)} placeholder='Phone number'/>
                    <button type='submit' className={styles.submitBtn}><TbPhoneCheck /></button>
                </form>
            </div>
            }

            {state && <Message message={"Number not found in database"} setState={setState} link={true}/>}

            {isValid && 
            <div className={styles.formField}>
                <select name="set-order" id="orderSelect" className={styles.input} value={value} onChange={e => {
                    setValue(e.target.value)
                    }}>
                        {/* entries(avilable) value to cena a opcja to key z elementu */}
                    {Object.keys(available).map(el => <option value={el} key={el}>{el}</option>)}
                </select>
                <button onClick={addToOrder} className={styles.add}>Add</button>
                <button onClick={handleClear} className={styles.clear}>C</button>
                <button type={'submit'} onClick={handleAdd} className={styles.submit}>Submit Order</button>
            </div>}
            <div className={styles.final}>
                    {order && order.map(element => <p>{element}</p>)}
            </div>
        </div>
    )
}

export default AddNewOrder