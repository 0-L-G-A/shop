import React from 'react';

function MenuItem(props) {
  return (
    <li>
      <a href={props.text}>{props.text}</a>
    </li>
  );
}

export default MenuItem;
