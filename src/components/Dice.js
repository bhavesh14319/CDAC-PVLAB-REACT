import React from "react";
import "../css/Dice.css";
import Board from "./Board";
import swal from "sweetalert";


const Dice = () => {
  let inst = [
    {
      id: 0,
      type: "general",
      value: "Hello, Welcome again ! <br/> Let's Explore Single dice roll❤",
    },
    {
      id: 1,
      type: "general",
      value:
        "What do you think? <br/> A fair dice below on roll will show what number? <br> Have a 🎲 roll and check 🤞",
    },
    {
      id: 2,
      type: "Question",
      values: {
        Question: "How many possible outcomes are there when we roll a dice?",
        Choices: [5, 6, 10, 12],
        correctAns: 6,
        justification:`Dice has 6 faces they are numbered from 1 to 6 So if you roll a dice, only number between 1 to 6 can appear \n hence, there are 6 possible outcomes
        \n Now select the correct answer.. 💁✌️`
      },
      
    },
    {
      id: 3,
      type: "Question",
      values:{
        Question: "Now Tell me What are the outcomes when you roll a 🎲?",
        Choices: ["{1,2,3,4,5,6}","{7,8,9,10,12,5}","{1,4,5,10,8,9,7}","{1,2,3,4,5,6,7}"],
        correctAns: "{1,2,3,4,5,6}",
        justification:`Dice has 6 sides numbered from 1 to 6 \n Hence the set of numbers that can appear is {1,2,3,4,5,6}\n Now Select the correct answer.. 💁✌️`
      }
    },
    {
      id:4,
      type:"calculation",
      calculation:
      `<div class='calculationContainer'> 
      <h3 class="calcHeading">Let's calculate the probability of getting a number 6</h3> <br/>
      <p class="favText"> The set of possible numbers when we roll a dice is {1,2,3,4,5,6}</p><br/>
      <p class="favText"> This set of numbers is called as SAMPLE SPACE denoted by S</p><br/>
      <p class="favText"> Hence S={1,2,3,4,5,6} & n(S)=6</p><br/>
      <p class="totalText"> &there4; Total Possible Outcomes are six : {1,2,3,4,5,6}</p> <br/> 
      <span><p>let A be the event of getting number 6</p></span> 
      <span><p>&there4; Number of possible outcomes for event A = 1 (only 6 can appear)</p></span> 
      </div>      
      `,
      equations:{
        1:String.raw`P(Event)=\frac{n(Event)}{n(s)}`,
        2:String.raw`P(A)=P(6)=\frac{n(A)}{n(s)}=\frac{1}{6}`
      }
    },
    {
      id: 5,
      type: "Question",
      values:{
        Question: "What is the probabiltiy of getting number 4 on 🎲?",
        Choices: ["1/2","1","1/6","0"],
        correctAns: "1/6",
        justification:`HINT:- \n Number of possible outcomes in single roll of 🎲 is 6 \n Set of numbers that can appear in single roll is {1,2,3,4,5,6}\n Now Select the correct answer.. 💁✌️`
      }
    },
    {
      id:6,
      type:"calculation",
      calculation:
      `<div class='calculationContainer'> 
      <h3 class="calcHeading">What will be the probability of not getting 6?</h3> <br/>
      <p class="favText"> The set of possible numbers when we roll a dice is {1,2,3,4,5,6}</p><br/>
      <p class="favText"> &there4; S(Sample Space)={1,2,3,4,5,6} & n(S)=6</p><br/> 
      <span><p>let A be the event of getting number 6</p></span> 
      <span><p>&there4; Number of possible outcomes for event A = 1 (only 6 can appear)</p></span> 
      <span><p>let A' be the event of not getting 6</p></span> 
      <span><p>As we know P(A)+P(A')=1 (explained in previous levels)</p></span>
      <span><p>there4;</p></span>  
      </div>      
      `,
      equations:{
        1:String.raw`P(A)=P(6)=\frac{n(A)}{n(s)}=\frac{1}{6}`,
        2:String.raw`P(A')=1-P(A)`,
        3:String.raw`P(A')=1-\frac{1}{6}=\frac{5}{6}`
      }
    },
    {
      id: 7,
      type: "Question",
      values:{
        Question: "What is the probabiltiy of not getting number 4 on 🎲?",
        Choices: ["1/2","5/6","1/6","0"],
        correctAns: "5/6",
        justification:`HINT:- \nProbability of getting 4 on 🎲 is 1/6\n Now Select the correct answer.. 💁✌️`
      }
    },
    //     {
    //       id: 1,
    //       type:'general',
    //       value: "What do you think? a fair coin toss will give head or tail? 🤔",
    //     },
    //     {
    //       id: 2,
    //       type: "general",
    //       task:true,
    //       value: "Not sure? Don't worry let's have a toss😥",
    //     },
    //     {
    //       id: 3,
    //       type:'general',
    //       task:true,
    //       value: `Oh it appeared <strong></strong> but how ?😯<br/> Was it predictable? Let's have another toss`,
    //     },
    //     {
    //       id: 4,
    //       type:'general',
    //       task:true,
    //       value: `Oh it appeared but how ? <br/>Is it predictable? 🧐 Let's toss one last time 🙂`,
    //     },
    //     {
    //       id: 5,
    //       type:'general',
    //       value: "Still not sure?😞 don't worry😇",
    //     },
    //     {
    //       id: 6,
    //       type:'general',
    //       value: `Were your guesses correct ❓ <br/> Let me tell You, all The outcomes are unpredictable !`,
    //     },
    //     {
    //       id: 7,
    //       type:'general',
    //       value: `Here comes the concept of probabilty. <br/> "The Probability of an event is the value that tells how likely the event is going to happen"`,
    //     },
    //     {
    //       id: 8,
    //       type:'general',
    //       value: `Now questions is : <br/> How to calculate probability of an event ?`,
    //     },
    //     {
    //       id: 9,
    //       type:'general',
    //       value: `What are the possible outcomes when we toss a coin ?`,
    //     },
    //     {
    //       id: 10,
    //       type: "formula",
    //       image: coinChances,
    //       retain:false,
    //     },
    //     {
    //       id: 11,
    //       type: "formula",
    //       image: probFormula,
    //       retain:true,
    //     },
    //     {
    //       id:12,
    //       type:"calculation",
    //       // value: {
    //       //   heading : "Probability of head and tail in single toss :",
    //       //   favourable : "favourable outcome in one toss : Head or Tail",
    //       //   Total : "Total possible outcomes are two : Head and Tail",
    //       //   noOfFavourable : 1,
    //       //   noOfTotal : 2
    //       // },
    //       // <div class="calc"> &there4; <span class='calcLHS'>P(HEAD) = </span> <div class="fraction"> <p class="row1"> 1 </p> <p class="row2"> 2 </p> </div> &
    //       // <span class='calcLHS'>P(TAIL) = </span>  <div class="fraction"> <p class="row1">1</p> <p class="row2">2</p> </div>
    //       calculation:
    //       `<div class='calculationContainer'>
    //       <h3 class="calcHeading">Probability of head and tail in single toss :</h3> <br/>
    //       <p class="favText"> favourable outcome in one toss : Head or Tail => Number of favourable outcomes = 1 </p> <br/>
    //       <p class="totalText">Total possible outcomes are two : Head and Tail => Total Possible outcomes = 2 </p> <br/>
    //       <span> &there4; <p>  Getting head is as likely as getting tail</p> </span>
    //       </div>
    //       `,
    //       equations:{
    //         1:String.raw`P(HEAD)=\frac{1}{2}`,
    //         2:String.raw`P(TAIL)=\frac{1}{2}`
    //       }
    //     },
    //     {
    //       id:13,
    //       type:"general",
    //       value:"Remember total probability of an even is: <br/> Sum of the probabilities of all possible outcomes"
    //     },
    //     {
    //       id:14,
    //       type:"calculation",
    // //       <div class="calc">
    // //       &#x2235; <span class='calcLHS'>P(HEAD) = </span> <div class="fraction"> <p class="row1"> 1 </p> <p class="row2"> 2 </p> </div>
    // //      &
    // //      <span class='calcLHS'>P(TAIL) = </span> <div class="fraction"> <p class="row1">1</p> <p class="row2">2</p> </div> <br>
    // // </div>
    // // <div class='calc'> <p class='calcLHS'>P(HEAD)+p(TAIL) =  <div class="fraction"> <p class="row1">1</p> <p class="row2">2</p> </div>  + &nbsp; <div class="fraction"> <p class="row1">1</p> <p class="row2">2</p> </div> = 1 </p></div>
    //       calculation:
    //         `<div class='calculationContainer'>
    //           <h3 class="calcHeading">Total probability of coin toss :</h3> <br/>
    //           <p class="totalText">Total possible outcomes are two : Head and Tail</p> <br/>
    //         `,
    //         equations:{
    //           1:String.raw`P(HEAD)=\frac{1}{2}`,
    //           2:String.raw`P(TAIL)=\frac{1}{2}`,
    //           3:String.raw`P(HEAD)+P(TAIL)=\frac{1}{2}+\frac{1}{2}= 1`
    //         }
    //     },
    //     {
    //       id:15,
    //       type:'general',
    //       value:"Do you know? probabilities are complementary: <br/> P(HEAD)=1-P(NOT GETTING HEAD) <br/> P(HEAD)=1-P(GETTING TAIL)"
    //     },
    //     {
    //       id: 16,
    //       type: "formula",
    //       image:comp,
    //       retain:true,
    //     },
    //     {
    //       id:17,
    //       type:"general",
    //       value:"Probability is measured on the scale of 0 to 1<br/> Zero probability implies that there is no likelyhood that event is going to happen <br/> while a probability 1 indicates that event is certian to occur"

    //     },
    //     {
    //       id: 18,
    //       type: "formula",
    //       image:probLine,
    //       retain:true,
    //     },
  ];

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
      
    swal(`Yay! 🤘 You Got ${result} `, `Can you predict the next number on next 🎲 roll?`, "")
    }, 1500);



  };

  return (
    <>
      <Board inst={inst}></Board>
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

        <button onClick={roll} id="diceResult">
          Roll 🎲
        </button>
      </div>
    </>
  );
};

export default Dice;
