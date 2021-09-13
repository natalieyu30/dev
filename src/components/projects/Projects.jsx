import React, { useState, useEffect } from "react";
import ProjectList from "../projectList/ProjectList";
import "./projects.scss";
import {
  jsPortfolio,
  reactPortfolio,
  nodePortfolio,
  mernPortfolio,
} from "../../data";
import { GitHub, OpenInNew } from "@material-ui/icons";

export default function Projects() {
  const [selected, setSelected] = useState("js");
  const [data, setData] = useState([]);

  const list = [
    { id: "js", title: "HTML/CSS/JS" },
    { id: "react", title: "React.js" },
    { id: "node", title: "Node/Express" },
    { id: "mern", title: "MERN" },
  ];

  useEffect(() => {
    switch (selected) {
      case "js":
        setData(jsPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "node":
        setData(nodePortfolio);
        break;
      case "mern":
        setData(mernPortfolio);
        break;
      default:
        setData(jsPortfolio);
    }
  }, [selected]);

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul className="filter">
        {list.map((item) => (
          <ProjectList
            key={item.id}
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="project">
            <div className="images">
              <img src={d.img[0]} alt={d.title} />
              <img src={d.img[1]} alt={d.title} className="second-img" />
            </div>
            <div className="info">
              <div>
                <h4>{d.title}</h4>
                <ul className="desc">
                  {d.desc.map((content, index) => (
                    <li key={index}>- {content}</li>
                  ))}
                </ul>
              </div>
              <div className="buttons">
                <a
                  href={d.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <GitHub style={{ fontSize: 18 }} />
                  GitHub
                </a>
                <a
                  href={d.site}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  View Site
                  <OpenInNew style={{ fontSize: 18 }} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
