import React, { useEffect, useState } from "react";
import Fish from "./Fish";
import Food from "./Food"
import Race from "./Race"
import fishes from "../fishes";
import Header from "./Header"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Instructions from "./Instructions"
import MyBets from "./MyBets"
import Cookies from 'js-cookie';

function App() {

    const totalFoodCookie = Cookies.get("totalFood")
    const betsCookie = Cookies.get("bets")

    const [totalFood, setTotalFood] = useState(totalFoodCookie ? JSON.parse(totalFoodCookie) : 1000);
    const [gameState, setGameState] = useState("choose");
    const [savedFishes, setSavedFishes] = useState(fishes.map(fish => ({...fish})));
    const [bets, setBets] = useState(betsCookie ? JSON.parse(betsCookie) :[])

    function handleAdd(amount) {
        if (totalFood > 0) {
            setTotalFood(totalFood - amount)
            return true
        } else {
            return false
        }
    }

    function handleSub(amount) {
        setTotalFood(totalFood + amount)
    }

    function newFish(fish) {
        return <Fish
            key={fish.key}
            name={fish.name}
            img={fish.img}
            fish={fish}
            onAdd={handleAdd}
            onSub={handleSub}
        />
    }

    function handleRace() {
        setGameState("race")
    }

    function handleRestart() {
        const restartWindow = window.confirm("Are you sure?")

        if (restartWindow) {
            Cookies.remove("totalFood")
            Cookies.remove("bets")
            window.location.reload()
        }
    }

    function handleRaceEnd(prize, totalBets) {
        const newTotal = prize + totalFood
        
        Cookies.set("totalFood", newTotal)
        
        bets.push({
            prize: prize,
            totalBets: totalBets,
            fishes: savedFishes
        })

        Cookies.set("bets", JSON.stringify(bets))

        setBets(bets)
        setSavedFishes(fishes.map(fish => ({ ...fish })))
        setTotalFood(newTotal)
    }

    function home() {
        if (gameState === "choose") {
            return (
                <div>
                    <div className="app-text">
                        <h2>Click on the fish to choose it </h2>
                        <p className="alert"> ! Don't forget to put how much you want to bet on it, otherwise will not count as one of your bets !</p>
                    </div>
                    <Food foodAmount={totalFood} />
                    <div className="fish-map">
                        {savedFishes.map(newFish)}
                    </div>


                    <button className="play" onClick={handleRace}>Let's play! </button>
                    <button className="play" style={{ backgroundColor: "purple" }} onClick={handleRestart}>Restart</button>


                </div>
            )
        }

        if (gameState === "race") {
            return (<Race
                fishes={savedFishes}
                setGameState={setGameState}
                onRaceEnd={handleRaceEnd} />)
        }
    }
 

    return (
        <Router>
            <div className="container">
                <Header setGameState={setGameState} />
                <Switch>
                    <Route path="/instructions">
                        <Instructions />
                    </Route>
                    <Route path="/my-bets">
                        <MyBets bets={bets}/>
                    </Route>
                    <Route path="/">
                        {home()}

                    </Route>
                </Switch>
            </div>
        </Router>
    )

}

export default App;





