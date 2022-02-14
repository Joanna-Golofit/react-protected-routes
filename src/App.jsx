import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [name, setName] = useState("");

  return (
    <BrowserRouter>
      <div className="App">hello</div>
      <Routes>
        <Route path="/" element={<Home setIsAuth={setIsAuth} setName={setName} name={name}/>} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      <ProtectedRoutes isAuth={isAuth} name={name}/>
    </BrowserRouter>
  );
}

export default App;
