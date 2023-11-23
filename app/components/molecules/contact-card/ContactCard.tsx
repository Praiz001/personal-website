import React from 'react'
import styles from "./ContactCard.module.css"

import Image from 'next/image'

interface ContactCardProps {
    data: {
        img: string
        label: string
        url: string
    }[]
}

const ContactCard = ({ data }: ContactCardProps) => {

    return (
        <div className={styles.contactcard_wrapper}>
            <p>Message me here</p>
            <ul>
                {data?.map((item, idx) => {
                    const { img, label, url } = item;

                    return (
                        <li key={idx}>
                            <Image src={img} alt='sm icon'/>
                            <a href={url} target="_blank" rel="noopener noreferrer">{label}</a>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default ContactCard