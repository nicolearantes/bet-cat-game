import React, { useState } from "react";

function Fish(props) {
    const [selected, setSelected] = useState(false);
    const [counting, setCounting] = useState(0);
    const borderColor = selected ? "#39FF14" : "white";
    const plusClass = selected ? "visible" : "hidden";

    function handleOnClick() {
        setSelected(!selected)
        if (selected) {
            setCounting(0)
            props.onSub(counting)
            props.fish.counting = 0
        }
    }

    function handleAdd() {
        var hasFood = props.onAdd(100)

        if (hasFood) {
            props.fish.counting = counting + 100
            setCounting(counting + 100)
        } 
    }

    function handleSub() {
        if (counting > 0) {
            props.fish.counting = counting - 100
            setCounting(counting - 100)
            props.onSub(100)
        }
    }

    return (

        <div>

            <div onClick={handleOnClick}
                className={"fish-card" + (selected ? " selected" : "")}
                style={{ borderColor: borderColor }}>
                <h1>{props.name}</h1>
                <img className="fish-img" alt="Draw of a fish, colored with golden color" src={props.img}></img>

            </div>

            <div className="plus-class" style={{ visibility: plusClass }}>
                <button className="calc calc-icon" onClick={handleSub}> - </button>
                <p className="calc">{counting}</p>
                <button className="calc calc-icon" onClick={handleAdd}> + </button>
            </div>

        </div>
    )
}

export default Fish;