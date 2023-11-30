import React from "react";
import MainCardContainer from "./MainCardContainer/MainCardContainer";
import SideCardContainer from "./SideCardContainer/SideCardContainer";
import "./Container.css"

const Container = () => {
  return (
    <div className='container'>
      <MainCardContainer />
      <SideCardContainer />
    </div>
  );
};

export default Container;
