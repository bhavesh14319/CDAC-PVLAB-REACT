import React, { useState } from "react";
import "../css/Coin.css";
import { useEffect } from "react";
import Board from "./Board";
import probFormula from '../components/images/probability-formula.jpg'

const Coin = () => {
  var output = "";

  let heads;
  let tails;
  let coin;
  let flipBtn;
  let resetBtn;

  let inst = [
    {
      id:0,
      type:'general',
      value: "Hello welcome to lab \n let's start ❤ ",
    },
    {
      id: 1,
      type:'general',
      value: " What do you think? a fair coin toss will give head or tail? 🤔 ",
    },
    {
      id: 2,
      type: "general",
      value: "Not sure? Don't worry let's have a toss😥",
    },
    {
      id: 3,
      type:'general',
      value: `Oh it appeared <head/tail> but how ?😯 Was it predictable? Let's have another toss`,
    },
    {
      id: 4,
      type:'general',
      value: `Oh it appeared<head/tail> but how ? Is it predictable? 🧐 Let's toss one last time 🙂`,
    },
    {
      id: 5,
      type:'general',
      value: "Still not sure?😞 don't worry😇",
    },
    {
      id: 6,
      type:'general',
      value: `Were your guesses correct ❓ \n Let me tell You, all The outcomes are unpredictable !`,
    },
    {
      id: 7,
      type:'general',
      value: `Here comes the concept of probabilty. \n "The Probability of an event is the value that tells how likely the event is going to happen"`,
    },
    {
      id: 8,
      type:'general',
      value: `Now questions is : \n How to calculate probability of an event ?`,
    },
    {
      id: 9,
      type:'general',
      value: `What are the possible outcomes when we toss a coin ? \n HEAD or TAIL only one can appear at a time \n Thus, Total possible outcomes are 2`,
    },
    {
      id: 10,
      type: "formula",
      image: probFormula
    },
    {
      id:11,
      type:"calculation",
      value: {
        heading : "Probability of head and tail in single toss :",
        favourable : "favourable outcome in one toss : Head or Tail",
        Total : "Total possible outcomes are two : Head and Tail",
        noOfFavourable : 1,
        noOfTotal : 2
      }
    }
  ];

  function showPopUp(){
    console.log("ii");
   let cont= document.getElementById('popUpContainer');
   console.log(cont)
  cont.style.display="block";
    let input = document.getElementById('coininput');
    // updateInstructions();
  }

  //
  function updateInstructions(output) {
    console.log(output);
    // console.log(input);
    // inst?.map((item) => {
    //   if (
    //     item?.value.includes("<head/tail>") ||
    //     item?.value.includes("head") ||
    //     item?.value.includes("tail")
    //   ) {
    //     item.value = item.value?.replace(`<head/tail>`, output);
    //     item.value = item.value?.replace("head", output);
    //     item.value = item.value?.replace("tail", output);
    //   }
    // });
    // console.log(output);
  }

  function getElemets() {
    heads = 0;
    tails = 0;
    coin = document.querySelector(".coin");
    flipBtn = document.querySelector("#flip-button");
    resetBtn = document.querySelector("#reset-button");
  }

  const flipCoin = () => {
    if (coin) {
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
          output = "Head";
        }, 100);
       
        heads++;
       
        
      }
      setTimeout(updateStats, 3000);
      // console.log(output);
      disableButton();
    }
  };

  const reset = () => {
    if (coin) {
      coin.style.animation = "none";
      heads = 0;
      tails = 0;
      updateStats();
    }
  };

  function updateStats() {
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
    showPopUp();
  }

  function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
      flipBtn.disabled = false;
    }, 3000);
  }

  useEffect(() => {
    getElemets();
  }, []);

  return (
    <div>
      <Board inst={inst} output={output}></Board>
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
          <button id="flip-button" onClick={flipCoin}>
            Flip Coin
          </button>
          <button id="reset-button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
export default Coin;
