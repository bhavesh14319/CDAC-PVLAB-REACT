import React from "react";
import "../css/Dice.css";
import Board from "./Board";
const Dice = () => {










    
  const roll = () => {
    let dice = document.getElementById("dice");
    var outputDiv = document.getElementById("diceResult");

      let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
      dice.dataset.side = result;
      dice.classList.toggle("reRoll");

      console.log(result);

      outputDiv.classList.remove("reveal");
      outputDiv.classList.add("hide");
    //   outputDiv.innerHTML = "You've got " + result;
      setTimeout(function () {
        outputDiv.classList.add("reveal");
      }, 1500);
    
  };

  return (
    <>
    <Board></Board>
      <div className="diceContainer">
        <div id="dice" data-side="1">
        <div className="sides side-1">
          <span className="dot dot-1"></span>
        </div>
        <div className="sides side-2">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
        </div>
        <div className="sides side-3">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
        </div>
        <div className="sides side-4">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
        </div>
        <div className="sides side-5">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
          <span className="dot dot-5"></span>
        </div>
        <div className="sides side-6">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
          <span className="dot dot-5"></span>
          <span className="dot dot-6"></span>
        </div>
      </div>

      <button onClick={roll}  id="diceResult">Roll 🎲</button>
      </div>

    </>
  );
};

export default Dice;
