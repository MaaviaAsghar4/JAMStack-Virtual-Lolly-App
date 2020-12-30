import React from "react";
import Layout from "./Layout";
import Lolly from "./Lolly";
// import { graphql } from "gatsby";
// import { useParams } from "@reach/router";
import styles from "./ClientLolly.module.css";

// export const query = graphql`
//   query MyQuery($linkID: String!) {
//     getlolly {
//       queryLollyByLink(linkID: $linkID) {
//         topColor
//         middleColor
//         bottomColor
//         senderName
//         message
//         recieverName
//         linkID
//       }
//     }
//   }
// `;

const ClientLolly = () => {
  // const { linkID } = useParams();
  // console.log(linkID);
  //   if (!queryLollyByLink) {
  //     return <h1 style={{ color: "#f7f7f7" }}>Loading...</h1>;
  //   }
  return (
    <div className={styles.container}>
      <Layout>
        <title>Virtual Lollipops for All!</title>
        <div className={styles.mainContainer}>
          <div className={styles.lollyContainer}>
            <Lolly top={"red"} middle={"blue"} bottom={"green"} />
          </div>
          <div className={styles.messageContainer}>
            <a
              href={`https://maaviasghar-vlolly.netlify.app/lolly/${"queryLollyByLink.linkID"}`}
              target="_blank"
              className={styles.link}
            >{`https://maaviasghar-vlolly.netlify.app/lolly/${"queryLollyByLink.linkID"}`}</a>
            <h2
              className={styles.sender}
            >{`${"queryLollyByLink.senderName"}___`}</h2>
            <p className={styles.message}>"{"queryLollyByLink.message"}"</p>
            <h2 className={styles.reciever}>
              ___{"queryLollyByLink.recieverName"}
            </h2>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ClientLolly;
