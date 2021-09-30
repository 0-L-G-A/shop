import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../../context/Context';
import Button from '../../common-comp/Button';
import TextContent from '../../common-comp/Content';

function CatalogItem({
  nameItem,
  imgSrc,
  imgAlt,
  contentTitle,
  contentText,
  currency,
  price,
  clsNameBtn,
  valBtn,
  el
}) {
  const {setActiveItem} = useData();

  return (
    <div className="catalog-item">
      <div className="catalog-item-name">{nameItem}</div>
      <img src={imgSrc} alt={imgAlt} />
      <TextContent title={contentTitle} text={contentText} />
      <div className="price-wrapper">
        <div className="price-text">Price:</div>
        <div className="price">
          {currency}, {price}
        </div>
      </div>
      <Link to="/item">
        <Button clsName={clsNameBtn} val={valBtn} onClick={() => setActiveItem(el)}/>
      </Link>
    </div>
  );
}

export default CatalogItem;
