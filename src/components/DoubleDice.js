import React from "react";
import swal from "sweetalert";
import "../css/DoubleDice.css";
import Board from "./Board";
import combinations from '../components/images/combinations.jpg'
import probFormula from '../components/images/probability-formula.jpg'
const DoubleDice = () => {

  const rollDice = () => {
    let dice1 = document.querySelector(".dice1");
    let dice2 = document.querySelector(".dice2");
    var outputDiv = document.getElementById("diceResult1");

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
      showPopUp(result1,result2);
    // swal(`Yay! 🤘 You Got ${result1} on first 🎲 and ${result2} on second 🎲 `, `Can you predict the next combination 🤔?`, "")
    }, 1500);

    

  };

  let inst = [
    {
      id: 0,
      type: "general",
      value: "Hello, Welcome again ! <br/> Let's Explore Single dice roll❤",
      audiosrc: "Hello, Welcome again ! <br/> Let's Explore Double dice roll❤",
    },
    {
      id: 1,
      type: "general",
      task:true,
      value: "Roll Both the dice below and observe 🤨",
      audiosrc: "Roll Both the dice below and observe",
    },
    {
      id: 3,
      type: "general",
      task:true,
      value: "What are the possible combination?<br/> were you able to guess next combinations correctly? ",
      audiosrc: "What are the possible combination? were you able to guess next combinations correctly?",
    },
    {
      id: 4,
      type: "general",
      task:true,
      value: "Note,each dice has 6 sides having numbers 1,2,3,4,5 & 6 <br/>thus, the possible combinations that we can are (1,1),(1,2),(1,3),(1,4) and so on... <br/>  <strong>think over it</strong>  ",
      audiosrc: "Note,each dice has 6 sides having numbers 1,2,3,4,5 & 6 <br/>thus, the possible combinations that we can are (1,1),(1,2),(1,3),(1,4) and so on... <br/>  <strong>think over it</strong>  ",
    },
    {
      id: 5,
      type: "Question",
      values:{
        Question: "How many possible combinations you can get on rolling two dice at a time?",
        Choices: ["6","12","18","36"],
        correctAns: "36",
        justification:`Each Dice has 6 sides numbered from 1 to 6 \n Hence the set of combinations that can appear are {(1,1),(1,2),(1,3),(1,4),(1,6),... till (6,6)}\n where, (i,j) represents we got number i on dice1 and j on dice2 \n Now Select the correct answer.. 💁✌️`,
        audiosrc: "Now Tell me What are the outcomes when you roll a ?",
      }
    },
    {
      id: 6,
      type: "general",
      task:true,
      value: "Observe the possible combinations in next slide ",
      audiosrc: "Understand the possible combinations in next slide",
    },
    {
      id:7,
      type: "formula",
      image: combinations,
      retain:true,
      audiosrc:`Image of formula of probability`,
    },
    {
      id:8,
      type: "formula",
      image: probFormula,
      retain:true,
      audiosrc:`Image of formula of probability`,
    },
    {
      id: 8,
      type: "Question",
      values:{
        Question: "What is the probability of getting same number on both dice?",
        Choices: ["1/5","5/36","1","6/36"],
        correctAns: "6/36",
        justification:`Find out the number of possible combinations where numbers on both dice are same \n then select the right answer \n refer the possible outcomes in the image shown alongside`,
        audiosrc: "Now Tell me What are the outcomes when you roll a ?",
      }
    },
    {
      id: 9,
      type: "Question",
      values:{
        Question: "Now can you find probability of not getting same numbers on both dice?",
        Choices: ["1/5","5/36","5/6","6/36"],
        correctAns: "5/6",
        justification:`Probability of getting same numbers in 1/6 \n also, you know probabilities are complementary \n i.e P(A)+P(A')=1 \n now select correct answer`,
        audiosrc: "Now Tell me What are the outcomes when you roll a ?",
      }
    },
    {
      id: 9,
      type: "Question",
      values:{
        Question: `On Rolling Below dice what output do you get? what is its probability?`,
        Choices: ["1/5","5/36","1/36","6/36"],
        correctAns: "1/36",
        justification:`Total possible combinations are 36 \n also, we get 1 combination with each roll \n i.e P(A) = number of outcomes in A /  total possible outcomes \n now select correct answer`,
        audiosrc: "Now Tell me What are the outcomes when you roll a ?",
      }
    },

    {
      id:10,
      type:"calculation",
      calculation:
      `<div class='calculationContainer'> 
      <h3 class="calcHeading">Let's calculate the probability of getting a sum of numbers on dice > 5 </h3> <br/>
      <p class="favText"> The set total of possible combination when we roll a dice is {(1,1),(1,2),(1,3),(1,4),...,(6,5),(6,6)}</p><br/>
      <p class="favText"> This set of numbers is called as SAMPLE SPACE denoted by S</p><br/>
      <p class="favText"> Hence {(1,1),(1,2),(1,3),(1,4),...,(6,5),(6,6)} (Refer table alongside) & n(S)=36</p><br/>
      <p class="totalText"> &there4; Total Possible Outcomes are  : 36</p> <br/> 
      <span><p>let A be the event of getting sum of numbers > 5</p></span> 
      <span><p>&there4; Number of possible outcomes for event A = 26 (Refer table alongside)</p></span> 
      </div>      
      `,
      equations:{
        1:String.raw`P(Event)=\frac{n(Event)}{n(s)}`,
        2:String.raw`P(A)=P(sum>5)=\frac{n(A)}{n(s)}=\frac{26}{36}`
      },
      audiosrc: `Let's calculate the probability of getting a number 6. The set of possible numbers when we roll a dice is {1,2,3,4,5,6}. This is called a Sample Space which is denoted by S. Now, let A be the event of getting number six. There is only one event for getting and output as six`,  
      
    },

    {
      id: 10,
      type: "Question",
      values:{
        Question: `How many possible outcomes can we get on rolling two dice where of sum of numbers we get is less than 10?`,
        Choices: ["30","15","25","36"],
        correctAns: "30",
        justification:`Refer the outcomes combination image shown alongside`,
        audiosrc: "Now Tell me What are the outcomes when you roll a ?",
      }
    },

    {
      id: 11,
      type: "Question",
      values:{
        Question: `What is the probability of getting sum of two numbers greater than 10 on rolling two dice?`,
        Choices: ["1/6","30/36","5/6","1/36"],
        correctAns: "1/6",
        justification:`Total outcomes where sum of numbers is less than 10 are 30 \n thus, you can get the probability of getting sum < 10 \n also, probabilites are complementary \n i.e P(sum > 10)= 1 - P(sum < 10) `,
        audiosrc: "Now Tell me What are the outcomes when you roll a ?",
      }
    },
    {
      id:12,
      type:"end",
    },

  ]

   


      const showPopUp = (result1,result2)=>{
        swal(
          {
            title: `Yay! 🤘 You Got ${result1} on first 🎲 and ${result2} on second 🎲 `,
            text: `Can you predict the next combination 🤔?`,
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

    <Board inst={inst} level={4}></Board>

    <div className="dbl-dice-container">
      {" "}
      <div className="diceContainer1" style={{borderTopLeftRadius:"20px"}}>
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
      </div>


      <div className="diceContainer1" style={{borderTopRightRadius:"20px"}}>
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

        
      </div>
      <button onClick={rollDice} id="diceResult1"  className="roll-btn">
          Roll 🎲
        </button>
    </div>

    </>
  );
};

export default DoubleDice;
