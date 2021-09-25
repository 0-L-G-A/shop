import React, { useState } from 'react';
import Button from '../common-comp/Button';
import './css/catalogPage.css';
import DropdownItem from './catalogPage/Dropdown-item';
import CatalogItem from './catalogPage/Catalog-item';

function CatalogPage() {
  const [filter1] = useState([
    {
      val: 'f11',
      name: 'f11',
    },
    {
      val: 'f12',
      name: 'f12',
    },
    {
      val: 'f13',
      name: 'f13',
    },
  ]);
  const [items] = useState([
    {
      nameItem: 'Awesome Item',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0419/1525/files/2800x1080-Women-Combat-Black-1_800x533_crop_right.jpg?v=1603303506',
      imgAlt: 'boots',
      contentTitle: 'Winter boots',
      contentText: 'buy comfortable, warm winter boots',
      currency: '$',
      price: '50',
      clsNameBtn: 'black-btn',
      valBtn: 'View more',
    },
    {
      nameItem: 'Awesome Item',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0419/1525/files/2800x1080-Women-Combat-Black-1_800x533_crop_right.jpg?v=1603303506',
      imgAlt: 'boots',
      contentTitle: 'Winter boots',
      contentText: 'buy comfortable, warm winter boots',
      currency: '$',
      price: '50',
      clsNameBtn: 'black-btn',
      valBtn: 'View more',
    },
    {
      nameItem: 'Awesome Item',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0419/1525/files/2800x1080-Women-Combat-Black-1_800x533_crop_right.jpg?v=1603303506',
      imgAlt: 'boots',
      contentTitle: 'Winter boots',
      contentText: 'buy comfortable, warm winter boots',
      currency: '$',
      price: '50',
      clsNameBtn: 'black-btn',
      valBtn: 'View more',
    },
    {
      nameItem: 'Awesome Item',
      imgSrc:
        'https://cdn.shopify.com/s/files/1/0419/1525/files/2800x1080-Women-Combat-Black-1_800x533_crop_right.jpg?v=1603303506',
      imgAlt: 'boots',
      contentTitle: 'Winter boots',
      contentText: 'buy comfortable, warm winter boots',
      currency: '$',
      price: '50',
      clsNameBtn: 'black-btn',
      valBtn: 'View more',
    },
  ]);
  return (
    <main className="container">
      <div className="filter-menu">
        <div className="filters">
          <DropdownItem
            name={'filter1'}
            clsName={'dropdown'}
            options={filter1}
          />
          <DropdownItem
            name={'filter1'}
            clsName={'dropdown'}
            options={filter1}
          />
          <DropdownItem
            name={'filter1'}
            clsName={'dropdown'}
            options={filter1}
          />
        </div>
        <Button clsName={'white-btn'} val={'Apply'} />
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
    </main>
  );
}

export default CatalogPage;
