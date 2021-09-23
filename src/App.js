import './App.css';
import React from 'react';
import MainPage from './components/pages/mainPage';
import Header from './components/header/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <MainPage />
        <Footer />
      </main>
    </div>
  );
}

export default App;
