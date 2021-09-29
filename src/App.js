import './App.css';
import React from 'react';
import MainPage from './components/pages/MainPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import CatalogPage from './components/pages/CatalogPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {StateProvider} from './context/Context'

function App() {
  return (
    <StateProvider>
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        {/* <main> */}
        <Switch>
          <Route path="/catalog">
            <CatalogPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>

        {/* <CatalogPage/> */}
        {/* </main> */}
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
    </StateProvider>
  );
}

export default App;
