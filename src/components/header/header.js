import React from 'react';
import Menu from '../menu/Menu';
import Logo from './Logo';

function Header(headerData) {
  const headerMenuData = [
    {
      liClass: 'fa fa-facebook',
      altText: 'facebook social media link',
      hrefUrl: 'https://www.facebook.com/',
    },
    {
      liClass: 'fa fa-twitter',
      altText: 'twitter social media link',
      hrefUrl: 'https://www.twitter.com/',
    },
    {
      liClass: 'fa fa-linkedin',
      altText: 'linkedin social media link',
      hrefUrl: 'https://www.linkedin.com/',
    },
    {
      liClass: 'fa fa-google',
      altText: 'google social media link',
      hrefUrl: 'https://www.google.com/',
    },
  ];

  return (
    <div className="header container flex-row">
      <Logo
        url={
          'https://static.vans.eu/ui/www/images/logos/logo.hash-6a49946697efd93990ed1c389cad00d5.svg'
        }
        text={'Hello Vans'}
      />
    </div>
  );
}

export default Header;
