import React from "react";
import Layout from "./Layout";
import Lolly from "./Lolly";
// import { useQuery } from "@apollo/client";
import { graphql } from "gatsby";
// import gql from "graphql-tag";
import styles from "./PageTemplate.module.css";

let url: string;

process.env.NODE_ENV === "development"
  ? (url = "https://localhost:8888")
  : (url = "https://maaviasghar-vlolly.netlify.app");

// const LINK_QUERY = gql`
//   query queryLollyByLink($linkID: String!) {
//     queryLollyByLink(linkID: $linkID) {
//       topColor
//       middleColor
//       bottomColor
//       senderName
//       message
//       recieverName
//       linkID
//     }
//   }
// `;

export const query = graphql`
  query MyQuery($linkID: String!) {
    getlolly {
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
  }
`;

const PageTemplate = ({
  data: {
    getlolly: { queryLollyByLink },
  },
}) => {
  // const { loading, error, data } = useQuery(LINK_QUERY, {
  //   variables: { linkID: pageContext.linkID },
  // });

  // if (loading) {
  //   <h1>Loading..</h1>;
  // }

  // if (error) {
  //   <h1>{error.message}</h1>;
  // }
  // console.log(data);
  return (
    <div className={styles.container}>
      <Layout>
        <title>Virtual Lollipops for All!</title>
        <div className={styles.mainContainer}>
          <div className={styles.lollyContainer}>
            <Lolly
              top={queryLollyByLink.topColor}
              middle={queryLollyByLink.middleColor}
              bottom={queryLollyByLink.bottomColor}
            />
          </div>
          <div className={styles.messageContainer}>
            <a
              href={`${url}/lolly/${queryLollyByLink.linkID}`}
              target="_blank"
              className={styles.link}
            >{`${url}/lolly/${queryLollyByLink.linkID}`}</a>
            <h2
              className={styles.sender}
            >{`${queryLollyByLink.senderName}___`}</h2>
            <p className={styles.message}>"{queryLollyByLink.message}"</p>
            <h2 className={styles.reciever}>
              ___{queryLollyByLink.recieverName}
            </h2>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default PageTemplate;
