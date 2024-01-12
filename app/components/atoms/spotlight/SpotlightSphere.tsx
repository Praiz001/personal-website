"use client"
import React, { useState, MouseEventHandler, useEffect } from 'react';
import styles from "./SpotlightSphere.module.css";

const SpotlightSphere = () => {
    const [position, setPosition] = useState({ y: 10, x: 10 })


    useEffect(() => {
        const updatePosition = (e: any) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updatePosition);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    return (
        <div className={styles.spotlight_container}>
            <div style={{ left: position.x, top: position.y }} className={styles.spotlight}>
                {/* SpotlightSphere */}
            </div>
        </div>
    )
}

export default SpotlightSphere