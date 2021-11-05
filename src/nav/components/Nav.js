import React, {useRef, useEffect} from "react";
import { navLinks } from "./NavData";
import avatar from "../../Asset/man-156584.svg";
import "../styles/nav.css";
import useGlobalContext from "../../Context";
// import {Link} from "react-router-dom";

function Nav () {
  const {showMenu, setShowMenu} = useGlobalContext();

  const containerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const menuHeight = menuRef.current.getBoundingClientRect().height;

    if(showMenu) {
      containerRef.current.style.height = `${menuHeight}px`;
    } else {
      containerRef.current.style.height = 0;
    }
  })

  return (
    <header className="page-header">
      <nav className="nav-bar">
        <div className="nav-brand">
          <div className="nav-img">
            <img src={avatar} alt="Avatar" className="avatar img-fluid" />
          </div>
          <button className="nav-btn" onClick={() => setShowMenu(prev => !prev)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0V0z"/>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>
        </div>
        <div className="nav-link-container" ref={containerRef}>
          <ul className="nav-list" ref={menuRef}>
            {
              navLinks.map((link, ind) => {
              
                return (
                  <li className="nav-item" key={ind}>
                    {/* <Link>  </Link> */}
                    <a href="/" className="nav-link">{link}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav;