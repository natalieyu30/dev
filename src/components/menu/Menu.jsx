import React from "react";
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={menuOpen ? "menu active" : "menu"}>
      <div className="img-self">
        <img src="./assets/nat1.jpeg" alt="" />
      </div>
      <ul>
        <li className="nav-item" onClick={() => setMenuOpen(false)}>
          <a href="#intro" className="link">
            Home
          </a>
        </li>
        <li className="nav-item" onClick={() => setMenuOpen(false)}>
          <a href="#about" className="link">
            About Me
          </a>
        </li>
        <li className="nav-item" onClick={() => setMenuOpen(false)}>
          <a href="#portfolio" className="link">
            Portfolio
          </a>
        </li>
        <li className="nav-item" onClick={() => setMenuOpen(false)}>
          <a href="#contact" className="link">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
