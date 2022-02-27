import React, { useState } from "react";

import styles from "./UserForm.module.css";

import Card from "../Card/Card";
import FormValidation from "../FormValidation/FormValidation";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [ageValid, setAgeValid] = useState(true);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);
      return;
    }

    if (enteredAge <= 0) {
      setAgeValid(false);
      return;
    }

    const newUser = {
      key: Math.random(),
      name: enteredName,
      age: enteredAge,
    };

    props.onNewUser(newUser);

    setEnteredName("");
    setEnteredAge("");
  };

  const okayHandler = () => {
    setIsValid(true);
    setAgeValid(true);
  };

  return (
    <Card className={styles["user-form"]}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={enteredName}
          type="text"
          id="username"
          name="username"
          onChange={nameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          value={enteredAge}
          id="age"
          type="text"
          name="age"
          onChange={ageChangeHandler}
        ></input>
        <button type="submit" value="Submit">
          Add User
        </button>
      </form>
      {!isValid ? (
        <FormValidation
          message="Please enter a valid name and age (non-empty values)."
          onOkay={okayHandler}
          style={{ zIndex: 10 }}
        />
      ) : (
        ""
      )}
      {!ageValid ? (
        <FormValidation
          message="Please enter a valid age (>0)."
          onOkay={okayHandler}
          style={{ zIndex: 10 }}
        />
      ) : (
        ""
      )}
    </Card>
  );
};

export default UserForm;
