import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")

  const submitted = (event) => {
    event.preventDefault();
    // console.log(formData);
      navigate('/login');
    
  };

  const navigate = useNavigate();
  const goto = () =>{
    navigate('/login');
  }


  return (
    <>
      <form className="container" action="">
          <input
            type="text"
            placeholder="Name"
            name="userName"
            value={userName}
            onChange={(e)=>{setUserName(e.value)}}
          />
          <input
            type="text"
            placeholder="Contact"
            name="phone"
            value={phone}
            onChange={(e)=>{setPhone(e.value)}}
          />
          <input
            type="text"
            className="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={(e)=>{setEmail(e.value)}}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e)=>{setPassword(e.value)}}
          />
          <input
            type="password"
            placeholder="ConfirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e)=>{setConfirmPassword(e.value)}}
          />
        <button type="submit" onClick={submitted}>
          Signup
        </button>
        <p>Already have an Account? <span onClick={goto}>Login</span></p>
      </form>  
    </>
  );
};

export default Signup;
