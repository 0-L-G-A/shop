const filterItems = (products, filters) => {
    if(filters.season !== 'all seasons'){
      products = products.filter((el) => el.season === filters.season)
    }
    if(filters.color !== 'all colors'){
      products = products.filter((el) => el.color === filters.color )
    }
    if(filters.price === 'cheap => expensive'){
      products.sort((a, b) => a.price - b.price)
    }else{
      products.sort((a, b) => b.price - a.price)
    }
    return products;
}

module.exports = filterItems;