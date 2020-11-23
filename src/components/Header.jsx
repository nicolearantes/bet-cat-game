import React from "react";
// import Instructions from "./Instructions"
// import MyBets from "./MyBets"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function Header() {
    return <div className="header">
            <Link className="logo" to="/">BetCat</Link>
            <Link className="header-link" to="/my-bets"> /MyBets</Link>
            <Link className="header-link" to="/instructions"> <i class="far fa-question-circle"></i></Link>

        </div>

        
}

export default Header;