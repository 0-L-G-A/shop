//start server node .\src\server.js
const items = require('./data/products');
const filterItems = require('./back-end-logic/filterFunction')
const express = require('express');
const cors = require('cors')
const { json } = require('express');

const app = express();


const PORT = 3001;

app.use(cors())

app.get('/items', cors(), (req, res) => {
    let products = JSON.parse(JSON.stringify(items));
    let newProducts = filterItems(products, req.query);
    res.json({
        'products': newProducts
    })
})



app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});
