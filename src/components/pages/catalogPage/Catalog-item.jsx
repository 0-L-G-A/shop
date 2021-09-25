import React from 'react';
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
}) {
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
      <Button clsName={clsNameBtn} val={valBtn} />
    </div>
  );
}

export default CatalogItem;
