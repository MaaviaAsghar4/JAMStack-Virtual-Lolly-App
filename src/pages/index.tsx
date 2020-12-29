import React, { useState } from "react";
import { navigate } from "gatsby";
import shortid from "shortid";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Lolly from "../components/Lolly";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import styles from "./index.module.css";

const ADD_LOLLY = gql`
  mutation addVlolly(
    $topColor: String!
    $middleColor: String!
    $bottomColor: String!
    $senderName: String!
    $message: String!
    $recieverName: String!
    $linkID: String!
  ) {
    addVlolly(
      topColor: $topColor
      middleColor: $middleColor
      bottomColor: $bottomColor
      senderName: $senderName
      message: $message
      recieverName: $recieverName
      linkID: $linkID
    ) {
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

const IndexPage = () => {
  const id = shortid.generate();
  let [topColor, setTopColor] = useState("#fa73d9");
  let [middleColor, setMiddleColor] = useState("#e55945");
  let [bottomColor, setBottomColor] = useState("#ddaa43");
  const [addVlolly, { data }] = useMutation(ADD_LOLLY);

  const handleVlollyState = (
    senderName: string,
    message: string,
    recieverName: string
  ) => {
    console.log(senderName, message, recieverName);
    const generatePage = async () => {
      const result = await addVlolly({
        variables: {
          topColor,
          middleColor,
          bottomColor,
          senderName,
          message,
          recieverName,
          linkID: id,
        },
      });
    };

    generatePage();
  };
  
  
  if(data){
    navigate(`/lolly/${id}`);
  }
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
            <Form handleVlollyState={handleVlollyState} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default IndexPage;
