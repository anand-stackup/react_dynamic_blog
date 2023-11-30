import React from "react";
import "./SideList.css";

const SideList = () => {
  const listData = [
    {
      id: 1,
      img: "https://www.w3schools.com/w3images/workshop.jpg",
      title: "Lorem",
      desc: "Sed mattis nunc",
    },
    {
      id: 2,
      img: "https://www.w3schools.com/w3images/gondol.jpg",
      title: "Ipsum",
      desc: "Praes tinci sed",
    },
    {
      id: 3,
      img: "https://www.w3schools.com/w3images/skies.jpg",
      title: "Dorum",
      desc: "Ultricies congue",
    },
    {
      id: 4,
      img: "https://www.w3schools.com/w3images/rock.jpg",
      title: "Mingsum",
      desc: "Lorem ipsum dipsum",
    },
  ];

  return listData.map((data) => (
        <li className="list" key={data.id}>
          <img src={data.img} alt="" />
          <div className="list-desc">
            <h6>{data.title}</h6>
            <p>{data.desc}</p>
          </div>
        </li>
  ));
};

export default SideList;
