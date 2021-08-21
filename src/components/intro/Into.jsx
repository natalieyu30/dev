import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";
import { KeyboardArrowDown } from "@material-ui/icons";

export default function Into() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      loop: false,
      cursorChar: "_",
      strings: ["Web Developer, Programmer & Designer"],
    });
    // console.log(textRef.current);
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="intro-img">
        <img src="./assets/flower3.jpg" alt="" />
      </div>
      <div className="left">
        <h1>Natalie Yu</h1>
        <h2>
          <span ref={textRef}></span>
        </h2>
        <p>
          Dedicated to creating responsive & accessible internet experiences for
          all.
        </p>
      </div>
      <div className="right">
        <a href="#about" className="link">
          <KeyboardArrowDown style={{ fontSize: 80 }} className="icon" />
        </a>
      </div>
    </div>
  );
}
