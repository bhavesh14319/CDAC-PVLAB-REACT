import React, { useState } from "react";
import "../css/Coin.css";
import { useEffect } from "react";
import Board from "./Board";
import probFormula from '../components/images/probability-formula.jpg'
import coinChances from '../components/images/coinChances.jpg'
import comp from '../components/images/comp.jpeg'
import probLine from '../components/images/probLine.png'
import { returnUserInput } from './Popup'
import Flip from "../components/sounds/coin1.mp3"
import swal from "sweetalert";
import tail from "./coinimages/5_tails.png"
import head from "./coinimages/5_heads.png"


const Coin = () => {
  // var output = "";

  const [heads, setheads] = useState(0);
  const [tails, settails] = useState(0);
  let coin;
  let flipBtn;
  let disableFlip;
  let resetBtn;


  const [output, setOutput] = useState("");

  let inst = [
    {
      id: 0,
      type: 'general',
      value: "Hello welcome to lab <br/> let's start ❤",
      audiosrc: "Hello welcome to lab let's start",
    },
    {
      id: 1,
      type: 'general',
      task: true,
      value: "What do you think? a fair coin toss will give head or tail? 🤔 <br/> Not sure? Don't worry let's have a toss 👍",
      audiosrc: "What do you think? a fair coin toss will give head or tail? Not sure? Don't worry let's have a toss"
    },
    {
      id: 2,
      type: 'general',
      value: `Were your guesses correct ❓ <br/> Let me tell You, all The outcomes are unpredictable !`,
      audiosrc: `Were your guesses correct? <br/> Let me tell You, all The outcomes are unpredictable !`,
    },
    {
      id: 3,
      type: 'general',
      value: `Here comes the concept of probabilty. <br/> "The Probability of an event is the value that tells how likely the event is going to happen"`,
      audiosrc: `Here comes the concept of probabilty. <br/> "The Probability of an event is the value that tells how likely the event is going to happen"`,
    },
    {
      id: 4,
      type: 'general',
      value: `Now questions is : <br/> How to calculate probability of an event ? <br/> Think of , What are the possible outcomes when we toss a coin ?`,
      audiosrc: `Now questions is : <br/> How to calculate probability of an event ? Think of ,  What are the possible outcomes when we toss a coin ?`,
    },
    {
      id: 5,
      type: "formula",
      image: coinChances,
      retain: true,
      audiosrc: `probability image`,
    },
    {
      id: 6,
      type: "formula",
      image: probFormula,
      retain: true,
      audiosrc: `probability image`,
    },
    {
      id: 7,
      type: "calculation",
      calculation:
        `<div class='calculationContainer'> 
      <h3 class="calcHeading">Probability of head and tail in single toss :</h3> <br/>
      <p class="favText"> favourable outcome in one toss : Head or Tail => Number of favourable outcomes = 1 </p> <br/> 
      <p class="totalText">Total possible outcomes are two : Head and Tail => Total Possible outcomes = 2 </p> <br/> 
      <span> &there4; <p>  Getting head is as likely as getting tail</p> </span> 
      </div>      
      `,
      equations: {
        1: String.raw`P(HEAD)=\frac{1}{2}`,
        2: String.raw`P(TAIL)=\frac{1}{2}`
      },
      audiosrc: "Probability of head and tail in single toss. favourable outcome in one toss are Head or Tail Therefore total possible outcomes are two that are Head and Tail. Hence, Probability of head is equal to number of favourable outcomes upon total number of outcomes which is equal to one upon two and probability of tail is also one upon two. and hence, Getting head is as likely as getting tail",
    },
    {
      id: 8,
      type: "calculation",
      calculation:
        `<div class='calculationContainer'>
          <h3 class="calcHeading"> Remember Total Probability of an event is:</h2><br/>
          <p class="totalText">=> Sum of the probabilities of all possible outcomes</p>
          <h3 class="calcHeading">Total probability of coin toss :</h3> <br/>
          <p class="totalText">=> Total possible outcomes are two : Head and Tail</p> <br/>
        `,
      equations: {
        1: String.raw`P(HEAD)=\frac{1}{2}`,
        2: String.raw`P(TAIL)=\frac{1}{2}`,
        3: String.raw`P(HEAD)+P(TAIL)=\frac{1}{2}+\frac{1}{2}= 1`
      },
      audiosrc: "Remember Total Probability of an event is: Sum of the probabilities of all possible outcomes. there are only two possible outcomes, head and tail, both of them having equal probability. Sum of their probabilities is equal to 1",
    },
    {
      id: 9,
      type: 'general',
      value: "Do you know? probabilities are complementary: <br/> P(HEAD)=1-P(NOT GETTING HEAD) <br/> P(HEAD)=1-P(GETTING TAIL)",
      audiosrc: "Do you know? probabilities are complementary: <br/> P(HEAD)=1-P(NOT GETTING HEAD) <br/> P(HEAD)=1-P(GETTING TAIL)",
    },
    {
      id: 10,
      type: "formula",
      image: comp,
      retain: true,
      audiosrc: `probability image`,
    },
    {
      id: 11,
      type: "general",
      value: "Probability is measured on the scale of 0 to 1<br/> Zero probability implies that there is no likelyhood that event is going to happen <br/> while a probability 1 indicates that event is certian to occur",
      audiosrc: "Probability is measured on the scale of 0 to 1<br/> Zero probability implies that there is no likelyhood that event is going to happen <br/> while a probability 1 indicates that event is certian to occur",
    },
    {
      id: 12,
      type: "formula",
      image: probLine,
      retain: true,
      audiosrc: `probability image`,
    },
    {
      id: 13,
      type: "end",
    }
  ];


  const tossCoin = () => {
    let audio = document.getElementById('coinAudio');
    let result;
    coin = document.querySelector(".coin");
    flipBtn = document.querySelector("#flip-button");
    resetBtn = document.querySelector("#reset-button");
    console.log(coin);
    audio.play();
    if (coin) {
      let i = Math.floor(Math.random() * 2);
      coin.style.animation = "none";
      if (i) {
        result="TAIL"
        setTimeout(function () {
          coin.style.animation = "spin-heads 3s forwards";
          settails((cur)=>cur+1);
          
        }, 100);


        // setheads(heads+1);

      } else {
      
        result="HEAD";
        setTimeout(function () {
          coin.style.animation = "spin-tails 3s forwards";
          
          setheads((cur)=>cur+1);
        }, 100);

        // settails(tails+1);
      }
      setTimeout(function () {
        showPopUp(result);
       }, 1500);
      // console.log(output);
      // disableButton();
    }

  };

  const showPopUp = (result) => {
    swal(
      {
        title: `Yay! 🤘 You Got ${result} `,
        text: `Can you predict the next combination 🤔?`,
        buttons: {
          cancel: true,
          roll: {
            text: "Toss Again",
            value: "Toss",
            className: 'toss-again-btn'
          },
        },

      }).then((Toss) => {
        if (Toss) {
          tossCoin();
        }
      })

  }

  // function showPopUp(){
  //   console.log("ii");
  //  let cont= document.getElementById('popUpContainer');
  //  console.log(cont)
  //  cont.style.display="block";
  // }


  // const flipCoin = () => {
  //   let audio = document.getElementById('coinAudio')
  //   console.log(audio, "{saaddddd");
  //   coin = document.querySelector(".coin");
  //   flipBtn = document.querySelector("#flip-button");
  //   resetBtn = document.querySelector("#reset-button");
  //   console.log('hiii');
  //   console.log(coin);
  //   audio.play();
  //   if (coin) {
  //     let i = Math.floor(Math.random() * 2);
  //     coin.style.animation = "none";
  //     if (i) {
  //       setTimeout(function () {
  //         coin.style.animation = "spin-heads 3s forwards";
  //       }, 100);


  //       // setheads(heads+1);

  //     } else {
  //       setTimeout(function () {
  //         coin.style.animation = "spin-tails 3s forwards";
  //       }, 100);

  //       // settails(tails+1);
  //     }
  //     setTimeout(showPopUp, 3000);
  //     // console.log(output);
  //     // disableButton();
  //   }
  // };

  const reset = () => {
    coin = document.querySelector(".coin");
    if (coin) {
      console.log('coin')
      coin.style.animation = "none";
      setheads(0);
      settails(0);
      // updateStats();
    }
  };

  // function updateStats() {
  //   document.querySelector("#heads-count").textContent = `Heads: ${heads}`;
  //   document.querySelector("#tails-count").textContent = `Tails: ${tails}`;

  // }

  function disableButton() {
    flipBtn.disabled = true;
    setTimeout(function () {
      flipBtn.disabled = false;
    }, 3000);
  }



  useEffect(() => {
    document.querySelector("#heads-count").textContent = `Heads: ${heads}`;

  }, [heads]);

  useEffect(() => {
    document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
  }, [tails])


  useEffect(() => {
    flipBtn = document.querySelector("#flip-button");
    // flipBtn.disabled=true;
  })





  return (
    <>
      <audio id="coinAudio" src={Flip} style={{ display: "none" }} />
      {/* { flipBtn = document.querySelector("#flip-button")} */}
      <Board inst={inst} setOutput={setOutput} level={1} setheads={setheads} settails={settails} heads={heads} tails={tails} flip={flipBtn}></Board>
      <div className="container">

        <div className="coinContainer">
          <div className="coin" id="coin">
            <div className="heads">
              <img src={tail}/>
            </div>
            <div className="tails">
              <img src={head} />
            </div>
          </div>
        </div>
        <div className="stats">
          <p id="heads-count">Heads: 0</p>
          <p id="tails-count">Tails: 0</p>
        </div>
        <div className="buttons">
          <button id="flip-button" onClick={tossCoin}>
            Flip Coin
          </button>
          <button id="reset-button" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};
export default Coin;
