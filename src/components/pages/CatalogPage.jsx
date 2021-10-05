import React, { useState, useEffect } from 'react';
import Button from '../common-comp/Button';
import './css/catalogPage.css';
import DropdownItem from './catalogPage/Dropdown-item';
import CatalogItem from './catalogPage/Catalog-item';
import {price, color, season} from '../../data/filters';
import {useData} from '../../context/Context';
import axios from 'axios';


function CatalogPage() {
  const {filters, setFilters, items, setItems} = useData();
  
  useEffect(() => {
    axios.get("http://localhost:3001/", {params: filters}).then((response) => setItems(response.data.products))
  }, [])

  const handleSelect = ({name, selectedOption}) => {
    setFilters({...filters, [name]:selectedOption})
  }

  const handleButton = async () => {
    const data = await axios.get("http://localhost:3001/", {params: filters})
    setItems(data.data.products);
    return data.data.products;
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
          {items ? items.map((el) => (
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
          )) : <h1>Loader...</h1>}
        </div>
      </div>
    </main>
  );
}

export default CatalogPage;
