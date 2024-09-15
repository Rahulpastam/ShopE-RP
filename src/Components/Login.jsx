import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { useForm } from "react-hook-form";

const Login = () => {
  const {setLoggedin,setUser} = useContext(Context);
  const { register, handleSubmit, formState} = useForm();
  const { errors } = formState;

  const submitLogin = (data) => {
    // console.log(data);
    setLoggedin(true);
    setUser(data.userName);
    navigate("/")
  }

  const navigate = useNavigate();
  const goto = () => {
    navigate("/signup");
  };
  return (
    <>
      <form className="container" onSubmit={handleSubmit(submitLogin)} noValidate>
       <div> <input 
        type="text"
        className="userName"
        placeholder="UserName"
        {...register("userName", {
          required: {
            value: true,
            message: "UserName is required"
          }
        })}
        />
        <p className="errors">{errors.userName?.message}</p>
        </div>
        <div><input
          type="text"
          className="email"
          placeholder="email"
          {...register("email", {
            required: {
              value: true,
              message: "email is required"
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
            }
          })}

        />
        <p className="errors">{errors.email?.message}</p>
        </div>
        <div><input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: {
              value: true,
              message: "password is required"
            }
          })}
 
        />
        <p className="errors">{errors.password?.message}</p>
        </div>
        <button type="submit">
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
