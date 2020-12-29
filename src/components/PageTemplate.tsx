import React from "react";
import Layout from "./Layout";
import Lolly from "./Lolly";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styles from "./PageTemplate.module.css";

let url: string;

process.env.NODE_ENV === "development"
  ? (url = "https://localhost:8888")
  : (url = "https://maaviasghar-vlolly.netlify.app");

const LINK_QUERY = gql`
  query queryLollyByLink($linkID: String!) {
    queryLollyByLink(linkID: $linkID) {
      topColor
      middleColor
      bottomColor
      senderName
      message
      recieverName
      linkID
    }
  }
`;

const PageTemplate = ({ pageContext }) => {
  const { loading, error, data } = useQuery(LINK_QUERY, {
    variables: { linkID: pageContext.linkID },
  });

  if (loading) {
    <h1>Loading..</h1>;
  }

  if (error) {
    <h1>{error.message}</h1>;
  }
  return (
    <div className={styles.container}>
      <Layout>
        <title>Virtual Lollipops for All!</title>
        <div className={styles.mainContainer}>
          <div className={styles.lollyContainer}>
            <Lolly
              top={data.topColor}
              middle={data.middleColor}
              bottom={data.bottomColor}
            />
          </div>
          <div className={styles.messageContainer}>
            <h2 className={styles.link}>{`${url}/lolly/${data.linkID}`}</h2>
            <h2 className={styles.sender}>{`${data.senderName}___`}</h2>
            <p className={styles.message}>"{data.message}"</p>
            <h2 className={styles.reciever}>___{data.recieverName}</h2>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PageTemplate;
