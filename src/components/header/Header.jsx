import React from 'react';
import Menu from '../menu/Menu';
import Logo from '../common-comp/Logo';
import { useLocation } from 'react-router-dom';
import {headerMenuData} from '../../data/headerMenuData';
import {useData} from '../../context/Context';
import axios from 'axios';

function Header(props) {
  let location = useLocation();
  const {setItems, filters} = useData();
  
  const handleSearch = async (value) => {
    const response = await axios.get("http://localhost:3001/items", {params: filters})
    let filtered = response.data.products.filter((item) => (item.contentTitle).includes(value) || (item.contentText).includes(value))
    setItems(filtered);
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
