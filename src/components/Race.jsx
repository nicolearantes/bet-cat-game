import React, { useState } from "react";
import Counter from "./Counter";
import WinOrLoose from './WinOrLose';
import GameResult from "../GameResult";

function Race(props) {
    const [distance, setDistance] = useState(0);
    const [gameResult, setGameResult] = useState(null);

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
        let allCountings = props.fishes.map(fish => fish.counting);

        let prize
        const totalBets = allCountings.reduce((total, each) => total + each)

        if (winners.length !== 1) {
            prize = totalBets
        } else {
            prize = winners[0].counting * 3
        }

        if (prize > totalBets) {
            setGameResult(GameResult.WIN)

        } else if (prize < totalBets) {
            setGameResult(GameResult.LOSE)

        } else {
            setGameResult(GameResult.TIE)
        }
        props.onRaceEnd(prize, totalBets)
    }

    return <div>
        <Counter onFinish={handleFinish} />
        <div className="race">
            {props.fishes.map(newFish)}
            <WinOrLoose
                gameResult={gameResult}
                fishes={props.fishes}
                setGameState={props.setGameState}
            />
        </div>
    </div>
}

export default Race;