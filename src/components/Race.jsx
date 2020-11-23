import React, {useState} from "react";
import Counter from "./Counter"
import Fish from "./Fish";

function Race(props) {
    const [distance, setDistance] = useState(0);
    const allVel = []

    // function handleAmount(amount) {
    //     if(amount =!0) {
            
    //         console.log(fishesName)
    //     }
    // }


    // function winOrLoose() {
    //     return Math.max(...allVel)
    // }

//   function winOrLoose() {
// passar por todos os elementos da array e descobrir qual é o maior elemento
// retornar o id desse elemento

// se o id desse elemento for igual ao de algum dos itens apostados rertornar "você venceu" -> 
// my bets / jogar de novo (-> voltar para pagina home)
// e chamar uma função que calcula o quantas rações voce ganhou ou pderdeu (o balanço)
// se não, retornar "você perdeu" -> jogar de novo (rertornar para pagina home)

//   }


   


    function newFish(fish) { 
        const vel = Math.floor(Math.random() * 2000) + 7000
        // const maxVel = Math.max(...allVel)
        console.log(fish.counting)
        console.log(fish.vel)

        // console.log(Math.max(...allVel))
        // console.log(allVel[maxVel])
        // console.log(fish.name)
        // console.log(fish.key)
     
     
        return <img 
        className="race-fish fish-img" 
        style={{ transitionDuration: vel + "ms", left: distance + "%"}} src={fish.img}></img>
    }

    
    return <div >
        <Counter onFinish={() => setDistance(79.8)} />
        <div  className="race">
            {props.fishes.map(newFish)}
  

        </div>

    </div>
}

export default Race;