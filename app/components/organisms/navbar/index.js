import React from "react";

import DesktopNav from "./desktop-nav/DesktopNav";
import MobileNav from "./mobile-nav/MobileNav";

const Navbar = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 10 
      }}
    >
      <DesktopNav />
    </div>
  );
};

export default Navbar;
