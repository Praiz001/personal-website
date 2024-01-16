import React from 'react'
import styles from "./ContactCard.module.css"

import Image from 'next/image'
import { IconType } from 'react-icons'

interface ContactCardProps {
    data: {
        Icon: IconType
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
                    const { Icon, label, url } = item;

                    return (
                        <li key={idx}>
                            <span>
                                <Icon />
                            </span>
                            <a href={url} target="_blank" rel="noopener noreferrer">{label}</a>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default ContactCard