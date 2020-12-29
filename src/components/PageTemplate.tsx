import React from "react";
import Layout from "./Layout";
import Lolly from "./Lolly";
import styles from "./PageTemplate.module.css";

const PageTemplate = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <div className={styles.container}>
      <Layout>
        <title>Virtual Lollipops for All!</title>
        <div className={styles.mainContainer}>
          <div className={styles.lollyContainer}>
            <Lolly top={"red"} middle={"green"} bottom={"yellow"} />
          </div>
          <div className={styles.messageContainer}>
            <h2 className={styles.link}>Link</h2>
            <h2 className={styles.sender}>Name___</h2>
            <p className={styles.message}>"Message"</p>
            <h2 className={styles.reciever}>___Name</h2>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PageTemplate;
