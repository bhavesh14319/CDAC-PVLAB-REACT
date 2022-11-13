import React, { useState } from "react";
import "../css/Coin.css";
import { useEffect } from "react";
import Board from "./Board";
import probFormula from '../components/images/probability-formula.jpg'
import coinChances from '../components/images/coinChances.jpg'
import comp from '../components/images/comp.jpeg'
import probLine from '../components/images/probLine.png'
import {returnUserInput} from './Popup'


const Coin = () => {
  // var output = "";

  const[heads,setheads]=useState(0);
  const[tails,settails]=useState(0);
  let coin;
  let flipBtn;
  let disableFlip;
  let resetBtn;
  
  
  const[output,setOutput]=useState("");

  let inst = [
    {
      id:0,
      type:'general',
      value: "Hello welcome to lab <br/> let's start ❤",
      audiosrc: "Hello welcome to lab let's start",
    },
    {
      id: 1,
      type:'general',
      value: "What do you think? a fair coin toss will give head or tail? 🤔",
      audiosrc:"What do you think? a fair coin toss will give head or tail?"
    },
    {
      id: 2,
      type: "general",
      task:true,
      value: "Not sure? Don't worry let's have a toss😥",
      audiosrc:"Not sure? Don't worry let's have a toss"
    },
    {
      id: 3,
      type:'general',
      task:true,
      value: `Oh it appeared <strong>${output} </strong> but how ?😯<br/> Was it predictable? Let's have another toss`,
      audiosrc:`Oh it appeared <strong>${output} </strong> but how ? <br/> Was it predictable? Let's have another toss`
    },
    {
      id: 4,
      type:'general',
      task:true,
      value: `Oh it appeared ${output} but how ? <br/>Is it predictable? 🧐 Let's toss one last time 🙂`,
      audiosrc:`Oh it appeared ${output} but how ? <br/>Is it predictable? Let's toss one last time`
    },
    {
      id: 5,
      type:'general',
      value: "Still not sure?😞 don't worry😇",
      audiosrc: "Still not sure? don't worry",
    },
    {
      id: 6,
      type:'general',
      value: `Were your guesses correct ❓ <br/> Let me tell You, all The outcomes are unpredictable !`,
      audiosrc: `Were your guesses correct? <br/> Let me tell You, all The outcomes are unpredictable !`,
    },
    {
      id: 7,
      type:'general',
      value: `Here comes the concept of probabilty. <br/> "The Probability of an event is the value that tells how likely the event is going to happen"`,
      audiosrc: `Here comes the concept of probabilty. <br/> "The Probability of an event is the value that tells how likely the event is going to happen"`,
    },
    {
      id: 8,
      type:'general',
      value: `Now questions is : <br/> How to calculate probability of an event ?`,
      audiosrc: `Now questions is : <br/> How to calculate probability of an event ?`,
    },
    {
      id: 9,
      type:'general',
      value: `What are the possible outcomes when we toss a coin ?`,
      audiosrc: `What are the possible outcomes when we toss a coin ?`,
    },
    {
      id: 10,
      type: "formula",
      image: coinChances,
      retain:false,
      audiosrc: `probability image`,
    },
    {
      id: 11,
      type: "formula",
      image: probFormula,
      retain:true,
      audiosrc: `probability image`,
    },
    {
      id:12,
      type:"calculation",
      // value: {
      //   heading : "Probability of head and tail in single toss :",
      //   favourable : "favourable outcome in one toss : Head or Tail",
      //   Total : "Total possible outcomes are two : Head and Tail",
      //   noOfFavourable : 1,
      //   noOfTotal : 2
      // },
      // <div class="calc"> &there4; <span class='calcLHS'>P(HEAD) = </span> <div class="fraction"> <p class="row1"> 1 </p> <p class="row2"> 2 </p> </div> &  
      // <span class='calcLHS'>P(TAIL) = </span>  <div class="fraction"> <p class="row1">1</p> <p class="row2">2</p> </div> 
      calculation:
      `<div class='calculationContainer'> 
      <h3 class="calcHeading">Probability of head and tail in single toss :</h3> <br/>
      <p class="favText"> favourable outcome in one toss : Head or Tail => Number of favourable outcomes = 1 </p> <br/> 
      <p class="totalText">Total possible outcomes are two : Head and Tail => Total Possible outcomes = 2 </p> <br/> 
      <span> &there4; <p>  Getting head is as likely as getting tail</p> </span> 
      </div>      
      `,
      equations:{
        1:String.raw`P(HEAD)=\frac{1}{2}`,
        2:String.raw`P(TAIL)=\frac{1}{2}`
      },
      audiosrc:"Probability of head and tail in single toss. favourable outcome in one toss are Head or Tail Therefore total possible outcomes are two that are Head and Tail. Hence, Probability of head is equal to number of favourable outcomes upon total number of outcomes which is equal to one upon two and probability of tail is also one upon two. and hence, Getting head is as likely as getting tail",
    },
    {
      id:13,
      type:"general",
      value:"Remember total probability of an event is: <br/> Sum of the probabilities of all possible outcomes",
      audiosrc:"Remember total probability of an event is: <br/> Sum of the probabilities of all possible outcomes",
    },
    {
      id:14,
      type:"calculation",
//       <div class="calc">
//       &#x2235; <span class='calcLHS'>P(HEAD) = </span> <div class="fraction"> <p class="row1"> 1 </p> <p class="row2"> 2 </p> </div> 
//      &  
//      <span class='calcLHS'>P(TAIL) = </span> <div class="fraction"> <p class="row1">1</p> <p class="row2">2</p> </div> <br>
// </div>
// <div class='calc'> <p class='calcLHS'>P(HEAD)+p(TAIL) =  <div class="fraction"> <p class="row1">1</p> <p class="row2">2</p> </div>  + &nbsp; <div class="fraction"> <p class="row1">1</p> <p class="row2">2</p> </div> = 1 </p></div>
      calculation:
        `<div class='calculationContainer'>
          <h3 class="calcHeading">Total probability of coin toss :</h3> <br/>
          <p class="totalText">Total possible outcomes are two : Head and Tail</p> <br/>
        `,
        equations:{
          1:String.raw`P(HEAD)=\frac{1}{2}`,
          2:String.raw`P(TAIL)=\frac{1}{2}`,
          3:String.raw`P(HEAD)+P(TAIL)=\frac{1}{2}+\frac{1}{2}= 1`
        },
        audiosrc: "there are only two possible outcomes, head and tail, both of them having equal probability. Sum of their probabilities is equal to 1",
    },
    {
      id:15,
      type:'general',
      value:"Do you know? probabilities are complementary: <br/> P(HEAD)=1-P(NOT GETTING HEAD) <br/> P(HEAD)=1-P(GETTING TAIL)",
      audiosrc: "Do you know? probabilities are complementary: <br/> P(HEAD)=1-P(NOT GETTING HEAD) <br/> P(HEAD)=1-P(GETTING TAIL)",
    },
    {
      id: 16,
      type: "formula",
      image:comp,
      retain:true,
      audiosrc: `probability image`,
    },
    {
      id:17,
      type:"general",
      value:"Probability is measured on the scale of 0 to 1<br/> Zero probability implies that there is no likelyhood that event is going to happen <br/> while a probability 1 indicates that event is certian to occur",
      audiosrc: "Probability is measured on the scale of 0 to 1<br/> Zero probability implies that there is no likelyhood that event is going to happen <br/> while a probability 1 indicates that event is certian to occur",
    },
    {
      id: 18,
      type: "formula",
      image:probLine,
      retain:true,
      audiosrc: `probability image`,
    },
  ];

  function showPopUp(){
    console.log("ii");
   let cont= document.getElementById('popUpContainer');
   console.log(cont)
   cont.style.display="block";
  }


  const flipCoin = () => {
    coin = document.querySelector(".coin");
    flipBtn = document.querySelector("#flip-button");
    resetBtn = document.querySelector("#reset-button");
    console.log('hiii');
    console.log(coin);
    if (coin) {
      let i = Math.floor(Math.random() * 2);
      coin.style.animation = "none";
      if (i) {
        setTimeout(function () {
          coin.style.animation = "spin-heads 3s forwards";
        }, 100);
        
        // setheads(heads+1);
        
      } else {
        setTimeout(function () {
          coin.style.animation = "spin-tails 3s forwards";
        }, 100);
       
        // settails(tails+1);

      }
      setTimeout(showPopUp, 3000);
      // console.log(output);
      // disableButton();
    }
  };

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
  
  useEffect(()=>{
       document.querySelector("#tails-count").textContent = `Tails: ${tails}`;
  },[tails])


  useEffect(()=>{
    flipBtn = document.querySelector("#flip-button");
    // flipBtn.disabled=true;
  })





  return (
    <div>
      {/* { flipBtn = document.querySelector("#flip-button")} */}
      <Board inst={inst} setOutput={setOutput} level={1} setheads={setheads} settails={settails} heads={heads} tails={tails} flip={flipBtn}></Board>
      <div className="container">
        <div className="coinContainer">
        <div className="coin" id="coin">
          <div className="heads">
            <img src="https://jkscoinworld.com/wp-content/uploads/2018/05/2013-a-1.jpg" />
          </div>
          <div className="tails">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPXdeMWZbX3Vk9Qc3tgGtERTCZNe5z1OyzXN8ZejoIrXgA95Wi4mfTV3BgGr0lGHO5I4&usqp=CAU" />
          </div>
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
