"use client";
import React, { useState } from 'react'
import styles from "./MobileNav.module.css"
import Link from 'next/link';
import Image from 'next/image';

import { mocks } from '../../../organisms/constant';
import { MainLogo } from '@/app/components/atoms';
import { usePathname } from 'next/navigation';
import { menuHamburger, closeIcon } from '@/app/assets';

const MobileNav = () => {
  const pathname = usePathname();
  const { navLinks, mediaLinks } = mocks;

  const [showMenu, setShowMenu] = useState<boolean>(false);



  /* ===> mobile menu <=== */
  const MobileMenu = () => {
    return (
      <div className={styles.mobilemenu_container}>
        <section className={styles.menu_head}>
          <MainLogo />
          <figure>
            <Image
              src={closeIcon}
              alt="close menu"
              width={24}
              height={24}
              onClick={() => setShowMenu(false)}
            />
          </figure>
        </section>

        <section className={styles.menu_body}>
          <ul className={styles.navigation_links}>
            {navLinks.map((link, index) => {
              const { name, route } = link;
              const activePath = pathname === route;

              return (
                <Link href={route} key={index}>
                  <li
                    className={`${styles.path} ${activePath && styles.activePath}`}
                    onClick={() => setShowMenu(false)}
                  >
                    <span>#</span>{name}
                  </li>
                </Link>
              )
            })}
          </ul>

          <div className={styles.media_links}>
            <ul>
              {mediaLinks.map((link, idx) => {
                const { Icon, route } = link;
                return (
                  <li key={idx}>
                    <a href={route} target="_blank" rel="noopener noreferrer">
                      <Icon />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
      </div>
    )
  }




  return (
    <div>
      <section className={styles.mobilenav}>
        <MainLogo />

        <figure>
          <Image
            src={menuHamburger}
            alt="open menu"
            width={24}
            height={24}
            onClick={() => setShowMenu(true)}
          />
        </figure>
      </section>

      {showMenu && <MobileMenu />}
    </div>
  )
}

export default MobileNav



