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
import ProfileEdit from "./components/ProfileEdit";
import AdminAddProduct from "./components/AddminAddProduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <div>

      {/* <Navigation  /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/category" element={<Category />} />
        <Route path="/profileEdit" element={<ProfileEdit />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
