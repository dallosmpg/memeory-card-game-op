import  React, { useState } from 'react';

import Header from './components/Header';
import Gameboard from './components/Gameboard';
import Footer from './components/Footer';

import './style//App.css';

function App() {
  const [clickedImages, setClickedImages] = useState([]);

  return (
      <div className='wrapper'>
        <Header setClickedImages={setClickedImages} clickedImages={clickedImages} />
        <Gameboard setClickedImages={setClickedImages} />
        <Footer />
      </div>
    );
}

export default App;
