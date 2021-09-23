import React from 'react';
import Logo from '../header/logo';
import SocialMenu from '../footer/SocialMenu';
import TextContent from '../main-page/content';

function FooterContent({ title, text, socMenu }) {
  return (
    <div className="FooterContent flex-row">
      <TextContent title={title} text={text} />
      <Logo
        url={
          'https://static.vans.eu/ui/www/images/logos/logo.hash-6a49946697efd93990ed1c389cad00d5.svg'
        }
        text={'Hello Vans'}
      />
      <SocialMenu socMenu={socMenu} />
    </div>
  );
}

export default FooterContent;
