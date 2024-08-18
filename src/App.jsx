import { useState } from "react";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';import Login from "./pages/Login";
import Category from "./components/Category";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./components/UserContext";
=======
import ProfileEdit from "./components/ProfileEdit";
<<<<<<< HEAD
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
=======
import AdminAddProduct from "./components/AddminAddProduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import { CartProvider } from "./helper/CartContext";
import Checkout from "./components/Checkout";

function App() {
  return (
    
    <CartProvider>
      
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category" element={<Category />} />
            <Route path="/profileEdit" element={<ProfileEdit />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
          {/* <AdminAddProduct/> */}
          <Footer />
        </div>
     
    </CartProvider>
 
>>>>>>> 008f0f2ba523358c5b2a08f4793fadaaf1307908
  );
}

export default App;
