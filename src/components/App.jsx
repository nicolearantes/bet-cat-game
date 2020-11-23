import React, { useState } from "react";
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

function App() {
    const [totalFood, setTotalFood] = useState(1000);
    const [gameState, setGameState] = useState("choose");
    const [savedFishes, setSavedFishes]= useState(fishes);

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

    function home() {
        if (gameState === "choose") {
            return (
                <div>
                    <h2>Click on the fish to choose it </h2>
                    <p className="alert"> ! Don't forget to put how much you want to bet on it, otherwise will not count as one of your bets !</p>
                    <Food foodAmount={totalFood}/>

                    <div className="fish-map">
                        {savedFishes.map(newFish)}
                    </div>

                    <button className="play" onClick={handleRace}>Let's play! </button>

                </div>
            )
        }
        
        if (gameState === "race") {
            return (<Race fishes={savedFishes}/>)
        }
    }

    return (
        <Router>
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/instructions">
                        <Instructions />
                    </Route>
                    <Route path="/my-bets">
                        <MyBets />
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





