import React from 'react'
import styles from "./AboutmePreview.module.css"
import Image from 'next/image'

import { SectionHeader, Button } from '../../atoms'
import { mocks } from '../constant'
import { portDots, persona2, squareDot } from '@/app/assets'

interface AboutmePreviewProps {
    isPreview: boolean
}
const AboutmePreview = ({ isPreview }: AboutmePreviewProps) => {
    const { aboutMe: { intro, par1, par2 } } = mocks;

    return (
        <div className={`${styles.aboutmepreview_wrapper} ${isPreview === false && styles.aboutmedesc_center}`}>
            <section className={styles.aboutme_desc}>
                {isPreview  && <SectionHeader title='about me' hasHorzLine={true} />}

                <p>{intro}</p>
                <p>{par1}</p>
                <p>{par2}</p>

                {isPreview && <Button label='Read more ->' />}
            </section>

            <div className={styles.aboutme_images}>
                <figure><Image src={persona2 } alt='person' /></figure>
                <figure><Image src={squareDot } alt='dots' /></figure>
                <figure><Image src={portDots } alt='dots' /></figure>
            </div>
        </div >
    )
}

export default AboutmePreview