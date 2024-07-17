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
import Category from "./components/Category";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./components/UserContext";
=======
import ProfileEdit from "./components/ProfileEdit";
>>>>>>> 0cc64a9b22b11e22633a2a8c40371bc3f4abc8ac

function App() {
  const [count, setCount] = useState(0);


  return (
    <div>
      <UserProvider>
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
      </UserProvider>
    </div>
  );
}

export default App;
