import React from 'react';
import TextContent from '../../common-comp/Content';
// import 'mainPageStyles.css';


function Carousel({img, title, text}) {
  return (
    <div className="carousel-item">
      <div className="img-carousel">
        <img alt="shop" src={img}/>
      </div>
      <TextContent title={title} text={text}/>
    </div>
  );
}

export default Carousel;