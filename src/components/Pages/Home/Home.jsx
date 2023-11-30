import React from "react";
import Header from "../../Common/Header/Header";
import Container from "./Container/Container";
import Footer from "./Footer/Footer";

const Home = () => {
  const data = {
    title: "MY BLOG",
    desc: "Welcome to the blog of ",
    name: "Anand",
  };

  return (
    <div>
      <Header headerData= {data}></Header>
        <Container></Container>
      <Footer />
    </div>
  );
};

export default Home;
