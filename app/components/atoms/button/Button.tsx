import React, { CSSProperties } from 'react';
import styles from "./Button.module.css";

import Image from 'next/image';


interface ButtonProps {
    img?: any;
    label: string;
    borderColor?: string
    onClick?: () => void;
}

const Button = ({ img, label, borderColor = "#C778DD", onClick }: ButtonProps) => {

    return (
        <button 
            style={{ border: `1px solid ${borderColor}`}} 
            className={styles.button_wrapper}
            onClick={onClick}
        >
            {label}
            {img && <Image src={img} alt={`${label} illustration`} />}
        </button>
    )
}



export default Button;







