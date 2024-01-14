import React from "react";
import styles from "./navbar.module.css"

import DesktopNav from "./desktop-nav/DesktopNav";
import MobileNav from "./mobile-nav/MobileNav";

const Navbar = () => {
  return (
    <main className={styles.navbar_container}>
      <div className={styles.desktop_nav}>
        <DesktopNav />
      </div>
      <div className={styles.mobile_nav}>
        <MobileNav />
      </div>
    </main>
  );
};

export default Navbar;
