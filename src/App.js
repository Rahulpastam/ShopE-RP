import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";

import { CartProvider } from "./utils/CartContext.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <CartProvider>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:productId" element={<Product />} />
          </Routes>
        </CartProvider>
      </Router>
    </>
  );
}

export default App;
