import React, {useState} from "react";

import '../style/Footer.css'

export default function Footer() {
    const [isHidden, setIsHidden] = useState(true);
    const [isRotated, setIsRotated] = useState(true);

    return(
        <footer className="flex-center-column">
            <div className="footer-wrapper flex-center-column">
                <div className="footer--toggle-btn">
                    <svg className={isRotated ? '' : 'rotated'} onClick={() => {
                        setIsHidden(!isHidden);
                        setIsRotated(!isRotated);
                        }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M6.7 14.7q-.275-.275-.275-.7q0-.425.275-.7l4.6-4.6q.15-.15.325-.213q.175-.062.375-.062t.388.075q.187.075.312.2l4.6 4.6q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275L12 10.8l-3.9 3.9q-.275.275-.7.275q-.425 0-.7-.275Z"/>
                    </svg>
                </div>
                <div className={isHidden ? 'flex-center-column footer--contact-details hidden' : 'flex-center-column footer--contact-details'}>
                    <p>Created by Martin Dallos</p>
                    <a href="https://github.com/TinyPin146" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 1024 1024"><path fill="currentColor" d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z"/></svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}