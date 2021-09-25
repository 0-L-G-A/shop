import React from 'react';
import TextContent from '../common-comp/content';
// import 'mainPageStyles.css';


function Article({img, title, text}) {
  return (
    <div className="article">
      <div className="img-article">
        <img alt="art-img" src={img}/>
      </div>
      <TextContent title={title} text={text}/>
    </div>
  );
}

export default Article;