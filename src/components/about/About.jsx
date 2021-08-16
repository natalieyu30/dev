import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-wrap">
        <h1 className="title">About Me</h1>
        <div className="bio-wrap">
          <div className="left">
            <h3>BIO</h3>
            <p>
              I am a self-taught and highly motivated developer currently
              located in Niagara Falls, ON. I enjoy learning about emerging
              technologies and have a passion for web development. I am
              currently cultivating my knowlege base and pursuing a career in
              this field.
            </p>
          </div>
          <div className="right">
            <div className="img-container">
              <img src="assets/nat1.jpeg" alt="natalie yu" />
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skill">
            <h3>HTML/CSS/JavaScript</h3>
            <img src="assets/code/html.svg" alt="" />
            <div className="text">
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
            </div>
          </div>
          <div className="skill">
            <h3>React/Next.js</h3>
            <img src="assets/code/react.svg" alt="" />
            <div className="text">
              <p>React</p>
              <p>Next.js</p>
            </div>
          </div>
          <div className="skill">
            <h3>Node.js/Express</h3>
            <img src="assets/code/backend.svg" alt="" />
            <div className="text">
              <p>Node.js</p>
              <p>Express</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
