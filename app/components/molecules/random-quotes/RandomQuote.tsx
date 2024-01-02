"use client"
import React, { useState, useEffect } from 'react'
import styles from "./RandomQuote.module.css"

import Image from 'next/image'
import { quotesIcon } from '@/app/assets';
import { mocks } from '../constant';

const RandomQuote = () => {
    // const { RandomQuotes: { quotes } } = mocks
    //TODO: Add functuionality to display new random quote on each render.
    // const [currentQuote, setCurrentQuote] = useState()
    // useEffect(() => {
    //     const randomIndex = Math.floor(Math.random() * quotes.length);
    //     const randomQuote = quotes[randomIndex];
    //     setCurrentQuote(randomQuote);
    // },[])

    return (
        <div className={styles.quote_wrapper}>
            <span>
                <figure className={styles.open_quote}>
                    <Image src={quotesIcon} alt='quote' />
                </figure>
                <p>With great power comes great electricity bill</p>
                <figure className={styles.close_quote}>
                    <Image src={quotesIcon} alt='quote' />
                </figure>
            </span>
            <p>- Dr. Who</p>
        </div>
    )
}

export default RandomQuote