import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { CartContext } from "../utils/CartContext";

const Navbar = () => {
  const { loggedin, setLoggedin, user } = useContext(Context);
  const { setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const [showLoginMessage, setShowLoginMessage] = useState(false);

  const handleCartClick = () => {
    if (!loggedin) {
      setShowLoginMessage(true); 
      navigate("/login")
    } else {
      setShowLoginMessage(false); 
      navigate("/cart"); 
    }
  };

  const handleLogout = () => {
    setCartItems([]); 
    setLoggedin(false);
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <Link to={"/"}>
            <img src="/logo.png" alt="logo" className="logo-img" />
          </Link>
        </div>
        <Link className="navbar-link" to="/">
          <span className="title-head">ShopE</span>
        </Link>
        <Link className="navbar-link" to="/about">About</Link>
        <Link className="navbar-link" to="/contact">Contact</Link>
      </div>
      <div className="navbar-right">
        <span
          className="navbar-link"
          onClick={handleCartClick}
          style={{ cursor: "pointer" }}
        >
          Cart
        </span>
        {showLoginMessage && (
          <span style={{ color: "red", fontSize: "12px", marginLeft: "5px" }}>
            (Login to access your cart)
          </span>
        )}
        {loggedin ? (
          <>
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              className="dropdown"
            >
              {user}
              <span
                onClick={handleLogout}
                className="dropdown-content"
                style={{ cursor: "pointer" }}
              >
                Logout
              </span>
            </span>
          </>
        ) : (
          <>
            <Link className="navbar-link" to="/login">
              Login
            </Link>
            <Link className="navbar-link" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
