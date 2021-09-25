import React from "react";

function TextContent({title, text}){
    return(
        <div className="content">
        <div className="title">{title}</div>
        <div className="text">{text}</div>
      </div>
    )
}

export default TextContent;