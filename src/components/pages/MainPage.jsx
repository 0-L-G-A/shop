import React, { useState } from 'react';
import './css/mainPage.css';
import Carousel from './main-page/Carousel';
import Article from './main-page/Article';
import Button from '../common-comp/Button';
import { mainPageItems } from '../../data/mainPageItems';

function MainPage() {
  const [count, setCount] = useState(3);
 
  return (
    <main>
      <div className="container">
        <Carousel
          img={mainPageItems.imgOfCarousel}
          title={mainPageItems.title}
          text={mainPageItems.text}
        />
        <div className="articles">
        {(new Array(count)).fill(<Article
          img={mainPageItems.imgOfArticle}
          title={mainPageItems.title}
          text={mainPageItems.text}
        />)}
        </div>
        <Button clsName={'btn black-btn'} val={'View more'} onClick={() => setCount(count + 3)}/>
      </div>
    </main>
  );
}

export default MainPage;
