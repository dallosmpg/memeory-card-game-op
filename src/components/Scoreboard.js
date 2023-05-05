import React, {useState, useEffect} from "react";

export default function Scoreboard({clickedImages, setClickedImages}) {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (clickedImages.length < 1) return;
        if (new Set(clickedImages).size !== clickedImages.length) {
            setCurrentScore(0);
            setClickedImages([]);
            setIsError(true);
        } else {
            setCurrentScore(prevScore => prevScore + 1);
        }
        console.log(clickedImages);
    }, [clickedImages]);

    useEffect(() => {
        if (currentScore > bestScore) setBestScore(currentScore);
    }, [currentScore]);

    useEffect(() => {
        if (isError) setTimeout(() => {
            setIsError(false);
        }, 2000)
    }, [isError])
    
    return (
        <div className="header scoreboard flex-center-column">
            <h3 className={isError ? 'error' : ''}>Current score: {currentScore}</h3>
            <h3>Best score: {bestScore}</h3>
        </div>
    )
}