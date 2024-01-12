"use client"
import React from 'react';
import styles from "./HeroSection.module.css";
import Image from 'next/image';

import { useRouter } from 'next/navigation';

import { persona, logoOutline, squareDot } from '@/app/assets';
import { Button } from '../../atoms';


const HeroSection = () => {
    const router = useRouter();
    return (
        <div className={styles.hero_container}>
            <section className={styles.text_content}>
                <p>Praise is a seasoned <span>front-end web developer.</span></p>
                <p>
                    He excels in crafting dynamic web applications with robust functionalities,
                    tailored to exceed user expectations.
                </p>

                <Button
                    onClick={(() => router.push('/contacts'))}
                    label='Contact me!' />
            </section>

            <section className={styles.image_content}>
                <div className={styles.images}>
                    <figure>
                        <Image src={persona} 
                            // layout="responsive"
                            alt='persona' 
                        />
                    </figure>
                    <figure>
                        <Image src={logoOutline} alt='logo outline' />
                    </figure>
                    <figure>
                        <Image src={squareDot} alt='box' />
                    </figure>
                </div>
                <p>
                    <span></span>
                    Currently working on
                    <span onClick={() => router.push('/projects')}>
                        Portfolio
                    </span>
                </p>
            </section>
        </div>
    )
}

export default HeroSection