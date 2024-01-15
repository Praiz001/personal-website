"use client"
import React, { CSSProperties } from 'react';
import styles from "./MainLogo.module.css";
import Image from 'next/image';

import { mainlogo } from '@/app/assets';
import { useRouter } from 'next/navigation';

type MainLogoProps = {
    style?: {
        containerStyle?: CSSProperties,
        textStyle?: CSSProperties
    }
}

const MainLogo = ({ style }: MainLogoProps) => {
    const router = useRouter();

    return (
        <div
            className={styles.main_logo}
            style={{ ...style?.containerStyle }}
            onClick={() => router.push('/')}
        >
            <Image src={mainlogo} alt='logo' height={16} width={16} />
            <p style={{ ...style?.textStyle }}>Praise</p>
        </div>
    )
}

export default MainLogo;





