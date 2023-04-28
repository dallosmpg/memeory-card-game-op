import React from "react";
import Card from "./Card";

import '../style/Gameboard.css';

import uniqid from 'uniqid';

export default function Gameboard() {
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

    return (
        <div className="gameboard">
            {images.map(img => {
                return <Card key={uniqid()} src={img.src} alt={img.alt} />
            })}
        </div>
    )
}