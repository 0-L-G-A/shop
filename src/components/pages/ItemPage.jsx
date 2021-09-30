import React from 'react';
import TextContent from '../common-comp/Content';
import ShopButton from '../common-comp/Button';
import './css/itemPage.css';
import {useData} from '../../context/Context';
import { Link } from 'react-router-dom';


function ItemPage() {
  const {activeItem} = useData();

  if(!activeItem) return (
      <h1 style={{margin: 'auto'}}>Please select item on catalog page to display it here</h1>
  );
  return (
    <main>
      <div className="container">
        <div className="item-wrapper up">
          <img className="item-page-img" alt={activeItem.imgAlt} src={activeItem.imgSrc}/>
          <div className="info-item-page-wrap">
            <div className="characteristics">
              <div className="char">{activeItem.color}</div>
              <div className="char">{activeItem.season}</div>
            </div>
            <TextContent title={activeItem.contentTitle} text={activeItem.contentText}/>
            <div className="input-and-select">
              <div className="inp">
                <h5>Number</h5>
                <input type="text" placeholder="4"></input>
              </div>
              <div className="sel">
                <h5>Sizes</h5>
                <select name={'sizes'} className="dropdown">
                {activeItem.sizes?.map((el) => <option key={el} value={el}>{el}</option>)}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="item-wrapper down">
          <div className="price">Price: {activeItem.currency}{activeItem.price}</div>
          <div className="buttons">
            <Link to="/catalog">
                <ShopButton clsName={'btn white-btn'} val={'Go Back'} onClick={'fff'}/>
            </Link>
            <ShopButton clsName={'btn black-btn'} val={'Add to cart'} onClick={'fff'}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ItemPage;