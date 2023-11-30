import React from "react";
import SideCard from "./SideCard";
import SideList from "./SideList";
import SideTags from "./SideTags";
import "./SideCardContainer.css";

const SideCardContainer = () => {
  return (
    <div className="side-card-container">
      <SideCard />
      <div className="side-list">
        <div className="list-title">
          <h4>Popular Posts</h4>
        </div>
        <ul>
        <SideList />
        </ul>
      </div>
      <div className="side-list">
        <div className="list-title">
          <h4>Tags</h4>
        </div>
        <div className="tags">
        <SideTags />
        </div>
      </div>
    </div>
  );
};

export default SideCardContainer;
