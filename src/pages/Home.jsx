import React from "react";
import { useState } from "react";

const Home = ({ setIsAuth, setName, name }) => {
        const input = document.querySelector("input");
 
  return (
    <div>
      Home
      <input type="text"
        // value={name}
        // name="name" 
        onChange={(e) => setName(e.target.value)} />
      <button onClick={() => {
        setIsAuth(true);
        input.value = "";
        input.setAttribute("disabled", true);
      }}>login</button>
      <button onClick={() => {
        setIsAuth(false);
        input.removeAttribute("disabled");
      }}>logout</button>
    </div>
  );
};

export default Home;
