import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";

const Post = ({ data, maxCharas = 150 }) => {
  const [expanded, setExpanded] = useState(false);

  const text = data.desc;

  // Truncate the text at the end of a sentence if it exceeds the character limit
  const truncatedText = () => {
    if (text.length > maxCharas) {
      const lastPeriodIndex = text.lastIndexOf(".", maxCharas);
      return lastPeriodIndex !== -1 ? text.substring(0, lastPeriodIndex + 1) : text.substring(0, maxCharas);
    }
    return text;
  };

  return (
    <div>
      <div className="main-card" key={data.id}>
        <div className="img">
          <img src={data.url} alt="" />
        </div>
        <div className="card-description">
          <h3>{data.title}</h3>
          <h5>
            Title description,{" "}
            <span>
              Posted {formatDistanceToNow(data.timestamp, { addSuffix: true })}
            </span>
          </h5>
          <p>{expanded ? text : truncatedText()}</p>
          <div className="card-bottom">
            <button onClick={() => setExpanded(!expanded)}>
              {expanded ? "READ LESS<<" : "READ MORE>>"}
            </button>
            <p>
              Comments <span>0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
