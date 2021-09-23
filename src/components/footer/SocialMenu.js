import React from 'react';
import SocMenuItem from './SocialMenuItem';

function SocialMenu(props) {
  return (
    <ul>
      <SocMenuItem text="facebook" />
      <SocMenuItem text="twitter" />
      <SocMenuItem text="linkedin" />
      <SocMenuItem text="google plus" />
    </ul>
  );
}

export default SocialMenu;
