import React from "react";
import "./SideTags.css";

const SideTags = () => {
  const tagData = [
    {
      id: 1,
      tag: "Travel",
    },
    {
      id: 2,
      tag: "New York",
    },
    {
      id: 3,
      tag: "London",
    },
    {
      id: 4,
      tag: "IKEA",
    },
    {
      id: 5,
      tag: "NORWAY",
    },
    {
      id: 6,
      tag: "DIY",
    },
    {
      id: 7,
      tag: "Ideas",
    },
    {
      id: 8,
      tag: "Baby",
    },
    {
      id: 9,
      tag: "Family",
    },
    {
      id: 10,
      tag: "News",
    },
    {
      id: 11,
      tag: "Clothing",
    },
    {
      id: 12,
      tag: "Shopping",
    },
    {
      id: 13,
      tag: "Sports",
    },
    {
      id: 14,
      tag: "Games",
    },
  ];

  return tagData.map((data) => (
      <span key={data.id}>{data.tag}</span>
  ));
};

export default SideTags;
