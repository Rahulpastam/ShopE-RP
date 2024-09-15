// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const navigate = useNavigate();
  const goto = () => {
    navigate("/login");
  };

  const onSubmitHandler = (data) => {
    navigate('/login');
    // console.log(data);
  };

  return (
    <>
      <form
        className="container"
        onSubmit={handleSubmit(onSubmitHandler)}
        noValidate
      >
        <div>
          <input
            type="text"
            placeholder="Name"
            {...register("userName", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <p className="errors">{errors.userName?.message}</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Contact"
            {...register("phone", {
              required: {
                value: true,
                message: "Contact is required",
              },
              pattern: {
                value: /^[6-9]{1}[0-9]{9}$/,
                message: "Invalid phone number",
              },
            })}
          />
          <p className="errors">{errors.phone?.message}</p>
        </div>
        <div>
          <input
            type="text"
            placeholder="email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
          />
          <p className="errors">{errors.email?.message}</p>
        </div>
        <div>
          {" "}
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: {
                value: true,
                message: "Password is required",
              },
            })}
          />
          <p className="errors">{errors.password?.message}</p>
        </div>
        <div>
          {" "}
          <input
            type="password"
            placeholder="ConfirmPassword"
            {...register("confirmPassword", {
              required: {
                value: true,
                message: "Confirm Password is required",
              },
            })}
          />
          <p className="errors">{errors.confirmPassword?.message}</p>
        </div>
        <button type="submit">Signup</button>
        <p>
          Already have an Account? <span onClick={goto}>Login</span>
        </p>
      </form>
    </>
  );
};

export default Signup;
