import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">hello</div>
      <Routes>
        <Route path="/" element={<Home setIsAuth={setIsAuth}/>} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
      <ProtectedRoutes isAuth={isAuth} />
    </BrowserRouter>
  );
}

export default App;
