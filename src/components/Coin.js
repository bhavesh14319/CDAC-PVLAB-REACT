import React from "react";
import "../css/Coin.css";
import { useEffect } from "react";

const Coin = () => {

  let heads ;
  let tails ;
  let coin ;
  let flipBtn; 
  let resetBtn; 

function getElemets(){
  heads = 0;
  tails = 0;
  coin = document.querySelector(".coin");
  flipBtn = document.querySelector("#flip-button");
  resetBtn = document.querySelector("#reset-button");
}  

const flipCoin = () =>{
  if(coin!==null){
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if (i) {
      setTimeout(function () {
        coin.style.animation = "spin-heads 3s forwards";
      }, 100);
      tails++;
    } else {
      setTimeout(function () {
        coin.style.animation = "spin-tails 3s forwards";
      }, 100);
      heads++;
    }
    setTimeout(updateStats, 3000);
    disableButton();
  }
    
}


const reset = () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
}

function updateStats() {
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
}


function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
      flipBtn.disabled = false;
    }, 3000);
  }

  useEffect(()=>{
    getElemets();
  },[])

  return (
    <div>
      <div className="container">
        <div className="coin" id="coin">
          <div className="heads">
            <img src="https://jkscoinworld.com/wp-content/uploads/2018/05/2013-a-1.jpg" />
          </div>
          <div className="tails">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPXdeMWZbX3Vk9Qc3tgGtERTCZNe5z1OyzXN8ZejoIrXgA95Wi4mfTV3BgGr0lGHO5I4&usqp=CAU" />
          </div>
        </div>
        <div className="stats">
          <p id="heads-count">Heads: 0</p>
          <p id="tails-count">Tails: 0</p>
        </div>
        <div className="buttons">
          <button id="flip-button" onClick={flipCoin}>Flip Coin</button>
          <button id="reset-button" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};
export default Coin;
