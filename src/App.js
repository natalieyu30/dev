import { useState, useEffect } from "react";

import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Into";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
// import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  // const [currentPage, setCurrentPage] = useState("home");
  const [navBg, setNavBg] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  window.addEventListener("resize", () => setWidth(window.innerWidth));
  useEffect(() => {
    if (width < 980) {
      setMenu(true);
      setMenuOpen(false);
    } else {
      setMenu(false);
    }
  }, [width]);

  const handleScroll = (e) => {
    if (e.target.scrollTop < 781) {
      // setCurrentPage("home");
      setNavBg(false);
      // } else if (e.target.scrollTop > 781 && e.target.scrollTop < 1583) {
      //   setCurrentPage("about");
      //   setNavBg(true);
      // } else if (e.target.scrollTop > 1573 && e.target.scrollTop < 2485) {
      //   setCurrentPage("projects");
      //   setNavBg(true);
    } else {
      // setCurrentPage("contact");
      setNavBg(true);
    }
  };
  return (
    <div className="app">
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menu={menu}
        navBg={navBg}
        // currentPage={currentPage}
      />

      {menu && <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
      <div className="sections" onScroll={handleScroll}>
        <Intro />
        <About />
        <Projects />
        {/* <Works /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
