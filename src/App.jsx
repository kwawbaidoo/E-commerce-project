import { useState } from "react";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import Login from "./pages/Login";
import Category from "./components/Category";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./components/UserContext";
import ProfileEdit from "./components/ProfileEdit";
import { CartProvider } from "./helper/CartContext";

function App() {
  const [count, setCount] = useState(0);


  return (
    <CartProvider>
          <div>
      <ToastContainer/>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/category" element={<Category/>} />
        <Route path="/profileEdit" element={<ProfileEdit/>}/>
      </Routes>
      <Footer />
    </div>
    </CartProvider>

  );
}

export default App;
