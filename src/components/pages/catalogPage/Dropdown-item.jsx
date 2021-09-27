import React from 'react';

function DropdownItem({handleSelect, name, clsName, options}){
    return(
        <select onChange={(e) => handleSelect({selectedOption: e.target.value, name})} name={name} className={clsName}>
            {options.map((el) => <option key={el.value} value={el.val}>{el.name}</option>)}
        </select>
    )
}

export default DropdownItem;