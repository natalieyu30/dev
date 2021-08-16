import React from "react";
import "./portfolioList.scss";

export default function PortfolioList({ id, title, setSelected, active }) {
  return (
    <li
      className={active ? "portfolio-list active" : "portfolio-list"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
