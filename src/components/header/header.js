import React from 'react';
import HeaderMenu from './menu';
import HeaderLogo from './logo';

function Header(headerData) {
  return (
    <div className="header container flex-row">
      <HeaderMenu />
      <HeaderLogo
        url={
          'https://static.vans.eu/ui/www/images/logos/logo.hash-6a49946697efd93990ed1c389cad00d5.svg'
        }
        text={'Hello Vans'}
      />
      <HeaderMenu />
    </div>
  );
}

export default Header;
