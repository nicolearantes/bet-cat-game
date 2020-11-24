import React from "react";
import GameResult from "../GameResult";

function WinOrLose(props) {

    if(!props.gameResult) {
        return null
    }

    if(props.gameResult === GameResult.WIN) {
        return <div>

        </div>
    }

    if (props.gameResult === GameResult.TIE) {
        return
    }

    if (props.gameResult === GameResult.LOSE) {
        return
    }

    

    return <div>
        <p>bla bla bla</p>
    </div>
}

export default WinOrLose