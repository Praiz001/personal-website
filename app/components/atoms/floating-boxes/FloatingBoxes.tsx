import React from 'react'
import Image from 'next/image'
import styles from './FloatingBoxes.module.css'

import { squareSm, squareLg, squareDot } from '@/app/assets';

const FloatingBoxes = () => {
    
  return (
      <div className={styles.asthetics}>
          <figure>
              <Image src={squareSm} alt='floating block' />
          </figure>
          <figure>
              <Image src={squareLg} alt='floating block' />
          </figure>
          <figure>
              <Image src={squareDot} alt='floating block' />
          </figure>
          <figure>
              <Image src={squareLg} alt='floating block' />
          </figure>
          <figure>
              <Image src={squareDot} alt='floating block' />
          </figure>
          <figure>
              <Image src={squareDot} alt='floating block' />
          </figure>

      </div>
  )
}

export default FloatingBoxes