import React, { useState } from "react";
import Users from "./components/Users";
import UserCount from "./components/Usercount";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleAddUser = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1 className="text-center app-title">External User Directory</h1>
      
      <UserCount count={count} />
      
      <div className="mt-5">
        <Users onAddUser={handleAddUser} />
      </div>
    </div>
  );
}

export default App;