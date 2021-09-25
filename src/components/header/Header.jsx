import React from 'react';
import Menu from '../menu/Menu';
import Logo from '../common-comp/Logo';

function Header(props) {
  const headerMenuData = [
    {
      liClass: '',
      altText: 'Home page link',
      hrefUrl: '/',
      atext: 'Home',
    },
    {
      liClass: '',
      altText: 'Catalog link',
      hrefUrl: '/catalog',
      atext: 'Catalog',
    },
    {
      liClass: '',
      altText: 'Cart link',
      hrefUrl: '/cart ',
      atext: 'Cart',
    },
  ];

  return (
    <div className="header container flex-row">
      <Logo
        url={
          'https://static.vans.eu/ui/www/images/logos/logo.hash-6a49946697efd93990ed1c389cad00d5.svg'
        }
        text={'Hello Vans'}
        height="50px"
      />
      <Menu data={headerMenuData} />
    </div>
  );
}

export default Header;
