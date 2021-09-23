import React from 'react';
import SocMenuItem from './SocialMenuItem';

function SocialMenu(props) {
  const socMenu = [
    {
      favicon: 'fa fa-facebook',
      text: 'facebook social media link',
      link: 'https://www.facebook.com/',
    },
    {
      favicon: 'fa fa-twitter',
      text: 'twitter social media link',
      link: 'https://www.twitter.com/',
    },
    {
      favicon: 'fa fa-linkedin',
      text: 'linkedin social media link',
      link: 'https://www.linkedin.com/',
    },
    {
      favicon: 'fa fa-google',
      text: 'google social media link',
      link: 'https://www.google.com/',
    },
  ];

  const listItems = socMenu.map((el) => {
    return <SocMenuItem favicon={el.favicon} text={el.text} link={el.link} />;
  });

  return <ul>{listItems}</ul>;
}

export default SocialMenu;
