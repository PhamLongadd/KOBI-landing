import styles from "./index.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact(params) {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <h1>Contact US</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.contactInfo}>
          <div className={styles.box}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className={styles.text}>
              <h3>Address</h3>
              <p>
                H3TM4 TÒA CHUNG CƯ HOPE RESIDENCE <br /> Nguyễn Lam, P. Phúc
                Đồng, Q. Long Biên, Hà Nội
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className={styles.text}>
              <h3>Phone</h3>
              <p>0989-488-336</p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className={styles.text}>
              <h3>Email</h3>
              <p>cskh@kobifood.vn</p>
            </div>
          </div>
        </div>
        <div className={styles.contactForm}>
          <form>
            <h2>Send Message</h2>
            <div className={styles.inputBox}>
              <input type="text" required="required" />
              <span>Full Name</span>
            </div>
            <div className={styles.inputBox}>
              <input type="text" required="required" />
              <span>Email</span>
            </div>
            <div className={styles.inputBox}>
              <textarea required="required" />
              <span>Type your Message...</span>
            </div>
            <div className={styles.inputBox}>
              <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
