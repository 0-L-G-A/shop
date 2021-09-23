import React from 'react';
import '../main-page/mainPageStyles.css'; 
import Carousel from '../main-page/carousel';
import Article from '../main-page/article';


function MainPage() {
  return (
    <div className="page">
      <Carousel/>
      <div className="articles">
        <Article />
        <Article/>
        <Article/>
      </div>
      <button></button>
    </div>
  );
}

export default MainPage;