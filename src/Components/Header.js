import React from 'react';
import "./Headers.css";
import headerLogp from '../Image/HeaderLogo.png';

export default function Header() {
  return (
    <div className='headerBody'>
        <div>
        <img src={headerLogp} className="homeImg"></img>
        </div>
    </div>
  )
}
