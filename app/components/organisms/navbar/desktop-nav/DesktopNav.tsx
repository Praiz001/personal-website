"use client"
import React from 'react'
import styles from './DesktopNav.module.css'
import Link from 'next/link';

import { mocks } from '../../../organisms/constant';
import { MainLogo } from '@/app/components/atoms';
import { usePathname } from 'next/navigation';

const DesktopNav = () => {
  const pathname = usePathname();
  const { navLinks } = mocks;

  return (
    <div className={styles.desknav_container}>

      <div className={styles.desknav_content}>
        <MainLogo />

        <ul className={styles.navigation_links}>
          {navLinks.map((link, index) => {
            const { name, route } = link;
            const activePath = pathname === route;

            return (
              <li
                className={`${styles.path} ${activePath && styles.activePath}`}
                key={index}>
                <Link href={route}>
                  <span>#</span>{name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default DesktopNav