import React, { useState, useEffect } from 'react';
import Button from '../common-comp/Button';
import './css/catalogPage.css';
import DropdownItem from './catalogPage/Dropdown-item';
import CatalogItem from './catalogPage/Catalog-item';

function CatalogPage() {
  const [price] = useState([
    {
      val: 'cheapToExpensive',
      name: 'cheap => expensive',
    },
    {
      val: 'expensiveToCheap',
      name: 'expensive => cheap',
    },
  ]);
  const [season] = useState([
    {
      val: 'allSeasons',
      name: 'all seasons',
    },
    {
      val: 'winter',
      name: 'winter',
    },
    {
      val: 'demiSeason',
      name: 'demi-season',
    },
    {
      val: 'summer',
      name: 'summer',
    },
  ]);
  const [color] = useState([
    {
      val: 'allColors',
      name: 'all colors',
    },
    {
      val: 'multicolor',
      name: 'multicolor',
    },
    {
      val: 'grey',
      name: 'grey',
    },
    {
      val: 'black',
      name: 'black',
    },
  ]);
  const [items] = useState([
    {
      nameItem: 'Shoes',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0419/1525/files/2800x1080-Women-Combat-Black-1_800x533_crop_right.jpg?v=1603303506',
      imgAlt: 'boots',
      contentTitle: 'Winter boots',
      contentText: 'comfortable, waterproof winter boots',
      currency: '$',
      price: '150',
      clsNameBtn: 'black-btn btn',
      valBtn: 'View more',
      color: "black",
      season: 'demi-seazon'
    },
    {
      nameItem: 'Shoes',
      imgSrc:
        'https://www.supershoes.com/common/images/categories/Womens-Dress-header-mobile.jpg',
      imgAlt: 'boots',
      contentTitle: 'Shoes for women',
      contentText: 'uncomfortable, cheap, high-heeled shoes',
      currency: '$',
      price: '30',
      clsNameBtn: 'black-btn btn',
      valBtn: 'View more',
      color: "black",
      season: 'summer'
    },
    {
      nameItem: 'Shoes',
      imgSrc:
        'https://images.ua.prom.st/2873552968_w640_h640_2873552968.jpg',
      imgAlt: 'boots',
      contentTitle: 'Sneakers',
      contentText: 'the most comgortable sneakers in the world',
      currency: '$',
      price: '100',
      clsNameBtn: 'black-btn btn',
      valBtn: 'View more',
      color: "multicolor",
      season: 'demi-seazon'
    },
    {
      nameItem: 'Shoes',
      imgSrc:
        'https://www.gannett-cdn.com/presto/2020/11/27/USAT/0cafc0d7-0c4c-4be6-b83e-bd62229f04a2-21.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp',
      imgAlt: 'boots',
      contentTitle: 'Winter boots',
      contentText: 'cheap, warm, comfortable autumn boots',
      currency: '$',
      price: '80',
      clsNameBtn: 'black-btn btn',
      valBtn: 'View more',
      color: "grey",
      season: 'winter'
    },
  ]);
  const [activeFilters, setActiveFilters] = useState({
    season: 'allSeason',
    color: 'allColors',
    price: 'cheapToExpensive'
  })
  const handleSelect = ({name, selectedOption}) => {
    setActiveFilters({...activeFilters, [name]:selectedOption})
  }

  // useEffect(() => {
  //   items.filter((el) => {
  //     el
  //   })
  // },[activeFilters])

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
          <Button clsName={'white-btn btn'} val={'Apply'} />
        </div>
        <div className="catalog-items-wrapper">
          {items.map((el) => (
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
