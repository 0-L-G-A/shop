//start server node .\src\server.js
const items = require('./data/products');

const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors')
const { json } = require('express');

const app = express();


const PORT = 3001;

app.use(cors())

app.get('/', cors(), (req, res) => {
    let products = JSON.parse(JSON.stringify(items));
    if(req.query.season !== 'all seasons'){
      products = products.filter((el) => el.season === req.query.season)
    }
    if(req.query.color !== 'all colors'){
      products = products.filter((el) => el.color === req.query.color )
    }
    if(req.query.price === 'cheap => expensive'){
      products.sort((a, b) => a.price - b.price)
    }else{
      products.sort((a, b) => b.price - a.price)
    }
    res.json({
        'products': products
    })
})



app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
