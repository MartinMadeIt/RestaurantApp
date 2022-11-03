import React from 'react'
import styles from '../Styles/DescriptionText.module.css'
import { config } from '../Config/config'

function DescriptionText({site}) {

    const {companyName} = config();

    return (
        <div className={styles.container}>
            <p className={styles.companyName}>{companyName} - {site}</p>
        </div>
    )
}

export default DescriptionText
