import React, { useState, useEffect } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { webPortfolio, mobilePortfolio, featuredPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);

  const list = [
    { id: "web", title: "Web App" },
    { id: "mobile", title: "Mobile App" },
    { id: "featured", title: "Featured" },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "featured":
        setData(featuredPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
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
          <a
            href={d.site}
            target="_blank"
            rel="noreferrer"
            className="item"
            key={d.id}
          >
            <img src={d.img} alt={d.title} />
            <h3>{d.title}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
