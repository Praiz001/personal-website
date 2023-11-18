import React, { CSSProperties } from 'react';
import styles from "./MainLogo.module.css";

import Image from 'next/image';
import { mainlogo } from '@/app/assets';

type MainLogoProps = {
    style?: {
        containerStyle?: CSSProperties,
        textStyle?: CSSProperties
    }
}

const MainLogo = ({ style }: MainLogoProps) => {
    return (
        <div style={{ ...style?.containerStyle }} className={styles.main_logo}>
            <Image src={mainlogo} alt='logo' height={16} width={16} />
            <p style={{ ...style?.textStyle }}>Praise</p>
        </div>
    )
}

export default MainLogo;





