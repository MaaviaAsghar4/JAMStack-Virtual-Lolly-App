import React from "react";
import styles from "./Form.module.css";
const Form = () => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="recipientName">
        To
      </label>
      <input
        className={styles.input}
        placeholder="Enter Your Name"
        type="text"
        id="recipientName"
        name="recipientName"
      />

      <label className={styles.label} htmlFor="message">
        Say something nice
      </label>
      <textarea
        className={styles.textArea}
        placeholder="Enter Your Message"
        name="message"
        id="message"
        cols={30}
        rows={10}
      ></textarea>

      <label className={styles.label} htmlFor="recipientName">
        From
      </label>
      <input
        className={styles.input}
        placeholder="Enter Reciever Name"
        type="text"
        id="recipientName"
        name="recipientName"
      />
      <button className={styles.btn}>Freeze the Lolly</button>
    </div>
  );
};

export default Form;
