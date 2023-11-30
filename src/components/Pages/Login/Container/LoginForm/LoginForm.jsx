import React, { useState } from "react";
import "./LoginForm.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  
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
      .post("http://localhost:4000/api/users/login", data)
      .then((response) => {
        console.log(response.data.token);
        localStorage.setItem('Authorization', response.data.token)
        setRes(response.data)
        if (response.status === 201) {
          navigate("/admin");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
    
  };

  return (
    <div className="login-form">
      <form action="" id="loginForm">
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
        <button onClick={postData}>LOGIN</button>
        <span>OR</span>
        <Link to="/signup">SIGNUP</Link>
      </form>
    </div>
  );
};

export default LoginForm;
