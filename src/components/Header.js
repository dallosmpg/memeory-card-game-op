import React from "react";
import Scoreboard from "./Scoreboard";
import '../style/Header.css'

export default function Header() {

    return (
        <header className="flex-center-row">
            <div className="header text-header flex-center-column">
                <h1>Memory card game</h1>
                <p>Click on the images! But avoid clicking on the same for a second time!</p>
            </div>
            <Scoreboard />
        </header>
    )
}