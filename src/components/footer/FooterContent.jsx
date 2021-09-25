import React from 'react';
import Logo from '../common-comp/Logo';
import Menu from '../menu/Menu';
import TextContent from '../common-comp/Content';

function FooterContent({ title, text, menuData }) {
  return (
    <div className="FooterContent flex-row">
      <TextContent title={title} text={text} />
      <Logo
        url={
          'https://static.vans.eu/ui/www/images/logos/logo.hash-6a49946697efd93990ed1c389cad00d5.svg'
        }
        text={'Hello Vans'}
        height="50px"
      />
      <Menu data={menuData} />
    </div>
  );
}

export default FooterContent;
