import React, { useState } from 'react';
import './css/mainPage.css';
import Carousel from './main-page/Carousel';
import Article from './main-page/Article';
import Button from '../common-comp/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function MainPage() {
  const [data] = useState({
    imgOfCarousel:
      'https://kievdelivery.com/statics/frontend/KievDelivery/img/shop.svg?1562930404',
    imgOfArticle:
      'https://www.eobuwie.com.pl/media/catalog/product/cache/image/800x800/0/7/0700053288515_trampki_vans_-_authentic_vee3blk_black_ak_01.jpg',
    title: 'DOSTAWA',
    text: 'Dostawy realizujemy jedynie w następujących krajach: Austria, Belgia, Czechy, Dania, Francja, Finlandia, Niemcy, Holandia, Irlandia, Włochy, Luksemburg, Polska, Hiszpania, Szwecja, Szwajcaria i Wielka Brytania. Nie realizujemy dostaw do następujących miejsc: brytyjskie terytoria zamorskie, Wyspy Normandzkie, Gibraltar oraz urzędy pocztowe brytyjskich sił zbrojnych, Livigno, Państwo Watykańskie i Republika San Marino, terytoria zależne Holandii, terytoria zależne Francji, Ceuta i Melilla, Andora, Wyspy Kanaryjskie i Baleary, skrytki pocztowe.',
  });

  return (
    <main className="container">
      {/* <div className="page"> */}
        <Carousel
          img={data.imgOfCarousel}
          title={data.title}
          text={data.text}
        />
        <div className="articles">
          <Article
            img={data.imgOfArticle}
            title={data.title}
            text={data.text}
          />
          <Article
            img={data.imgOfArticle}
            title={data.title}
            text={data.text}
          />
          <Article
            img={data.imgOfArticle}
            title={data.title}
            text={data.text}
          />
        </div>
        <Button clsName={'main-page-btn'} val={'View more'} />
      {/* </div> */}
    </main>
  );
}

export default MainPage;
