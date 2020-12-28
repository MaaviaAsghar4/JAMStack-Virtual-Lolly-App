import React, { useState } from "react";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Lolly from "../components/Lolly";
import styles from "./index.module.css";

const IndexPage = () => {
  let [topColor, setTopColor] = useState("#fa73d9");
  let [middleColor, setMiddleColor] = useState("#e55945");
  let [bottomColor, setBottomColor] = useState("#ddaa43");
  return (
    <div className={styles.container}>
      <Layout>
        <title>Virtual Lollipops for All!</title>
        <div className={styles.mainContainer}>
          <div className={styles.lollyContainer}>
            <Lolly top={topColor} middle={middleColor} bottom={bottomColor} />
            <div className={styles.input}>
              <input
                type="color"
                value={topColor}
                onChange={(e) => setTopColor(e.target.value)}
              />
              <input
                type="color"
                value={middleColor}
                onChange={(e) => setMiddleColor(e.target.value)}
              />
              <input
                type="color"
                value={bottomColor}
                onChange={(e) => setBottomColor(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
