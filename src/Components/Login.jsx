import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";

const Login = () => {
  const {setLoggedin,setUser} = useContext(Context);
  
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const goto = () => {
    navigate("/signup");
  };

  const submitted = (event) => {
    event.preventDefault();
    setLoggedin(true);
    setUser(userName);
    navigate("/")
  };
  return (
    <>
      <form className="container" action="">
        <input 
        type="text"
        className="userName"
        value={userName}
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          className="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit" onClick={submitted}>
          Login
        </button>
        <p>
          Don't have an Account? <span onClick={goto}>Signup</span>
        </p>
      </form>
    </>
  );
};

export default Login;
