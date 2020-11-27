import React, {useState} from "react";
import Cookies from 'js-cookie';

import fishes from "../fishes";



function MyBets(props) {
    const [whichRound, setWhichRound] = useState()
    console.log(whichRound)

   
        
        console.log(totalFood)

  
    
    function rounds() {
        setWhichRound(whichRound + props.round)
    }
    return <div>
        <h1>My Bets</h1>
        <p>Round {whichRound}</p>
        {/* <div>
           
            <table>
                <tr>
                    <th>Fish</th>
                    <th>Bet</th>
                    <th>Result</th>
                </tr> */}
                {/* create one this for each fish betted */}
                {/* <tr>
                    <td>{fishName}</td>
                    <td>{betValue}</td>
                    <td>{haswin}</td>
                </tr>
            </table>
        </div> */}
    </div>
}

export default MyBets;