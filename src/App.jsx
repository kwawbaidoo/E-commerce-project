import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Category from "./components/Category";
import AdminAddProduct from "./components/AddminAddProduct";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import { CartProvider } from "./helper/CartContext";
import Checkout from "./components/Checkout";
import ProfileEdit from "./components/ProfileEdit";

function App() {
  return (
    
    <CartProvider>
      
        <div>
          <ToastContainer/>
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
 
  );
}

export default App;
