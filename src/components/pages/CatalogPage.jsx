import React, { useState, useEffect } from 'react';
import Button from '../common-comp/Button';
import './css/catalogPage.css';
import DropdownItem from './catalogPage/Dropdown-item';
import CatalogItem from './catalogPage/Catalog-item';
import {price, color, season} from '../../data/filters';
import { items } from '../../data/items';

function CatalogPage() {
  const [mapedItems, setMapedItems] = useState(items);
  const [activeFilters, setActiveFilters] = useState({
    season: 'all seasons',
    color: 'all colors',
    price: 'cheap => expensive'
  })
  const handleSelect = ({name, selectedOption}) => {
    setActiveFilters({...activeFilters, [name]:selectedOption})
  }

  const handleButton = () => {
    let products = JSON.parse(JSON.stringify(items));
    if(activeFilters.season !== 'all seasons'){
      products = products.filter((el) => el.season === activeFilters.season)
    }
    if(activeFilters.color !== 'all colors'){
      products = products.filter((el) => el.color === activeFilters.color )
    }
    if(activeFilters.price === 'cheap => expensive'){
      products.sort((a, b) => a.price - b.price)
    }else{
      products.sort((a, b) => b.price - a.price)
    }
    setMapedItems(products)
  }
  useEffect(() => {
    setMapedItems(items)
  },[])
  return (
    <main>
      <div className="container">
        <div className="filter-menu">
          <div className="filters">
            <DropdownItem
              handleSelect={handleSelect}
              name={'price'}
              clsName={'dropdown'}
              options={price}
            />
            <DropdownItem
            handleSelect={handleSelect}
              name={'season'}
              clsName={'dropdown'}
              options={season}
            />
            <DropdownItem
            handleSelect={handleSelect}
              name={'color'}
              clsName={'dropdown'}
              options={color}
            />
          </div>
          <Button clsName={'white-btn btn'} val={'Apply'} onClick={handleButton}/>
        </div>
        <div className="catalog-items-wrapper">
          {mapedItems.map((el) => (
            <CatalogItem
              nameItem={el.nameItem}
              imgSrc={el.imgSrc}
              imgAlt={el.imgAlt}
              contentTitle={el.contentTitle}
              contentText={el.contentText}
              currency={el.currency}
              price={el.price}
              clsNameBtn={el.clsNameBtn}
              valBtn={el.valBtn}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default CatalogPage;
