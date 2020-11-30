import React from "react";
import { Link } from "react-router-dom";
import GameResult from "../GameResult"


function WinOrLose(props) {
    const winner = props.gameResult.winner
    const foodBalance = props.gameResult.foodBalance

    function whoWon() {
        if (winner) {
            return <div>
                <p>{winner.img}</p>
                <p>{winner.name}</p>
            </div>
        } else {
            return <div>
                <p> No winners </p>
            </div>
        }
    }

    let text
    if (foodBalance > 0) {
        text = `You won ${foodBalance} food!`

    } else if (foodBalance < 0) {
        text = `You lost ${-foodBalance} food!`

    } else if (props.gameResult === GameResult.TIE) {
        text = "You didn't lose or win any food"
    }



    return <div className="win-or-lose">
        {whoWon()}
        <p> {text} </p>
        <button onClick={() => props.setGameState("choose")}>Play again</button>
        <Link to="my-bets"><button>My Bets</button></Link>
    </div>
}

export default WinOrLose;