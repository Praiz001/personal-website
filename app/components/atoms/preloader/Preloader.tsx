'use client'
import React, { useEffect, useState } from 'react';
import styles from "./Preloader.module.css";

import { AnimatePresence, motion } from 'framer-motion'

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    //display animation bfr loading page
    useEffect(() => {
        const delay = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 5000)
        }
        delay();
    }, [isLoading])

    const pageVariants = {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        // exit={{ opacity: 0 }}
        exit: {
            opacity: 0, transition: { duration: .8, ease: 'easeInOut' }
        }
    };

    return (
        <AnimatePresence mode='wait' >
            {isLoading &&
                <div className={styles.loading_wrapper}>
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageVariants}

                        className={styles.loading}
                    >
                        <span>Cooking!</span>
                    </motion.div>
                </div>
            }

        </AnimatePresence >
    )
}

export default Preloader

