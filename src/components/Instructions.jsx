import React from "react";
import {Link} from "react-router-dom";

function Instructions() {
    return <div className="instruction">

        <Link to="/"><i className="close-button fas fa-times fa-lg"></i></Link>
        <i className="fas fa-cat fa-10x"></i>

        <h2>That's how the game works:</h2>

        <p><i className="fas fa-paw"></i> Click on the fish to choose it and put how much you want to bet;</p>
        <p><i className="fas fa-paw"></i> When one of your fishes wins, the amount you bet on it will be multiplied by 3; </p>
        <p><i className="fas fa-paw"></i> When none of your fishes wins you loose half of the amount you current have; </p>
        <p><i className="fas fa-paw"></i> And if you get 2000 cat's food, you can enjoy the better of cat's life: </p>
        <h2>Boxes!<i className="box fas fa-box-open fa-lg"></i></h2>

    </div>
}

export default Instructions;