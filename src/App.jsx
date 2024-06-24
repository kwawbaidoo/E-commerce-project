import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
