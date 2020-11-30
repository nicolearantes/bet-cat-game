import React, { useState } from "react";
import Counter from "./Counter";
import WinOrLoose from './WinOrLose';
import GameResult from "../GameResult";

function Race(props) {
    const [distance, setDistance] = useState(0);
    const [gameResult, setGameResult] = useState(null);
    const gameFinished = gameResult != null

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
        const allCountings = props.fishes.map(fish => fish.counting);
        const totalBets = allCountings.reduce((total, each) => total + each)

        let prize
        let winner

        if (winners.length !== 1) {
            prize = totalBets
            winner = null
        } else {
            winner = winners[0]
            winner.won = true
            prize = winner.counting * 3
        }

        setGameResult({
            foodBalance: prize - totalBets,
            winner: winner
        })

        props.onRaceEnd(prize, totalBets)
    }

    function winOrLose() {
        return  <WinOrLoose
            gameResult={gameResult}
            fishes={props.fishes}
            setGameState={props.setGameState}
        />
    }

    return <div>
        <Counter onFinish={handleFinish} />
        <div className="race">
            {props.fishes.map(newFish)}
            {gameFinished ? winOrLose() : "" }
        </div>
    </div>
}

export default Race;