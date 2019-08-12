import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { UserCard, RepoCard } from 'react-github-cards';
import 'react-github-cards/dist/default.css';

const Landing = () => {
  window.scrollTo(0, 0);

  return (
    <div id="landing-container">

      <div id="landing-header">
        <span className="landing-item landing-text landing-title">👏jon👏cannon👏dot👏codes</span>
        <img src="https://jayceecodesphotos.s3.amazonaws.com/me.jpg" className="landing-photo" />
        
        <Link to="/aboutme" style={{textDecoration: 'none', color: "black", marginTop: "2vh" }}>

          <span className="landing-item"> <span className="landing-text landing-about-me">About Me</span></span>
        </Link>          
      
      </div>             
    </div>
  );
};

export default Landing;
