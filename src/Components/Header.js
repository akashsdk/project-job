import React from "react";
import "./Headers.css";
import headerLogp from "../Image/HeaderLogo.png";

export default function Header() {
  return (
    <div className="headerBody">
      <div className="headerBox">
        <img src={headerLogp} className="headerImg" />
        <h1 style={{
            color:'white',
            marginLeft:'10px'
        }}>Idea</h1>
      </div>
    </div>
  );
}
