import React from "react";
import "./Frame1.scss";
const Frame1 = () => {
  return (
    <div className="Frame1">
      <div className="heading">
        <h1>IT ALL </h1>
        <h1>STARTS WITH A</h1>
        <h1 className="lastH">CONVERSATION.</h1>
      </div>
      <div className="section1">
        <div className="section1_container">
          <div className="left">
            <h1>
              Drift’s Conversation Cloud{" "}
              <span>
                {" "}
                helps your marketing, sales, and customer teams easily connect
                with customers through conversations that build trust and grow
                revenue.
              </span>
            </h1>
            <button>Let's Talk</button>
          </div>
          <div className="right">
            <img
              src="https://www.drift.com/wp-content/uploads/2022/03/homepage-reg2-web.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
