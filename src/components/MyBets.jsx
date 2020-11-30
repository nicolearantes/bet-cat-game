import React from "react";

function MyBets(props) {
    const rounds=props.bets.map((bet, i) => ({
        fishes:[...bet.fishes],
        roundNumber: i + 1
    })).reverse()


    function showFish(fish) {
       
        return <div>
            <h1 style={{ color: "green" }}>{fish.won ? <i class="fas fa-crown"></i>: ""}{fish.velocity} {fish.name}</h1>
        </div>
    }

    function showBet(round) {
        const podium = round.fishes.sort((a, b) => a.velocity - b.velocity)

        return <div>
            <h2>Round {round.roundNumber} </h2>
            {podium.map(showFish)}
        </div>
    }


    return <div>

        <h1 style={{ backgroundColor: "pink" }}> My Bets </h1>

        {rounds.map(showBet)}

    </div>
}

export default MyBets;