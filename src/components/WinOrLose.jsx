import React, {useState} from "react";
import GameResult from "../GameResult";
import { Link } from "react-router-dom";



function WinOrLose(props) {
    let text
    let button = "Play again"

    if(!props.gameResult) {
        return null
    } else if(props.gameResult === GameResult.WIN) {
        text = "Congratulations, you win!"

    } else if (props.gameResult === GameResult.TIE) {
        text = "It's was a tie..."


    } else if (props.gameResult === GameResult.LOSE) {
       text = "Oh no, you lost!"

    }

    alert(text)

    return <div className="win-or-lose">
        <h2>{text}</h2>
        <p> You currently have  cat's food.</p>
        <button onClick={() => props.setGameState("choose")}>{button}</button>
        <Link to="my-bets"><button>My Bets</button></Link>
    </div>
}

export default WinOrLose;