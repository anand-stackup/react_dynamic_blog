import React, { useState } from "react";
import "./SignupForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  let initData = { email: "", password: "" };
  let initError = { email: "", password: "" };

  let [data, setData] = useState(initData);
  let [error, setError] = useState(initError);
  let [res, setRes] = useState("");

  const validateForm = () => {
    let isValid = true;
    const newError = { email: "", password: "" };

    if (!data.email) {
      newError.email = "Email is required";
      isValid = false;
    }

    if (!data.password) {
      newError.password = "Password is required";
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  let inputData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let postData = (e) => {
    e.preventDefault();
    if(validateForm()){
      axios
      .post("http://localhost:4000/api/users/signup", data)
      .then((response) => {
        setRes(response.data)
        console.log(response.status);
        if (response.status === 201) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };

  return (
    <div className="signup-form">
      <form action="" id="signupForm">
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={inputData}
        />
        {error.email ? <span className="message">{error.email}</span> : null}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={inputData}
        />
        {error.password ? <span className="message">{error.password}</span> : null}
        {res? <span className="message">{res}</span> : null}
        <button onClick={postData}>SIGNUP</button>
      </form>
    </div>
  );
};

export default SignupForm;
