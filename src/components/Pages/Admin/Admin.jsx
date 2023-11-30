import React, { useEffect } from "react";
import Header from "../../Common/Header/Header";
import Container from "./Container/Container";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("Authorization");
};

const Admin = () => {
  const data = {
    title: "ADMIN PAGE",
    desc: "",
    name: "",
  };

  const navigate = useNavigate();


  const token = getTokenFromLocalStorage();

  const headers = token
    ? {
        Authorization: `${token}`,
      }
    : {};

    useEffect(() => {
      if (token) {
        axios.get("http://localhost:4000/auth", { headers })
          .then((res) => {
            console.log(res.data);
            if(res.data === 'Unauthorized' || res.data === 'Forbidden'){
              navigate("/login");
            }
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      } else {
        console.log("no token");
        navigate("/login");
      }
    }, [token]);


  return (
    <div>
      <Header headerData={data}></Header>
      <Container></Container>
    </div>
  );
};

export default Admin;
