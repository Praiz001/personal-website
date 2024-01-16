import React from 'react'
import styles from "./SocialMedia.module.css"
import Image from 'next/image'

import { mocks } from '../constants'




const SocialMedia = () => {
    const { mediaLinks } = mocks;

    return (
        <div className={styles.socialmedia_wrapper}>
            <span />
            <ul>
                {mediaLinks.map((link, idx) => {
                    const { Icon, route } = link;
                    return (
                        <li key={idx}>
                            <a href={route} target="_blank" rel="noopener noreferrer">
                                <Icon  />
                                {/* <Image src={img} alt='media icon' height={32} width={32} /> */}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SocialMedia