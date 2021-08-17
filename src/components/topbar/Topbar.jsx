import React, { useState, useEffect } from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  // const [isScrolled, setIsScrolled] = useState(false);

  // window.onscroll = () => {
  //   setIsScrolled(window.pageYOffset === 0 ? false : true);
  //   return () => (window.onscroll = null);
  // };

  // console.log(isScrolled);

  // useEffect(() => {
  //   console.log(window.pageYOffset);
  // }, []);

  return (
    <div className={menuOpen ? "topbar active" : "topbar"}>
      <div className="wrapper">
        <div className="left">
          <a
            href="#intro"
            className="link logo"
            onClick={() => setMenuOpen(false)}
          >
            <img src="./assets/natdev_pk.png" alt="" />
          </a>
          <div className="item-container">
            <Person style={{ fontSize: 18 }} />
            <span>+1 289 696 0360</span>
          </div>
          <div className="item-container">
            <Mail style={{ fontSize: 18 }} />
            <span>natalieyu30@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
