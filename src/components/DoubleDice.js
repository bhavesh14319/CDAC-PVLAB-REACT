import React from "react";
import swal from "sweetalert";
import "../css/DoubleDice.css";

const DoubleDice = () => {

    const roll = () => {
        let dice1 = document.querySelector(".dice1");
        let dice2 = document.querySelector(".dice2");
        var outputDiv = document.getElementById("diceResult");
    
        let result1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        dice1.dataset.side = result1;
        dice1.classList.toggle("reRoll");

        let result2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        dice2.dataset.side = result2;
        dice2.classList.toggle("reRoll");
    
    
        console.log(result1);
    
        outputDiv.classList.remove("reveal");
        outputDiv.classList.add("hide");
        //   outputDiv.innerHTML = "You've got " + result;
        setTimeout(function () {
          outputDiv.classList.add("reveal");
          
        swal(`Yay! 🤘 You Got ${result1} `, `Can you predict the next number on next 🎲 roll?`, "")
        }, 1500);
    
    
    
      };


  return (
    <div style={{display:"flex",width:"100vw",justifyContent:"center"}}>
      {" "}
      <div className="diceContainer">
        <div className="dice1" id="dice" data-side="1">
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

        <button onClick={roll} id="diceResult">
          Roll 🎲
        </button>
      </div>


      <div className="diceContainer">
        <div className="dice2" id="dice" data-side="1">
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

        <button onClick={roll} id="diceResult">
          Roll 🎲
        </button>
      </div>
    </div>
  );
};

export default DoubleDice;
