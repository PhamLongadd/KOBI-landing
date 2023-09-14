import Link from "next/link";
import styles from "./index.module.css";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isNavBarSticky, setIsNavBarSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isNavBarSticky) {
        setIsNavBarSticky(true);
      } else if (window.scrollY <= 100 && isNavBarSticky) {
        setIsNavBarSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavBarSticky]);

  return (
    <div className={`${isNavBarSticky ? styles.sticky : ""}`}>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <img src="KOBIlogo.jpg" alt="icon" />
        </div>
        <div className={styles.menu}>
          <Link href={"/"} className={styles.menuLink}>
            Home
          </Link>
          <Link href={"/"} className={styles.menuLink}>
            About
          </Link>
          <Link href={"/"} className={styles.menuLink}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
