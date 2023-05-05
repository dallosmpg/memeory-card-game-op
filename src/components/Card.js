import React, { useEffect } from "react";

import '../style/Card.css'
// Import the ColorThief library

// Create a new instance of the ColorThief object

export default function Card({src, alt, id, setClickedImages, setImgOrder, generateRandomOrder}) {

    return (
        <div className="card flex-center-column" onClick={() => {
            setClickedImages(prevClikedImages => [...prevClikedImages, id]);
            setImgOrder(generateRandomOrder());
        }}>
            <img id={`num-${id}`}  src={src} alt={alt} />
        </div>
    )
}