import React from 'react';
import Logo from '../header/logo';
import SocialMenu from '../footer/SocialMenu';
import TextContent from '../main-page/content';

function FooterContent({ title, text, socMenu }) {
  return (
    <div className="FooterContent">
      <Logo url={'https://placekitten.com/g/64/64'} text={'Hello Kitty'} />
      <SocialMenu socMenu={socMenu} />
      <TextContent title={title} text={text} />
    </div>
  );
}

export default FooterContent;
