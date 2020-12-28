import React from "react";

const Form = () => {
  return (
    <div>
      <label htmlFor="recipientName">To</label>
      <input
        placeholder="Enter Your Name"
        type="text"
        id="recipientName"
        name="recipientName"
      />

      <label htmlFor="message">Say something nice</label>
      <textarea
        placeholder="Enter Your Message"
        name="message"
        id="message"
        cols={30}
        rows={10}
      ></textarea>

      <label htmlFor="recipientName">To</label>
      <input
        placeholder="Enter Reciever Name"
        type="text"
        id="recipientName"
        name="recipientName"
      />
    </div>
  );
};

export default Form;
