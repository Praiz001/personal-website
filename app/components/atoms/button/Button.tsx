import React, { CSSProperties } from 'react';
import styles from "./Button.module.css";

import Image from 'next/image';


interface ButtonProps {
    img?: any;
    label: string;
    onClick?: () => void;
    customStyle?: CSSProperties
    variant?: 'primary' | 'secondary'
    isLoading?: boolean
    type?: "submit" | "button" | "reset"
}

const Button = ({ img, label, onClick, customStyle, variant = "primary", isLoading, type }: ButtonProps) => {

    const variantStyles = variant === 'primary' ? styles.primary_button : styles.secondary_button;

    return (
        <button
            type={ type }
            style={{
                ...customStyle,
                pointerEvents: isLoading ? 'none' : 'all'
            }}
            className={`${styles.button_shared} ${variantStyles}`}
            onClick={onClick}
        >
            {isLoading &&
                <div
                    className={styles.spinner}
                    style={{ borderColor: variant === 'primary' ? '#C778DD' : "#ABB2BF" }}
                />
            }
            <span className={`${isLoading && styles.loading_btn_txt}`} >
                {label}
                {img && <Image src={img} alt={`${label} illustration`} />}
            </span>
        </button>
    )
}

export default Button;







