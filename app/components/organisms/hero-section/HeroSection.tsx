import React from 'react';
import styles from "./HeroSection.module.css";
import Image from 'next/image';

import { persona, logoOutline, squareDot } from '@/app/assets';
import { Button } from '../../atoms';


const HeroSection = () => {
    return (
        <div className={styles.hero_container}>
            <section className={styles.text_content}>
                <p>Praise is a <span>front-end software developer.</span></p>
                <p>He crafts responsive websites where technologies meet creativity.</p>

                <Button label='Contact me!' />
            </section>

            <section className={styles.image_content}>
                <div className={styles.images}>
                    <figure>
                        <Image src={persona} alt='persona' />
                    </figure>
                    <figure>
                        <Image src={logoOutline} alt='logo outline' />
                    </figure>
                    <figure>
                        <Image src={squareDot} alt='box' />
                    </figure>
                </div>
                <p><span></span> Currently working on <span>Portfolio</span></p>
            </section>
        </div>
    )
}

export default HeroSection



{/* <Image src={persona} alt='logo' height={386} width={457} /> */ }
{/* <Image src={logoOutline} alt='logo' height={16} width={16} /> */ }
{/* <Image src={squareDot} alt='logo' height={16} width={16} /> */ }