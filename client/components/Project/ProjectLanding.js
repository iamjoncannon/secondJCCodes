import React from "react";
import Media from 'react-media'
import Project from './Project'

const projects = require('./projects.json')

const ProjectLanding = () => {
    window.scrollTo(0, 0);

    return (

        <div id="docs-container">

            <div id="documentation-container" className="form-style">
                
                <h1 id="projects-title">  🔧 Projects 🔧  </h1>
                
                { projects.map(thisProject => <Project key={thisProject.id} project={thisProject}/> 
                        
                ) }
                
            </div>
        </div>
        
    )
}

export default ProjectLanding