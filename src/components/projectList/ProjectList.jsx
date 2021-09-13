import React from "react";
import "./projectList.scss";

export default function ProjectList({ id, title, setSelected, active }) {
  return (
    <li
      className={active ? "portfolio-list active" : "portfolio-list"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
