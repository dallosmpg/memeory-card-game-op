import React, {useState} from "react";
import Card from "./Card";

import '../style/Gameboard.css';

import uniqid from 'uniqid';

export default function Gameboard({setClickedImages}) {
  const [imgOrder, setImgOrder] = useState(generateRandomOrder());

  function generateRandomOrder() {  
    const randomImageOrder = [];
    for (let i = 1; i <= 10; i++) {
      randomImageOrder.push(i);
    }

    for (let i = randomImageOrder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomImageOrder[i], randomImageOrder[j]] = [randomImageOrder[j], randomImageOrder[i]];
    }
    return randomImageOrder
  }  


    const images = [
        {
            id:1,
            src: require('../assets/images/P1070339.jpg'),
            alt: 'Memory card item'
        },
        {
            id: 2,
            src: require('../assets/images/P1070345.jpg'),
            alt: 'Memory card item'
        },
        {
            id: 3,
            src: require('../assets/images/P1070365.jpg'),
            alt: 'Memory card item',
        },
        {
            id: 4,
            src: require('../assets/images/P1070366.jpg'),
            alt: 'Memory card item',
        },
        {
            id: 5,
            src: require('../assets/images/P1070378.jpg'),
            alt: 'Memory card item',
        },
        {
            id: 6,
            src: require('../assets/images/P1070476.jpg'),
            alt: 'Memory card item',
        },
        {
            id: 7,
            src: require('../assets/images/P1070491.jpg'),
            alt: 'Memory card item',
        },
        {
            id: 8,
            src: require('../assets/images/P1070539.jpg'),
            alt: 'Memory card item',
        },
        {
            id: 9,
            src: require('../assets/images/P1070540.jpg'),
            alt: 'Memory card item',
        },
        {
            id: 10,
            src: require('../assets/images/P1070594.jpg'),
            alt: 'Memory card item',
        }
    ]

    const imagesInOrder = imgOrder.map(num => images.find(imgObj => num === imgObj.id))

    return (
        <div className="gameboard">
            {imagesInOrder.map(img => {
                return <Card setClickedImages={setClickedImages} key={uniqid()} id={img.id} src={img.src} alt={img.alt} setImgOrder={setImgOrder} generateRandomOrder={generateRandomOrder} />
            })}
        </div>
    )
}