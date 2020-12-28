import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.headTitle}>Virtual Lollipop</h1>
      <h2 className={styles.subTitle}>
        Because We All Know Someone Who Deserves SWEET
      </h2>
    </div>
  );
};

export default Header;
