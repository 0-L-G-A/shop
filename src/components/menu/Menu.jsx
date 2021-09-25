import React from 'react';

function Menu(props) {
  const links = props.data.map(function (el, i) {
    return (
      <li key={i} className={el.liClass}>
        <a href={el.hrefUrl} alt={el.altText}>
          {el.atext}
        </a>
      </li>
    );
  });
  return <ul>{links}</ul>;
}

export default Menu;
