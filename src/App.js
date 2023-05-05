import  React, { useState } from 'react';

import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';

import './style//App.css';

function App() {
  const [clickedImages, setClickedImages] = useState([]);

  if (new Set(clickedImages).size !== clickedImages.length) {
    console.log('DUPLICATE');
  }

  return (
      <div className='wrapper'>
        <Header />
        <Gameboard setClickedImages={setClickedImages} />
        <Footer />
      </div>
    );
}

export default App;
