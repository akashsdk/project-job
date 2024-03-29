import React, { useState } from "react";
import "./Headers.css";
import headerLogp from "../Image/HeaderLogo.png";
import profileImg from "../Image/profile.png";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div className="headerBody">
      <div className="headerBox">
        <img src={headerLogp} className="headerImg" />

        <div>
          <div>
            <nav className="navigation">
              <a href="/" className="brand-name">
                <h1>Idea</h1>
              </a>
              <button
                className="hamburger"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                {/* icon from Heroicons.com */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div style={{
                marginTop:'20px',
                marginLeft:'20%'
              }}>
                <div
                  className={
                    isNavExpanded
                      ? "navigation-menu expanded"
                      : "navigation-menu"
                  }
                >
                  <ul>
                    <li>
                      <a href="/">
                        {" "}
                        <h3 style={{ color: "#fff" }}>Home</h3>
                      </a>
                    </li>
                    <li>
                      <a href="/about">
                        <h3 style={{ color: "#fff" }}>About</h3>
                      </a>
                    </li>
                    <li>
                      <a href="/contact">
                        <h3 style={{ color: "#fff" }}>Work</h3>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <img src={profileImg} className="headerImg2" />
      </div>
    </div>
  );
}
