import React from 'react';
import styles from "./Footer.module.css";
import Image from 'next/image';

import { MainLogo } from '../../atoms';
import { mocks } from '../constant';



const Footer = () => {
    const { mediaLinks } = mocks;
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.footer_container}>
            <div className={styles.footer_content}>
                <div className={styles.content_info}>
                    <section>
                        <span>
                            <MainLogo style={{ textStyle: { fontWeight: "500" } }} />
                            <p>elias@elias-dev.ml</p>
                        </span>
                        <p>Web designer and front-end developer</p>
                        <p>Design Credit: Elias</p>
                    </section>

                    <section className={styles.media_profile}>
                        <p>Media</p>
                        <ul>
                            {mediaLinks.map((link, idx) => {
                                const { img, route } = link;
                                return (
                                    <li key={idx}>
                                        <a href={route} target="_blank" rel="noopener noreferrer">
                                            <Image src={img} alt='media icon' height={32} width={32} />
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>

                </div>

                <p>&copy; Copyright {currentYear}. Made by Praise.</p>
            </div>

        </div>
    )
}

export default Footer