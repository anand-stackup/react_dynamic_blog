import React from "react";
import Header from "../../Common/Header/Header";
import Container from "./Container/Container";
import "./Login.css";

const Login = () => {
  const data = {
    title: "LOGIN PAGE",
    desc: "",
    name: "",
  };

  return (
    <div className="login-page">
      <img
        src="https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?w=996&t=st=1700194328~exp=1700194928~hmac=cf82b4403b439e193a6d0e7dc7e488d3cf00066b7ab87bcd91c9dcafcb000fff"
        alt=""
      />
  
      <div className="login-content">
        <Header headerData={data}></Header>
        <Container></Container>
      </div>
    </div>
  );
};

export default Login;
