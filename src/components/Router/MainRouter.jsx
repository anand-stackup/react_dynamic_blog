import React from "react";
import Home from "../Pages/Home/Home";
import Admin from "../Pages/Admin/Admin"
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import { Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/admin" element={<Admin />} />
        <Route path ="/login" element={<Login />} />
        <Route path ="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Router;
