import './App.css';
import React from 'react';
import MainPage from './components/pages/mainPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <MainPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
