import React from 'react';

function Logo(props) {
  return <img src={props.url} alt={props.text} height={props.height} />;
}

export default Logo;
