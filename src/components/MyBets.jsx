import React from "react";

function MyBets(props) {
    const rounds=props.bets.map((bet, i) => ({
        fishes:[...bet.fishes],
        roundNumber: i + 1,
        balance: bet.prize - bet.totalBets
    })).reverse()

    console.log(props.bet)

    function showFish(fish) {
       
        return <div>
            <h1>{fish.won ? <i class="fas fa-crown fa-sm"></i>: ""} {fish.name}</h1>
        </div>
    }

    function showRound(round) {
        const podium = round.fishes.sort((a, b) => a.velocity - b.velocity)
        let text

        if(round.balance < 0){
            text = `You lost ${-round.balance} in this round.`
        } else if(round.balance === 0) {
            text = `You didn't lose or win any food in this round.`
        } else {
            text = `You won ${round.balance} in this round.`
        }

        return <div>
            <h2>Round {round.roundNumber} </h2>
            {podium.map(showFish)}
            <p>{text} </p>
        </div>
    }


    return <div className="my-bets">

        <h1> My Bets </h1>

        {rounds.map(showRound)}

    </div>
}

export default MyBets;