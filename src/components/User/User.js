import React from "react";

import styles from "./User.module.css";

const User = (props) => {
  let userContent = props.name + " (" + props.age + " years old)";
  return (
    <div className={styles.user}>
      <p>{userContent}</p>
    </div>
  );
};

export default User;
