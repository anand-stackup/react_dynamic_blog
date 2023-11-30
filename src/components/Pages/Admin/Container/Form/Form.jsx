import React, { useState } from "react";
import Preview from "../Preview/Preview";
import axios from 'axios';
import "./Form.css";

const Form = () => {
  let initData = { url: "", title: "", desc: "", timestamp: Date.now() };

  let [data, setData] = useState(initData);

  let inputData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  let postData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4000/api/blogs", data)
    .then((res) => {
      console.log(res.data);
      if(res.status){
        clearForm()
      }
    })
    .catch((error) => {
      console.error(error);
    })
  }

  function clearForm() {
    document.getElementById('form').reset();
  }

  // const removeTokenFromLocalStorage = () => {
  //   localStorage.removeItem("Authorization");
  // };

  return (
    <div className="form">
      <form action="" id="form">
        <input
          type="text"
          name="url"
          placeholder="Blog image url"
          onChange={inputData}
        />
        <input
          type="text"
          name="title"
          placeholder="Blog title"
          onChange={inputData}
        />
        <label htmlFor="desc">Blog Description</label>
        <textarea
          id="desc"
          name="desc"
          rows="10"
          onChange={inputData}
        ></textarea>
        <button onClick={postData}>POST</button>
        {/* <button onClick={removeTokenFromLocalStorage}>LOGOUT</button> */}
      </form>

      <Preview data={data} />
    </div>
  );
};

export default Form;
