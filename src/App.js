import './App.css';
import React from 'react';
import MainPage from './components/pages/MainPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import CatalogPage from './components/pages/CatalogPage';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <MainPage />
        {/* <CatalogPage/> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
