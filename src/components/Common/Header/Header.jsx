import React from "react";
import "./Header.css"
import { useNavigate } from "react-router-dom";



const Header = (props) => {
  const navigate = useNavigate();

  const removeTokenFromLocalStorage = () => {
    localStorage.removeItem("Authorization");
    navigate("/login");
  };

  return (
    <div className="header">
      <h1>{props.headerData.title}</h1>
      {props.headerData.desc? <p>{props.headerData.desc}<span className="header-span">{props.headerData.name}</span></p>: null}
      <div className="header-button">
      {props.headerData.title === "ADMIN PAGE"?<button onClick={removeTokenFromLocalStorage}>LOGOUT</button>: null}
      </div>
    </div>
  );
};

export default Header;
