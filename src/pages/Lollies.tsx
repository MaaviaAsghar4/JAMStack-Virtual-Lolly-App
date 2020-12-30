import React from "react";
import Layout from "../components/Layout";
import Lolly from "../components/Lolly";
import { navigate } from "gatsby";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styles from "./Lollies.module.css";

const GET_QUERY = gql`
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

const Lollies = ({ location: { state } }) => {
  //   if (!queryLollyByLink) {
  //     return <h1 style={{ color: "#f7f7f7" }}>Loading...</h1>;
  //   }
  console.log(state);
  const { id } = state;
  const linkID = id;
  const { loading, error, data } = useQuery(GET_QUERY, {
    variables: { linkID },
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  console.log(data);
  const { queryLollyByLink } = data;
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
              href={`https://maaviasghar-vlolly.netlify.app/lolly/${queryLollyByLink.linkID}`}
              target="_blank"
              className={styles.link}
            >{`https://maaviasghar-vlolly.netlify.app/lolly/${queryLollyByLink.linkID}`}</a>
            <h2
              className={styles.sender}
            >{`${queryLollyByLink.senderName}___`}</h2>
            <p className={styles.message}>"{queryLollyByLink.message}"</p>
            <h2 className={styles.reciever}>
              ___{queryLollyByLink.recieverName}
            </h2>
          </div>
        </div>
        <div className={styles.goHome}>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Create New
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default Lollies;
