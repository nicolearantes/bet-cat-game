import React from "react";

function MyBets(props) {


    function showFish(fish) {
       
        return <div>
            <h1 style={{ color: "green" }}>{fish.won ? <i class="fas fa-crown"></i>: ""}{fish.velocity} {fish.name}</h1>
        </div>
    }

    function showBet(bet, i) {
        const podium = bet.fishes.sort((a, b) => a.velocity - b.velocity)

        return <div>
            <h2>Round {i + 1} </h2>
            {podium.map(showFish)}
        </div>
    }


    return <div>

        <h1 style={{ backgroundColor: "pink" }}> My Bets </h1>

        {props.bets.map(showBet)}

    </div>
}

export default MyBets;