import React from "react";

function Food(props) {
    return <div>
        <p style={{color: props.foodAmount === 0? "red": ""}}>You currently have {props.foodAmount} cat's food</p>
    </div>
}

export default Food;