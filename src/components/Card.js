import React from "react";

import '../style/Card.css'

export default function Card({src, alt}) {

    return (
        <div className="card flex-center-column">
            <img src={src} alt={alt} />
            <p></p>
        </div>
    )
}