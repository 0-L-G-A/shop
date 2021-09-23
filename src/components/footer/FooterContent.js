import React from 'react';
import Logo from '../header/logo';
import SocialMenu from '../footer/SocialMenu';

function FooterContent(props) {
  return (
    <div className="FooterContent">
      <Logo url={'https://placekitten.com/g/64/64'} text={'Hello Kitty'} />
      <SocialMenu />
    </div>
  );
}

export default FooterContent;
