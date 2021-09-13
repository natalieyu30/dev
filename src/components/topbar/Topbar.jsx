import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({
  menuOpen,
  setMenuOpen,
  menu,
  navBg,
  currentPage,
}) {
  if (navBg) {
    return (
      <div className={menuOpen ? "topbar active main-bg" : "topbar main-bg"}>
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
            {menu ? (
              <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            ) : (
              <ul className="nav-list">
                <li className="nav-item">
                  <a
                    href="#intro"
                    className={currentPage === "home" ? "link current" : "link"}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#about"
                    className={
                      currentPage === "about" ? "link current" : "link"
                    }
                  >
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#projects"
                    className={
                      currentPage === "projects" ? "link current" : "link"
                    }
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#contact"
                    className={
                      currentPage === "contact" ? "link current" : "link"
                    }
                  >
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  } else {
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
            {menu ? (
              <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            ) : (
              <ul className="nav-list">
                <li className="nav-item">
                  <a
                    href="#intro"
                    className={currentPage === "home" ? "link current" : "link"}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#about"
                    className={
                      currentPage === "about" ? "link current" : "link"
                    }
                  >
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#projects"
                    className={
                      currentPage === "projects" ? "link current" : "link"
                    }
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#contact"
                    className={
                      currentPage === "contact" ? "link current" : "link"
                    }
                  >
                    Contact
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
  // return (
  //   <div className={menuOpen ? "topbar active" : "topbar"}>
  //     <div className="wrapper">
  //       <div className="left">
  //         <a
  //           href="#intro"
  //           className="link logo"
  //           onClick={() => setMenuOpen(false)}
  //         >
  //           <img src="./assets/natdev_pk.png" alt="" />
  //         </a>
  //         <div className="item-container">
  //           <Person style={{ fontSize: 18 }} />
  //           <span>+1 289 696 0360</span>
  //         </div>
  //         <div className="item-container">
  //           <Mail style={{ fontSize: 18 }} />
  //           <span>natalieyu30@gmail.com</span>
  //         </div>
  //       </div>
  //       <div className="right">
  //         {menu ? (
  //           <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
  //             <span className="line1"></span>
  //             <span className="line2"></span>
  //             <span className="line3"></span>
  //           </div>
  //         ) : (
  //           <ul className="nav-list">
  //             <li className="nav-item">
  //               <a href="#intro" className="link current">
  //                 Home
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a href="#about" className="link">
  //                 About Me
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a href="#projects" className="link">
  //                 Projects
  //               </a>
  //             </li>
  //             <li className="nav-item">
  //               <a href="#contact" className="link">
  //                 Contact
  //               </a>
  //             </li>
  //           </ul>
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
}
