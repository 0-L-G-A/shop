import React from 'react';
import Menu from '../menu/Menu';
import Logo from '../common-comp/Logo';
import { useLocation } from 'react-router-dom';
import {headerMenuData} from '../../data/headerMenuData';
import {useData} from '../../context/Context';

function Header(props) {
  let location = useLocation();
  const {filterItems, initialItems} = useData();
  
  const handleSearch = (value) => {
    let filtered = initialItems.filter((item) => (item.contentTitle).includes(value) || (item.contentText).includes(value))
    filterItems(filtered);
    // console.log(filtered)
    
  }
  return (
    <div className="header container flex-row">
      <Logo
        url={
          'https://static.vans.eu/ui/www/images/logos/logo.hash-6a49946697efd93990ed1c389cad00d5.svg'
        }
        text={'Hello Vans'}
        height="50px"
      />
      {location.pathname === '/catalog' ? 
      <input className="search" type="search" placeholder="🔎" onChange={(event) => handleSearch(event.target.value)}></input> : 
      null}
      <Menu data={headerMenuData} />
    </div>
  );
}

export default Header;
