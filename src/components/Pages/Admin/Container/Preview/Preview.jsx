import React from "react";
import "./Preview.css";

const Preview = ({ data }) => {
  return (
    <div className="preview">
      <div className="preview-card">
        <div className="img">
          <img src={data.url} alt="" />
        </div>
        <div className="card-description">
          <h3>{data.title}</h3>
          <h5>
            Title description, <span></span>
          </h5>
          <p>{data.desc}</p>
          <div className="card-bottom">
            <button>READ MORE</button>
            <p>
              Comments <span>0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
