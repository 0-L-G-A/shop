import React, {useState} from 'react';
import '../main-page/mainPageStyles.css'; 
import Carousel from '../main-page/carousel';
import Article from '../main-page/article';


function MainPage() {

  const [data, setData] = useState({
    imgOfCarousel: "https://kievdelivery.com/statics/frontend/KievDelivery/img/shop.svg?1562930404",
    imgOfArticle: "https://img-resizer.prd.01.eu-west-1.eu.olx.org/img-eu-olxua-production/912547298_1_192x192_rev003.jpg",
    title: "Intresting title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  });

  return (
    <div className="page">
      <Carousel img={data.imgOfCarousel} title={data.title} text={data.text}/>
      <div className="articles">
        <Article img={data.imgOfArticle} title={data.title} text={data.text}/>
        <Article img={data.imgOfArticle} title={data.title} text={data.text}/>
        <Article img={data.imgOfArticle} title={data.title} text={data.text}/>
      </div>
      <button className="main-page-btn">View more</button>
    </div>
  );
}

export default MainPage;