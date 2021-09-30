import React, { useState, useEffect } from 'react';
import Button from '../common-comp/Button';
import './css/catalogPage.css';
import DropdownItem from './catalogPage/Dropdown-item';
import CatalogItem from './catalogPage/Catalog-item';
import {price, color, season} from '../../data/filters';
import {useData} from '../../context/Context';


function CatalogPage() {
  const {filters, setFilters, initialItems, sortedItems, filterItems} = useData();
  const handleSelect = ({name, selectedOption}) => {
    setFilters({...filters, [name]:selectedOption})
  }

  const handleButton = () => {
    let products = JSON.parse(JSON.stringify(initialItems));
    if(filters.season !== 'all seasons'){
      products = products.filter((el) => el.season === filters.season)
    }
    if(filters.color !== 'all colors'){
      products = products.filter((el) => el.color === filters.color )
    }
    if(filters.price === 'cheap => expensive'){
      products.sort((a, b) => a.price - b.price)
    }else{
      products.sort((a, b) => b.price - a.price)
    }
    // setMapedItems(products)
    filterItems(products);
  }

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
          {sortedItems.map((el) => (
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
              el={el}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default CatalogPage;
