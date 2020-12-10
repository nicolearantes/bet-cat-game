import React from "react";
import { Link } from "react-router-dom";

function Instructions(props) {
    
    return <div className="instruction">

        <Link to="/"><i onClick={props.handleClick} className="close-button fas fa-times fa-lg"></i></Link>
        <img className="cat-instruction-img" alt="Black cat using a blue sunglass" src="/img/cat3.png"></img>

        <div className="instructions-text">
        <h2 className="instructions-title">That's how the game works:</h2>

        <p><i className="fas fa-paw"></i> You'll beginn with 1000 cat's food; </p>
        <p><i className="fas fa-paw"></i> Click on the fish to choose it and put how much you want to bet;</p>
        <p><i className="fas fa-paw"></i> When one of your fishes wins, the amount you bet on it will be multiplied by 3; </p>
        <p><i className="fas fa-paw"></i> Try to not lose all your food! </p>
        </div>

    </div>
}

export default Instructions;