import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Lolly from "../components/Lolly";

const IndexPage = () => {
  return (
    <div>
      <title>Virtual Lollipops for All!</title>
      <div>
        <Header />
      </div>
      <div>
        <Lolly top={"#fa73d9"} middle={"#e55945"} bottom={"#ddaa43"} />
        <Form />
      </div>
    </div>
  );
};

export default IndexPage;
