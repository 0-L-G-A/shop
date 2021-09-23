import React from 'react';

function SocMenuItem(props) {
  return (
    <li class={props.favicon}>
      <a target="_blank" alt={props.text} href={props.link}></a>
    </li>
  );
}

export default SocMenuItem;
