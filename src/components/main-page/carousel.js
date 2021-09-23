import React from 'react';
// import 'mainPageStyles.css';


function Carousel() {
  return (
    <div className="carousel-item">
      <div className="img-carousel">
        <img alt="shop" src="https://kievdelivery.com/statics/frontend/KievDelivery/img/shop.svg?1562930404"/>
      </div>
      <div className="content-carousel">
        <div className="title-carousel">Title</div>
        <div className="text-carousel"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </div>
    </div>
  );
}

export default Carousel;