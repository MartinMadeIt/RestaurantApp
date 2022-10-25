import React, {useEffect, useState} from 'react'
import { postData } from '../Controllers/postDatas'
import HomeBtn from './HomeBtn'
import styles from '../Styles/AddNewClient.module.css'
import {useFormik} from 'formik'
import * as yup from "yup"
import FormInput from './FormInput'
import { IoPersonAdd } from "react-icons/io5";
import Message from './Message'
import getAllDatas from '../Controllers/getAllDatas'

// eslint-disable-next-line
const regexNumber =  "^[1-9]{3}?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$"
const yupSchema = yup.object().shape({
    name: yup.string().min(3).max(15).required(),
    surname: yup.string().max(20).required(),
    street: yup.string().min(5).required(),
    city: yup.string().required(),
    region: yup.string().required(),
    photoURL: yup.string().url(),
    email: yup.string().email("Sure that email is correct ?").required(),
    phone: yup.string().matches(regexNumber, "9 nums. No invalid ones please").required(),
    age: yup.number().typeError("Msut be a number type").min(18, "Our clients have to be mature").max(120, "Yep. Try again")
})



function AddNewClient() {
    const [state, setState] = useState(false)
    const [exist, setExist] = useState(false)
    const [clients, setClients] = useState([])


useEffect(() => {
    getAllDatas("clients")
        .then(data => setClients(data))
}, [])

    const formik = useFormik({
        initialValues : {
            name: "",
            surname: "",
            street: "",
            city: "",
            region: "",
            photoURL: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
            email: "",
            phone: "",
            age: 0
        },
        validationSchema: yupSchema,
        onSubmit: (value, {resetForm}) => {
            const thisOne = clients.find(client => client.phone === value.phone)
            if(thisOne) {
                setExist(true)
            } else {
                postData("clients", value)
                setState(true)
                resetForm();
                setExist(false)
            }
        }
    })

    return (
        <div className={styles.container}>
            <HomeBtn />
            {state && <Message message={"Added new Client succesfully"} setState={setState} positive={true}/>}
            {exist && <Message message={"Number exist in database"} setState={setExist}/>}
            <form onSubmit={formik.handleSubmit} className={styles.form}>
                <div className={styles.one}>
                    <FormInput acc="name" formik={formik}/>
                    <FormInput acc="surname" formik={formik}/>
                </div>
                <div className={styles.two}>
                    <FormInput acc="street" formik={formik}/>
                    <FormInput acc="city" formik={formik} />
                </div>
                <div className={styles.three}>
                    <FormInput acc="email" formik={formik}/>
                    <FormInput acc="phone" formik={formik}/>
                </div>

                <div className={styles.four}>
                    <FormInput acc="photoURL" formik={formik}/>    
                    <FormInput acc="region" formik={formik}/>
                </div>

                <div className={styles.five}>
                    <FormInput acc="age" formik={formik}/>
                    <button type='submit' className={styles.submit}><IoPersonAdd /></button>
                </div>
            </form>
        </div>
    )
}

export default AddNewClient