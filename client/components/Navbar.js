import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className="nav">

        <div className="nav-left">

        <Link className="nav-link" to="/" style={{ textDecoration: 'none' }}>

          <div id="nav-fader" />
          <h1>joncannon.codes</h1>
        </Link>

        </div>
        <div id="nav-right">
          <Link className="nav-link" to="/projects" style={{ textDecoration: 'none' }}>Projects</Link>          
          <a href="https://github.com/iamjoncannon" target="_blank" ><i id="github-logo" className="fab fa-github fa-2x" /></a>
        </div>
      </div>
    );
  }
}
