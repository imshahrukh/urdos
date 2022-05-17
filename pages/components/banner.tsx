import styles from "./../../styles/Banner.module.css";
import women from "./../kuku/women.png";
import shoe from "./../kuku/shoe.png";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        <div className={styles.shoe}>
          <Image className={styles.shoeImage} src={shoe} alt="" />
        </div>
        <div className={styles.content}>
          <span className={styles.contentSpan}> upto</span>
          <h3 className={styles.contenth3}>50% 0ff</h3>
          <p className={styles.contentP}>offer ends after 5 days</p>
          <a href="#" className={styles.btn}>
            veiw offer
          </a>
        </div>
        <div className={styles.women}>
          <Image className={styles.womenImage} src={women} alt="" />
        </div>
      </div>
    </div>
  );
};
