import React, { useState } from "react";
import "../css/Doublecoin.css";
import { useEffect } from "react";
import Board from "./Board";
import probFormula from '../components/images/probability-formula.jpg'
import twocoinchances from '../components/images/twocoin.gif'
import comp from '../components/images/comp.jpeg'
import probLine from '../components/images/probLine.png'
import {returnUserInput} from './Popup'
import Flip from "../components/sounds/coin1.mp3"
import swal from "sweetalert";

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
      value: "Welcome again ❤ <br/> I hope you have understood probabilities of getting HEAD and TAIL when sigle fair coin tossed ",
      audiosrc: "Welcome again!! <br/> I hope you have understood probabilities of getting HEAD and TAIL when sigle fair coin is tossed ",
    },
    {
      id: 1,
      type:'general',
      value: "Now consider the case when two fair coins are tossed simultaneously. <br/> What will be the output?🤔 <br/> Not sure? Don't worry let's have a toss😥 ",
      audiosrc: "Now consider the case when two fair coins are tossed simultaneously. <br/> What will be the output?  Not sure? Don't worry let's have a toss😥 ",
    },
    {
      id: 2,
      type:'general',
      value: `Were your guesses correct ❓  <br/> Let me tell You, Here also The outcomes are unpredictable !`,
      audiosrc: `Were your guesses correct ❓  <br/> Let me tell You, Here also The outcomes are unpredictable !`,
    },
    {
      id: 3,
      type:'general',
      value: `As you know, <br/> "The Probability of an event is the value that tells how likely the event is going to happen"`,
      audiosrc: `As you know, <br/> "The Probability of an event is the value that tells how likely the event is going to happen"`,
      
    },
    {
      id: 4,
      type:'general',
      value: `What are the possible outcomes when we toss two fair coins simultaneously ? <br/> Click next to Observe all possible outcomes 👇`,
      audiosrc: `What are the possible outcomes when we toss two fair coins simultaneously ? <br/> Click next to Observe all possible outcomes `,
    },
    {
      id: 5,
      type: "formula",
      image: twocoinchances,
      retain:true,
      audiosrc: `Image of two coin changes`
    },
    {
      id:6,
      type:"calculation",
      calculation:
      `<div class='calculationContainer'> 
      <h3 class="calcHeading">Probability of getting two heads in tossing two fair coins at same time :</h3> <br/>
      <p class="favText"> favourable outcome in toss : HEAD HEAD or HEAD TAIL or TAIL HEAD or TAIL TAIL => Number of favourable outcomes = 1 </p> <br/> 
      <p class="totalText">Total possible outcomes are : HEAD HEAD and HEAD TAIL and TAIL HEAD and TAIL TAIL  => Total Possible outcomes = 4 </p> <br/> 
      <p class="totalText"><strong>Sample Space = S = { (H,H) , (H,T) , (T,H) , (T,T) }</strong></p> <br/> 
      </div>      
      `,
      equations:{
        1:String.raw`P(HH)=\frac{Number(HH)}{Total(Outcomes)}=\frac{1}{4}`,
      },
      audiosrc:`What do you think will be the Probability of getting two heads in tossing two fair coins at same time. All the favourable outcome in toss are HEAD HEAD or HEAD TAIL or TAIL HEAD or TAIL TAIL but Number of favourable outcomes is equal to 1. Hence, probability of Head head is 1 by 4 `
    },
    {
      id:7,
      type:"calculation",
      calculation:`<div class='calculationContainer'> 
      <h3 class="calcHeading">similarly,</h3> 
      </div>  `
      ,
      equations:{
        1:String.raw`P(TT)=\frac{Number(TT)}{Total(Outcomes)}=\frac{1}{4}`,
        2:String.raw`P(HT)=\frac{Number(HT)}{Total(Outcomes)}=\frac{1}{4}`,
        3:String.raw`P(TH)=\frac{Number(TH)}{Total(Outcomes)}=\frac{1}{4}`,
      },
      audiosrc:'Similarly, Probability of getting tail tail , and probability of getting head tail and getting tail head is 1 by 4',
    },
    {
      id:8,
      type:"calculation",
      calculation:
        `<div class='calculationContainer'>
          <h3 class="calcHeading">Recollect, the total probability of all possible outcomes is always 1</h3> <br/>
          <p class="favText">Total probability of two fair coin toss : </p>
          </div>
        `,
        equations:{
          1:String.raw`P(HH)=\frac{1}{4}\ , \ P(TT)=\frac{1}{4}\ , \ P(HT)=\frac{1}{4}\ , \ P(TH)=\frac{1}{4}`,
          2:String.raw`P(HH)+P(TT)+P(HT)+P(TT)=\frac{1}{4}+\frac{1}{4}+\frac{1}{4}+\frac{1}{4}=1 `
        },
        audiosrc:"Total probability of two fair coin toss will be equal to sum of all 4 probabilities which is equal to 1",
    },
    {
      id:9,
      type:'general',
      value:"as we know that probabilities are complementary. <br/>  &nbsp&nbsp P(HH) = 1 - P(HH) ' <br/> &there4; P(HH) + P(HH) ' = 1 <br/>    ",
      audiosrc:"as we know that probabilities are complementary. <br/>  Hence, probability of Head head is equal to 1 minus probability of not Head head",
    },
    {
      id:10,
      type:"calculation",
      calculation:`<div class='calculationContainer'> 
      <p class="favText">We Know That,</p> <br/> 
      <p class="favText">Number of outcomes for (HH) = 1 </p> <br/> 
      <p class="favText">Total number of outcomes without HH = 3 </p> <br/> 
      <p class="favText">i.e  Number  of  outcomes for (HH)' = 3 </p> <br/> 
      <p class="favText">Total number of outcomes = 4  </p> <br/> 
      </div>  `
      ,
      equations:{
        1:String.raw`P(HH) = \frac{1}{4} P(HH)'=\frac{3}{4} `,
        2:String.raw`P(HH) + P(HH)' = \frac{1}{4} + \frac{3}{4} = 1`,
      },
      audiosrc:`We Know That, Number of outcomes for Head Head equal to 1. Hence, Number  of  outcomes for not Head head equal to 3. Therefore total probability equal to 1`,
      
    },
    {
      id:11,
      type:"general",
      value:"Remember... <br/> Probability is measured on the scale of 0 to 1<br/> Zero probability implies that there is no likelyhood that event is going to happen <br/> while a probability 1 indicates that event is certian to occur",
      audiosrc:"Remember, <br/> Probability is measured on the scale of 0 to 1.<br/> Zero probability implies that there is no likelyhood that event is going to happen. <br/> while a probability 1 indicates that event is certian to occur",

    },
    {
      id: 12,
      type: "formula",
      image:probLine,
      retain:true,
      audiosrc:'probability line image',
    },
    {
      id:13,
      type:"end",
    }
  ];


  const tossCoin = () => {
    let audio = document.getElementById('coinAudio');
    let result;
    coin1 = document.getElementById("coin1");
    coin2 = document.getElementById("coin2");
    flipBtn = document.querySelector("#flip-button");
    resetBtn = document.querySelector("#reset-button");
    console.log('hiii');
    audio.play();
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
            result="TAIL TAIL";
            
           coin1.style.animation = "spin-heads 3s forwards";
           coin2.style.animation = "spin-heads 3s forwards";
           setTT((curr)=>curr+1);
        }, 100);
     }else if(i1===1 && i2===0){
        // tail head
        result="HEAD TAIL";
        
        console.log("head tail")
        setTimeout(function () {
            coin1.style.animation = "spin-tails 3s forwards";
            coin2.style.animation = "spin-heads 3s forwards";
            setHT((curr)=>curr+1);
        }, 100);

     }else if(i1===0 && i2===1){
        // head tail
        console.log("tail head")
        result="TAIL HEAD";
        setTimeout(function () {
            coin2.style.animation = "spin-tails 3s forwards";
            coin1.style.animation = "spin-heads 3s forwards";
            setTH((curr)=>curr+1);
        }, 100);
       

     }else{
        // tail tail
        console.log("head head ")
        result="HEAD HEAD";
        setTimeout(function () {
            coin2.style.animation = "spin-tails 3s forwards";
            coin1.style.animation = "spin-tails 3s forwards";
            setHH((curr)=>curr+1);
        }, 100);
        
     }
    }
    setTimeout(function () {
     showPopUp(result);
    }, 1500);

  };

  const showPopUp = (result)=>{
    swal(
      {
        title: `Yay! 🤘 You Got ${result} `,
        text: `Can you predict the next combination 🤔?`,
        buttons: {
          cancel: true,
          roll: {
            text: "Toss Again",
            value: "Toss",
            className : 'toss-again-btn'
          },
        },
        
      }).then((Toss)=>{
        if(Toss){
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


  const flipCoin = () => {
    let audio = document.getElementById('coinAudio')
    coin1 = document.getElementById("coin1");
    coin2 = document.getElementById("coin2");
    flipBtn = document.querySelector("#flip-button");
    resetBtn = document.querySelector("#reset-button");
    console.log('hiii');
    audio.play();
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
      setHH(0);
      setTH(0);
      setTT(0);
      setHT(0);
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
       document.querySelector("#headhead-count").textContent = `HH :  ${HH}`;
 
  }, [HH]);

  useEffect(() => {
    document.querySelector("#headtail-count").textContent = `HT :  ${HT}`;

}, [HT]);

useEffect(() => {
    document.querySelector("#tailhead-count").textContent = `TH :  ${TH}`;

}, [TH]);

useEffect(() => {
    document.querySelector("#tailtail-count").textContent = `T T :  ${TT}`;

}, [TT]);


  useEffect(()=>{
    flipBtn = document.querySelector("#flip-button");
    // flipBtn.disabled=true;
  })





  return (
    <div>
      <audio id="coinAudio" src={Flip} style={{display:"none"}}/>
      {/* { flipBtn = document.querySelector("#flip-button")} */}
      <Board inst={inst} level={2} setOutput={setOutput} flip={flipBtn} HH={HH} HT={HT} TH={TH} TT={TT} setHH={setHH} setHT={setHT} setTT={setTT} setTH={setTH}></Board>
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
          <p id="headhead-count">HH : {HH}</p>
          <p id="tailtail-count">T T : {TT}</p>
        </div>
        <div className="col2">
          <p id="headtail-count">HT : {HT}</p>
          <p id="tailhead-count">TH : {TH}</p>
        </div>
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
    </div>
  );
};
export default Doublecoin;
