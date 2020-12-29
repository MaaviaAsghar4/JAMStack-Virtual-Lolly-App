import React from "react";
import styles from "./Form.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

interface formProps {
  handleVlollyState: (
    senderName: string,
    message: string,
    recieverName: string
  ) => void;
}

const Form: React.FC<formProps> = ({ handleVlollyState }) => {
  const formik = useFormik({
    initialValues: {
      senderName: "",
      message: "",
      recieverName: "",
    },
    validationSchema: Yup.object({
      senderName: Yup.string().required("Sender Name is required"),
      message: Yup.string().required("Message field is required"),
      recieverName: Yup.string().required("Reciever Name is required"),
    }),
    onSubmit: (values) => {
      handleVlollyState(values.senderName, values.message, values.recieverName);
    },
  });

  return (
    <div>
      <form className={styles.container} onSubmit={formik.handleSubmit}>
        {formik.touched.senderName && formik.errors.senderName ? (
          <span className={styles.span}>{formik.errors.senderName}</span>
        ) : (
          ""
        )}
        <label className={styles.label} htmlFor="recipientName">
          To
        </label>
        <input
          className={styles.input}
          placeholder="Enter Your Name"
          type="text"
          id="recipientName"
          name="senderName"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.senderName}
        />
        {formik.touched.message && formik.errors.message ? (
          <span className={styles.span}>{formik.errors.message}</span>
        ) : (
          ""
        )}
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
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.message}
        ></textarea>
        {formik.touched.recieverName && formik.errors.recieverName ? (
          <span className={styles.span}>{formik.errors.recieverName}</span>
        ) : (
          ""
        )}
        <label className={styles.label} htmlFor="recipientName">
          From
        </label>
        <input
          className={styles.input}
          placeholder="Enter Reciever Name"
          type="text"
          id="recipientName"
          name="recieverName"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.recieverName}
        />
        <button type="submit" className={styles.btn}>
          Freeze the Lolly
        </button>
      </form>
    </div>
  );
};

export default Form;
 