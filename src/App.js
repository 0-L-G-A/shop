import './App.css';
import React from 'react';
import MainPage from './components/pages/MainPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import CatalogPage from './components/pages/CatalogPage';
import CartPage from './components/pages/CartPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {StateProvider} from './context/Context'
import ItemPage from './components/pages/ItemPage';

function App() {
  return (
    <StateProvider>
    <Router>
      <div className="App">

        <header>
          <Header />
        </header>

        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/catalog">
            <CatalogPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/item">
            <ItemPage />
          </Route>
        </Switch>

        <footer>
          <Footer />
        </footer>

      </div>
    </Router>
    </StateProvider>
  );
}

export default App;
