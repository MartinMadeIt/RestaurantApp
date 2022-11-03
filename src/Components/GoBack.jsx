import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoChevronBackCircleOutline } from "react-icons/io5";
import styles from '../Styles/GoBack.module.css'

function GoBack() {

    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className={styles.btn}>
            <IoChevronBackCircleOutline />
        </button>
    )
}

export default GoBack
