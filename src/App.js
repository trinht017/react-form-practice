import React, { useState } from "react";

import UserList from "./components/UserList/UserList";
import UserForm from "./components/UserForm/UserForm";

function App() {
  const [users, setUsers] = useState([{ key: 1, name: "test", age: 19 }]);

  const newUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div>
      <UserForm onNewUser={newUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
