import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MainCard.css";
import Post from "./Post"

const MainCard = () => {
  const [userData, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/blogs")
    .then((res) => {
      console.log(res);
      setData(res.data)
    })
  },[])

  // console.log(userData);

  return userData.map((data) => (
    <Post data = {data}/>
  ));
};

export default MainCard;
