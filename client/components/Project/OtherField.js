import React from "react";

const OtherField = (props) => {

    const field  = Object.entries(props.field)[0]
    
    return (
        <div className={"projects-landing-list-bottom-item"}>
            
            <a href={field[1]} target="_blank"> {field[0]} </a>
        </div>
    )
}

export default OtherField