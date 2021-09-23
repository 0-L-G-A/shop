import React from 'react';
import FooterCopyright from './FooterCopyright';
import FooterContent from './FooterContent';

function Footer() {
  const data = {
    title: 'Branding Stuff',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  };

  return (
    <div className="container">
      <div className="footer">
        <FooterContent title={data.title} text={data.text} />
        <FooterCopyright />
      </div>
    </div>
  );
}

export default Footer;
