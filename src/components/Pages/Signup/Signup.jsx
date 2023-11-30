import React from "react";
import Container from "./Container/Container";
import Header from "../../Common/Header/Header";
import "./Signup.css";

const Signup = () => {
  const data = {
    title: "SIGNUP PAGE",
    desc: "",
    name: "",
  };

  return (
    <div className="signup-page">
      <img
        src="https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg?w=996&t=st=1700194328~exp=1700194928~hmac=cf82b4403b439e193a6d0e7dc7e488d3cf00066b7ab87bcd91c9dcafcb000fff"
        alt=""
      />
      <div className="signup-content">
        <Header headerData={data}></Header>
        <Container />
      </div>
    </div>
  );
};

export default Signup;
