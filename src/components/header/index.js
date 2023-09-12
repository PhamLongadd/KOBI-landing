import Link from "next/link";
import styles from "./index.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
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
      <div className={styles.title}>
        <h1 className={styles.name}>KOBI FOOD</h1>
        <h1 className={styles.slogan}>"Ăn không ngon thì cook"</h1>
        <button>ORDER NOW</button>
      </div>
    </div>
  );
}
