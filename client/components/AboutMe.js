import React from "react";
import DocumentationText from "./DocumentationText";
import Media from 'react-media'
import { Link } from 'react-router-dom'

const Documentation = () => {
  window.scrollTo(0, 0);
  
  return (
    <div id="docs-container">
        <div id="documentation-container" className="form-style">
            <div id="docs-about-me-text">

                Jonathan Cannon is a software engineer living and working in Brooklyn, NY. 
                He holds a Bachelor's Degree in Political Science from the University of Chicago. 
                <p>He has previously spoken at the <a href="https://www.meetup.com/ReactNYC/events/260124464/" className="docs-about-me-link">React NYC meetup</a> on the <a href="https://www.npmjs.com/package/redux-genie" className="docs-about-me-link">Redux-Genie npm package</a>, 
                and in the summer of 2019 worked as a Developer Intern at Critical Mass, a global digital agency. </p>
                <p>In his free time, he <a href="https://globally.ltd/4" className="docs-about-me-link">makes tunes</a>, <span>and </span>   
          <Link  to="/technology" style={{color: "black" }}>
                    <span>nerds out</span>
          </Link>    
          <span> with React, Python, Golang, and other software.</span>     
                </p>
            </div>
        </div>
    </div>
  );
};

export default Documentation;
