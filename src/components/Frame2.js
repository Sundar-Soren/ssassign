import React from "react";
import "./Frame2.scss";
import thumbnail from "../assets/thumnail.png";
const Frame2 = () => {
  return (
    <div className="Frame2">
      <div className="Frame2_container">
        <div className="Frame2_heading">
          <h1>
            RIGHT PLACE. RIGHT TIME. <br /> RIGHT CONVERSATION.
          </h1>
          <h2>
            Give your customers that warm, personalized feeling with every
            conversation, day or night.
          </h2>
        </div>
        <img src={thumbnail} alt="" />
      </div>
    </div>
  );
};

export default Frame2;
