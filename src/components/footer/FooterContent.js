import React from 'react';
import Logo from '../header/logo';
import import Menu from '../menu/Menu';
import TextContent from '../common-comp/content';


function FooterContent({ title, text, Menu }) {
  return (
    <div className="FooterContent flex-row">
      <TextContent title={title} text={text} />
      <Logo
        url={
          'https://static.vans.eu/ui/www/images/logos/logo.hash-6a49946697efd93990ed1c389cad00d5.svg'
        }
        text={'Hello Vans'}
      />
      {/* <Menu /> */}
    </div>
  );
}

export default FooterContent;
