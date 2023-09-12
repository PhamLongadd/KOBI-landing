"use client";
import Link from "next/link";
import styles from "./index.module.css";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isNavBarSticky, setIsNavBarSticky] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageList = ["anh1.png", "anh2.png", "anh4.png"];
  const intervalRef = useRef(null);

  const changeImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !isNavBarSticky) {
        setIsNavBarSticky(true);
      } else if (window.scrollY <= 100 && isNavBarSticky) {
        setIsNavBarSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    intervalRef.current = setInterval(changeImage, 6000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(intervalRef.current);
    };
  }, [isNavBarSticky]);

  const handleClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={styles.container}>
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
      <div className={styles.thumbnail}>
        <div
          className={styles.fadeContainer}
          style={{
            backgroundImage: `url(${imageList[currentImageIndex]})`,
          }}
        >
          <div className={styles.owlDotContainer}>
            {imageList.map((image, index) => (
              <button
                key={index}
                role="button"
                className={`${styles.owlDot} ${
                  index === currentImageIndex ? styles.activeDot : ""
                }`}
                onClick={() => handleClick(index)}
              >
                <FontAwesomeIcon icon={faCircle} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
