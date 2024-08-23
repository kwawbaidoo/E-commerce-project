import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Category from "./components/Category";
import AdminAddProduct from "./components/AddminAddProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import { CartProvider } from "./helper/CartContext";
import { ProductsProvider } from "./helper/ProductsContext";
import Checkout from "./components/Checkout";
import ProfileEdit from "./components/ProfileEdit";
import ForgetPass from "./components/Forgetpass";
import AllProductsPage from "./pages/AllProductsPage";
import ProductDetails from "./pages/ProductDetails";
import CategoryProducts from "./pages/CategoryProducts";

function App() {
  return (
    <CartProvider>
  <ProductsProvider>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ToastContainer />
      <Navigation />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profileEdit" element={<ProfileEdit />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/products/:category/:subCategory" element={<CategoryProducts/>} />

        </Routes>
      </div>
      <Footer />
    </div>
  </ProductsProvider>
</CartProvider>

  );
}

export default App;
