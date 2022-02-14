import React from "react";
import { useState } from "react";

const Home = ({ setIsAuth, setName, name }) => {
  const handleLogin = (e) => {
    setName(e.target.value);
    // e.target.value = "";
  };

  return (
    <div>
      Home
      <input type="text"
        value={name}
        name="name" onChange={handleLogin} />
      <button onClick={() => setIsAuth(true)}>login</button>
      <button onClick={() => setIsAuth(false)}>logout</button>
    </div>
  );
};

export default Home;
