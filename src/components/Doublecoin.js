import React, { useState } from "react";
import "../css/Doublecoin.css";
import { useEffect } from "react";
import Board from "./Board";
import probFormula from '../components/images/probability-formula.jpg'
import coinChances from '../components/images/coinChances.jpg'
import comp from '../components/images/comp.jpeg'
import probLine from '../components/images/probLine.png'
import {returnUserInput} from './Popup'


const Doublecoin = () => {
  // var output = "";

  const[HH,setHH]=useState(0);
  const[TT,setTT]=useState(0);
  const[TH,setTH]=useState(0);
  const[HT,setHT]=useState(0);
  let coin1;
  let coin2;
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
    },
    {
      id: 1,
      type:'general',
      value: "What do you think? a fair coin toss will give head or tail? 🤔",
    },
    {
      id: 2,
      type: "general",
      task:true,
      value: "Not sure? Don't worry let's have a toss😥",
    },
    {
      id: 3,
      type:'general',
      task:true,
      value: `Oh it appeared <strong>${output} </strong> but how ?😯<br/> Was it predictable? Let's have another toss`,
    },
    {
      id: 4,
      type:'general',
      task:true,
      value: `Oh it appeared ${output} but how ? <br/>Is it predictable? 🧐 Let's toss one last time 🙂`,
    },
    {
      id: 5,
      type:'general',
      value: "Still not sure?😞 don't worry😇",
    },
    {
      id: 6,
      type:'general',
      value: `Were your guesses correct ❓ <br/> Let me tell You, all The outcomes are unpredictable !`,
    },
    {
      id: 7,
      type:'general',
      value: `Here comes the concept of probabilty. <br/> "The Probability of an event is the value that tells how likely the event is going to happen"`,
    },
    {
      id: 8,
      type:'general',
      value: `Now questions is : <br/> How to calculate probability of an event ?`,
    },
    {
      id: 9,
      type:'general',
      value: `What are the possible outcomes when we toss a coin ?`,
    },
    {
      id: 10,
      type: "formula",
      image: coinChances,
      retain:false,
    },
    {
      id: 11,
      type: "formula",
      image: probFormula,
      retain:true,
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
      }
    },
    {
      id:13,
      type:"general",
      value:"Remember total probability of an even is: <br/> Sum of the probabilities of all possible outcomes"
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
        }
    },
    {
      id:15,
      type:'general',
      value:"Do you know? probabilities are complementary: <br/> P(HEAD)=1-P(NOT GETTING HEAD) <br/> P(HEAD)=1-P(GETTING TAIL)"
    },
    {
      id: 16,
      type: "formula",
      image:comp,
      retain:true,
    },
    {
      id:17,
      type:"general",
      value:"Probability is measured on the scale of 0 to 1<br/> Zero probability implies that there is no likelyhood that event is going to happen <br/> while a probability 1 indicates that event is certian to occur"

    },
    {
      id: 18,
      type: "formula",
      image:probLine,
      retain:true,
    },
  ];

  function showPopUp(){
    console.log("ii");
   let cont= document.getElementById('popUpContainer');
   console.log(cont)
   cont.style.display="block";
  }


  const flipCoin = () => {
    coin1 = document.getElementById("coin1");
    coin2 = document.getElementById("coin2");
    flipBtn = document.querySelector("#flip-button");
    resetBtn = document.querySelector("#reset-button");
    console.log('hiii');
    // console.log(coin);
    if (coin1 && coin2) {
      let i1 = Math.floor(Math.random() * 2);
      let i2 =  Math.floor(Math.random() * 2);
      coin1.style.animation = "none";
      coin2.style.animation = "none";
     // 00 01 10 11
    // head head
     if(i1===0 && i2===0){
        setTimeout(function () {
            console.log("tail tail")
           coin1.style.animation = "spin-heads 3s forwards";
           coin2.style.animation = "spin-heads 3s forwards";
        }, 100);
     }else if(i1===1 && i2===0){
        // tail head
        console.log("head tail")
        setTimeout(function () {
            coin1.style.animation = "spin-tails 3s forwards";
            coin2.style.animation = "spin-heads 3s forwards";
        }, 100);

     }else if(i1===0 && i2===1){
        // head tail
        console.log("tail head")
        setTimeout(function () {
            coin2.style.animation = "spin-tails 3s forwards";
            coin1.style.animation = "spin-heads 3s forwards";
        }, 100);

     }else{
        // tail tail
        console.log("head head ")
        setTimeout(function () {
            coin2.style.animation = "spin-tails 3s forwards";
            coin1.style.animation = "spin-tails 3s forwards";
        }, 100);
     }


    //   if (i1===0 && i2===0) {
    //     setTimeout(function () {
    //       coin.style.animation = "spin-heads 3s forwards";
    //     }, 100);
        
    //     // setheads(heads+1);
        
    //   } else {
    //     setTimeout(function () {
    //       coin.style.animation = "spin-tails 3s forwards";
    //     }, 100);
       
        // settails(tails+1);

    //   }
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
    //   setheads(0);
    //   settails(0);
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
       document.querySelector("#headhead-count").textContent = `HH : ${HH}`;
 
  }, [HH]);

  useEffect(() => {
    document.querySelector("#headtail-count").textContent = `HT : ${HT}`;

}, [HT]);

useEffect(() => {
    document.querySelector("#tailhead-count").textContent = `TH : ${TH}`;

}, [TH]);

useEffect(() => {
    document.querySelector("#tailtail-count").textContent = `TT : ${TT}`;

}, [TT]);


  useEffect(()=>{
    flipBtn = document.querySelector("#flip-button");
    // flipBtn.disabled=true;
  })





  return (
    <div>
      {/* { flipBtn = document.querySelector("#flip-button")} */}
      <Board inst={inst} level={2} setOutput={setOutput} flip={flipBtn}></Board>
      <div className="container">
        <div className="coinContainer">
        <div className="coin" id="coin1">
          <div className="heads">
            <img src="https://jkscoinworld.com/wp-content/uploads/2018/05/2013-a-1.jpg" />
          </div>
          <div className="tails">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPXdeMWZbX3Vk9Qc3tgGtERTCZNe5z1OyzXN8ZejoIrXgA95Wi4mfTV3BgGr0lGHO5I4&usqp=CAU" />
          </div>
        </div>
        <div className="coin"  id="coin2">
          <div className="heads">
            <img src="https://jkscoinworld.com/wp-content/uploads/2018/05/2013-a-1.jpg" />
          </div>
          <div className="tails">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPXdeMWZbX3Vk9Qc3tgGtERTCZNe5z1OyzXN8ZejoIrXgA95Wi4mfTV3BgGr0lGHO5I4&usqp=CAU" />
          </div>
        </div>
        </div>
        <div className="statscont">
        <div className="col1"> 
          <p id="headhead-count">HH : 0</p>
          <p id="tailtail-count">T T : 0</p>
        </div>
        <div className="col2">
          <p id="headtail-count">HT : 0</p>
          <p id="tailhead-count">TH : 0</p>
        </div>
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
export default Doublecoin;
