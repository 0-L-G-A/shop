import React from 'react';

function DropdownItem({name, clsName, options}){
    return(
        <select name={name} className={clsName}>
            {options.map((el) => <option value={el.val}>{el.name}</option>)}
        </select>
    )
}

export default DropdownItem;