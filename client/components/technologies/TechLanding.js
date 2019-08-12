import React from "react";
import TechBox from './TechBox' 
const technologies = require('./technologies.json')

const TechLanding = () => {
    window.scrollTo(0, 0);

    return (

        <div id="docs-container">

            <div id="documentation-container" className="form-style">
                
                <h1 id="projects-title">  ⚙️Technologies⚙️  </h1>
                
                <div id="tech-list">

                    { technologies.map(thisTech => <TechBox key={thisTech.id} thisTech={thisTech}/> 
                            
                    ) }  
                </div>
            </div>
        </div>
    )
}

export default TechLanding