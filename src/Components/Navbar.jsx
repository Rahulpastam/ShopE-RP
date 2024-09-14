import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";

const Navbar = () => {
  const { loggedin, user } = useContext(Context);
  const navigate = useNavigate();
  const cartClick = () => {
    loggedin ? navigate("/cart") : navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <Link to={"/"}>
            <img src="/logo.png" alt="logo" className="logo-img" />{" "}
          </Link>
        </div>
        <Link className="navbar-link" to="/">
          <span className="title-head"> ShopE</span>
        </Link>
        <Link className="navbar-link" to="/about">
          About
        </Link>
        <Link className="navbar-link" to="/contact">
          Contact
        </Link>
      </div>
      <div className="navbar-right">
        <div
          className="navbar-link"
          style={{ cursor: "pointer" }}
          onClick={cartClick}
        >
          Cart
        </div>
        {loggedin ? (
          <>
            <span
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {user}
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
