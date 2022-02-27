import styles from "./FormValidation.module.css";

import Card from "../Card/Card";

const FormValidation = (props) => {
  const okayHandler = () => {
    props.onOkay();
  };
  return (
    <Card className={styles["form-validation"]}>
      <h2>Invalid input</h2>
      <p>{props.message}</p>
      <button onClick={okayHandler}>Okay</button>
    </Card>
  );
};

export default FormValidation;
