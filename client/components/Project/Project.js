import React from "react";
import OtherField from './OtherField'

const Project = (props) => {

    const {project} = props

    return (
        <div className={"projects-landing-list"}>
              
                <span className={"projects-landing-list-title"}>{props.project.id}</span>
              
                <span className={"projects-landing-list-desc"}>{props.project.desc}</span>

                <span className={"projects-landing-list-desc"}><b>Technologies:</b> {props.project.Technologies}</span>
            
                <div className={"projects-landing-list-bottom-item"}>

                    <span>Codebase:</span>

                    <a href={props.project.GH_url} target="_blank"><i className="fab fa-github fa-3x projects-landing-list-img" /></a>
                </div>

                { project.other_fields.length > 0 ? project.other_fields.map( thisOtherField => <OtherField field={thisOtherField} />) : ""}
                        
        </div>
    )
}

export default Project
