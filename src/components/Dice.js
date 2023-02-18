import React from "react";
import "../css/Dice.css";
import Board from "./Board";
import swal from "sweetalert";
import diceroll from "../components/sounds/dice.mp3"

const Dice = () => {
  let inst = [
    {
      id: 0,
      type: "general",
      value: "Hello, Welcome again ! <br/> Let's Explore Single dice roll❤",
      audiosrc: "Hello, Welcome again ! <br/> Let's Explore Single dice roll",
    },
    {
      id: 1,
      type: "general",
      value:"What do you think? <br/> A fair dice below on roll will show what number? <br> Have a 🎲 roll and check 🤞",
      audiosrc: "What do you think? <br/> A fair dice below on roll will show what number? <br> Have a roll and check ",
    },
    {
      id: 2,
      type: "Question",
      values: {
        Question: "How many possible outcomes are there when we roll a dice?",
        Choices: [5, 6, 10, 12],
        correctAns: 6,
        justification:`Dice has 6 faces they are numbered from 1 to 6 So if you roll a dice, only number between 1 to 6 can appear \n hence, there are 6 possible outcomes
        \n Now select the correct answer.. 💁✌️`,
        audiosrc: "How many possible outcomes are there when we roll a dice?",
      },
      
    },
    {
      id: 3,
      type: "Question",
      values:{
        Question: "Now Tell me What are the outcomes when you roll a 🎲?",
        Choices: ["{1,2,3,4,5,6}","{7,8,9,10,12,5}","{1,4,5,10,8,9,7}","{1,2,3,4,5,6,7}"],
        correctAns: "{1,2,3,4,5,6}",
        justification:`Dice has 6 sides numbered from 1 to 6 \n Hence the set of numbers that can appear is {1,2,3,4,5,6}\n Now Select the correct answer.. 💁✌️`,
        audiosrc: "Now Tell me What are the outcomes when you roll a dice ?",
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
      },
      audiosrc: `Let's calculate the probability of getting a number 6. The set of possible numbers when we roll a dice is {1,2,3,4,5,6}. This is called a Sample Space which is denoted by S. Now, let A be the event of getting number six. There is only one event for getting and output as six`,  
      
    },
    {
      id: 5,
      type: "Question",
      values:{
        Question: "What is the probabiltiy of getting number 4 on 🎲?",
        Choices: ["1/2","1","1/6","0"],
        correctAns: "1/6",
        justification:`HINT:- \n Number of possible outcomes in single roll of 🎲 is 6 \n Set of numbers that can appear in single roll is {1,2,3,4,5,6}\n Now Select the correct answer.. 💁✌️`,
        audiosrc: "What is the probabiltiy of getting number 4 on dice?",
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
      },
      audiosrc: "What will be the probability of not getting 6 ? The set of possible numbers when we roll a dice is {1,2,3,4,5,6}. Hence, Sample Space is equal to {1,2,3,4,5,6}. Now we know from previous example that probability of getting 6 is 1 by 6 then probability of not getting 6 should be 1 - 1 by 6 that is 5 by 6 "
    },
    {
      id: 7,
      type: "Question",
      values:{
        Question: "What is the probabiltiy of not getting number 4 on 🎲?",
        Choices: ["1/2","5/6","1/6","0"],
        correctAns: "5/6",
        justification:`HINT:- \nProbability of getting 4 on 🎲 is 1/6\n Now Select the correct answer.. 💁✌️`,
        audiosrc: "What is the probabiltiy of not getting number 4 on dice?",
      }
    },
    {
      id:8,
      type:"end",
    }
  ];

  const rollDice = () => {
    let audio = document.getElementById('diceAudio')
    let dice = document.getElementById("dice");
    var outputDiv = document.getElementById("diceResult");
    audio.play();
    let result = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    dice.dataset.side = result;
    dice.classList.toggle("reRoll");

    console.log(result);

    outputDiv.classList.remove("reveal");
    outputDiv.classList.add("hide");
    //   outputDiv.innerHTML = "You've got " + result;
    setTimeout(function () {
      outputDiv.classList.add("reveal");
      
    // swal(`Yay! 🤘 You Got ${result} `, `Can you predict the next number on next 🎲 roll?`, "")
     showPopUp(result);
    }, 1500);

  };

  const showPopUp = (result)=>{
    swal(
      {
        title: `Yay! 🤘 You Got ${result} on 🎲`,
        text: `Can you predict the next number 🤔?`,
        buttons: {
          cancel: true,
          roll: {
            text: "Roll Again",
            value: "roll",
            className : 'roll-again-btn'
          },
        },
        
      }).then((roll)=>{
        if(roll){
            rollDice();
        }
      })
      
  }

  return (
    <>
      <audio id="diceAudio" src={diceroll} style={{display:"none"}}/>
      <Board inst={inst} level={3}></Board>
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

        <button onClick={rollDice} id="diceResult">
          Roll 🎲
        </button>
      </div>
    </>
  );
};

export default Dice;
