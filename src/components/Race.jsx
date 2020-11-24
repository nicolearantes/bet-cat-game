import React, { useState } from "react";
import Counter from "./Counter";
import GameResult from "../GameResult";
import WinOrLose from "./WinOrLose";


function Race(props) {
    const [distance, setDistance] = useState(0);
    const [gameResult, setGameResult] = useState(null)

    function newFish(fish) {
        const vel = (Math.floor(Math.random() * 20) + 70) * 100;
        fish.velocity = vel;

        return <img
            alt="fish draw"
            className="race-fish fish-img"
            style={{ transitionDuration: vel + "ms", left: distance + "%" }} src={fish.img}></img>
    }

    function handleFinish() {
        setDistance(79.8)
        setTimeout(winOrLoose, 9000);
    }

    function winOrLoose() {
        const minVel = Math.min(...props.fishes.map(fish => fish.velocity));
        const winners = props.fishes.filter(fish => fish.velocity === minVel);

        console.log(winners)
        console.log(winners[0].counting)

        if (winners.length !== 1) {
            console.log("no one wons")
            // props.gameResult
            setGameResult(GameResult.TIE)
        } else if (winners[0].counting > 0) {
            console.log("you won this game")
            // props.gameResult
            setGameResult(GameResult.WIN)

        } else {
            console.log("you loose")
            // props.gameResult
            setGameResult(GameResult.LOSE)

        }
    }

    return <div>
        <Counter onFinish={handleFinish} />
        <div className="race">
            {props.fishes.map(newFish)}
            <WinOrLose gameResult={gameResult} />
        </div>
    </div>
}

export default Race;