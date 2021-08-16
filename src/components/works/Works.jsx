import React, { useState } from "react";
import "./works.scss";
import {
  PhoneAndroid,
  ArrowBackIos,
  ArrowForwardIos,
} from "@material-ui/icons";
import { pink } from "@material-ui/core/colors";
import { worksData } from "../../data";

export default function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 2);
    }
    if (direction === "right") {
      setCurrentIndex(currentIndex < 2 ? currentIndex + 1 : 0);
    }
  };

  return (
    <div className="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {worksData.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <PhoneAndroid style={{ color: pink[400] }} fontSize="large" />
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Project</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <ArrowBackIos
        style={{
          color: pink[400],
          fontSize: 60,
          display: currentIndex === 0 ? "none" : "block",
        }}
        className="arrow-left"
        onClick={() => handleClick("left")}
      />
      <ArrowForwardIos
        style={{
          color: pink[400],
          fontSize: 60,
          display: currentIndex === 2 ? "none" : "block",
        }}
        className="arrow-right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
