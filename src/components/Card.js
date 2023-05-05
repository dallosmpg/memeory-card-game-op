import React from "react";

import '../style/Card.css'

export default function Card({src, alt, id, setClickedImages, setImgOrder, generateRandomOrder}) {

    return (
        <div className="card flex-center-column">
            <img onClick={() => {
                setClickedImages(prevClikedImages => [...prevClikedImages, id]);
                setImgOrder(generateRandomOrder());
            }} src={src} alt={alt} />
            <p></p>
        </div>
    )
}