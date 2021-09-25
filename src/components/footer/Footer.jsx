import React from 'react';
import FooterCopyright from './FooterCopyright';
import FooterContent from './FooterContent';

function Footer() {
  const footerMenuData = [
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
  const data = {
    title: 'Branding Stuff',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  };

  return (
    <div className="footer container flex-col">
      <FooterContent
        title={data.title}
        text={data.text}
        menuData={footerMenuData}
      />
      <FooterCopyright />
    </div>
  );
}

export default Footer;
