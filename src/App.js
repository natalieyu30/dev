import { useState } from "react";

import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Into";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
// import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        {/* <Works /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
