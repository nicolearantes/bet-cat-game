import React from "react";
import { Link } from "react-router-dom";

function WinOrLose(props) {
    const winner = props.gameResult.winner
    const foodBalance = props.gameResult.foodBalance

    console.log(props.gameResult)

    function whoWon() {
        if (winner) {
            return <div>
                <h1>The winner</h1>
                <img 
                alt="draw fish" 
                src={winner.img}
                className=" fish-img"></img>
                <h1>{winner.name}</h1>
            </div>
        } else {
            return <div>
                <h1> No winners </h1>
            </div>
        }
    }

    let text

    if (foodBalance > 0) {
        text = `You won ${foodBalance} food!`

    } else if (foodBalance < 0) {
        text = `You lost ${-foodBalance} food!`

    } else {
        text = "You didn't lose or win any food"
    }

    console.log(text)

    return <div className="win-or-lose">
        {whoWon()}
        <p> {text} </p>
        <button className="play" onClick={() => props.setGameState("choose")}>Play again</button>
        <button to="my-bets" className="play" onClick={() => props.setGameState("myBets")}>My Bets</button>
    </div>
}

export default WinOrLose;