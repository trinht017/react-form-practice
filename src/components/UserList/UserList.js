import React from "react";

import styles from "./User.module.css";

import User from "../User/User";
import Card from "../Card/Card";

const UserList = (props) => {
  return (
    <Card className={styles["user-list"]}>
      <User name={"max"} age={17} />
      <User name={"max"} age={17} />
      <User name={"max"} age={17} />
    </Card>
  );
};

export default UserList;
