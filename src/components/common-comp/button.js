import React from 'react';

function Button({clsName, val}){
    return(
        <button className={clsName}>{val}</button>
    )
}

export default Button;