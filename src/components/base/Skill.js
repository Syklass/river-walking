import React from "react";

function Skill({img,name,points}) {
    return (  
        <div className="flex flex-col items-center justify-center">
            <img src={img} className="w-14 h-14"></img>
            <h1>{name}</h1>
            <h2>{points}/10</h2>
        </div>
    );
}

export default Skill;