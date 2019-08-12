import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">

        <div className="nav-left">

        <Link className="nav-link" to="/" style={{ textDecoration: 'none' }}>

          <h1><span className="nav-desktop"> 🖖</span> joncannon.codes <span className="nav-desktop"> 🖖</span></h1>
          <div id="nav-fader" />
        </Link>

        </div>
        <div id="nav-right">
          <span className="nav-mobile-vulcan">🖖</span>
          <Link className="nav-link nav-desktop nav-link-right" to="/aboutme" style={{ order: "1", textDecoration: 'none' }}>About</Link>          
          <Link className="nav-link nav-link-right nav-projects" to="/projects" style={{ order: "2", textDecoration: 'none' }}>Projects</Link>          
          <Link className="nav-link nav-desktop nav-link-right" to="/technology" style={{ order: "3", textDecoration: 'none' }}>Technologies</Link>          
          <a href="https://github.com/iamjoncannon" target="_blank" style={{order: "5"}}><i id="logo" className="fab fa-github fa-2x nav-link-right nav-desktop" /></a>
          <a href="https://www.linkedin.com/in/iamjoncannon/" target="_blank" style={{order: "6"}}><i id="logo" className="fab fa-linkedin fa-2x nav-link-right nav-desktop" /> </a>
          <a href="https://globally.ltd/4" target="_blank" style={{order: "7"}}><img src="https://jayceecodesphotos.s3.amazonaws.com/globallyLTD.jpg" className="fab nav-link-right nav-desktop nav-icon-globally"/></a>
        </div>
      </div>
    );
  }
}
