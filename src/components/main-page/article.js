import React from 'react';
// import 'mainPageStyles.css';


function Article() {
  return (
    <div className="article">
      <div className="img-article">
        <img alt="art-img" src="https://img-resizer.prd.01.eu-west-1.eu.olx.org/img-eu-olxua-production/912547298_1_192x192_rev003.jpg"/>
      </div>
      <div className="content-article">
        <div className="title-article">Title</div>
        <div className="text-article">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>
    </div>
  );
}

export default Article;