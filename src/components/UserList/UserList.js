import React from "react";

import styles from "./User.module.css";

import User from "../User/User";
import Card from "../Card/Card";

const UserList = (props) => {
  const userListContent =
    props.users.length > 0
      ? props.users.map((user) => (
          <User key={user.key} name={user.name} age={user.age} />
        ))
      : "";

  return <Card className={styles["user-list"]}>{userListContent}</Card>;
};

export default UserList;
