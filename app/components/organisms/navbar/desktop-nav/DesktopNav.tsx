import React from 'react'
import Image from 'next/image'
import styles from './DesktopNav.module.css'
import { mainlogo } from '../../../../assets/index';
import { mocks } from '../../../organisms/constant';
import { MainLogo } from '@/app/components/atoms';

const DesktopNav = () => {
  const { navLinks } = mocks;

  return (
    <div className={styles.desknav_container}>
     
      <div className={styles.desknav_content}>
        <MainLogo />

        <ul className={styles.navigation_links}>
          {navLinks.map((link, index) => {
            const { name, route } = link;
            return (
              <li key={index}>
                <span>#</span>{name}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default DesktopNav