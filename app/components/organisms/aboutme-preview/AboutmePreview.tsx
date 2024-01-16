"use client"
import React from 'react'
import styles from "./AboutmePreview.module.css"
import Image from 'next/image'

import { SectionHeader, Button } from '../../atoms'
import { mocks } from '../constant'
import { portDots, persona2, squareDot, arrRightIcon } from '@/app/assets'
import { useRouter } from 'next/navigation';

interface AboutmePreviewProps {
    isPreview: boolean
}
const AboutmePreview = ({ isPreview }: AboutmePreviewProps) => {
    const router = useRouter();
    const { aboutMe: { intro, par1, par2, par3, par4 } } = mocks;

    return (
        <div className={`${styles.aboutmepreview_wrapper} ${!isPreview && styles.aboutmedesc_center}`}>
            <section className={styles.aboutme_desc}>
                {isPreview && <SectionHeader title='about me' hasHorzLine={true} />}

                <p>{intro}</p>
                <p>{par1}</p>
                {!isPreview && (
                    <>
                        <p>{par2}</p>
                        <p>{par3}</p>
                        <p>{par4}</p>
                    </>
                )}
                {isPreview && <Button
                    label='Read more'
                    customStyle={{ marginTop: "1.7rem" }}
                    onClick={() => router.push("/about-me")}
                    img={arrRightIcon}

                />}
            </section>

            <div className={styles.aboutme_images}>
                <figure><Image src={persona2} alt='me' /></figure>
                <figure><Image src={squareDot} alt='dots' /></figure>
                <figure><Image src={portDots} alt='dots' /></figure>
            </div>
        </div >
    )
}

export default AboutmePreview