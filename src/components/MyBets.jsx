import React from "react";

function MyBets() {
    return <div>
        <h1>My Bets</h1>
        <ul>
            {/* vai vir do objeto que foi apostado um valor direfente de 0 */}
            <li>peixes que foram apostados</li>
            {/* vai vir da constante do valor que vai calcular quando vai ganhar ou perder */}
            <li>valor que foi apostado no peixe</li>
            {/* vai vir da parte da corrida que define quem perdeu e quem ganhou */}
            <li>venceu ou perdeu</li>
        </ul>
    </div>
}

export default MyBets;