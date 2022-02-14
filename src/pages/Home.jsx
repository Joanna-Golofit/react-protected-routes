import React from 'react'

const Home = ({ setIsAuth }) => {
  return (
    <div>
      Home
      <button onClick={() => setIsAuth(true)}>login</button>
      <button onClick={() => setIsAuth(false)}>logout</button>
    </div>
  );
};

export default Home