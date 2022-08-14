import React from "react";
import Quizcontainer from "../components/Quizcontainer";

function Questions(props) {
  let quest = [
    {
      id: 0,
      type: "mcq",
      question: "What is Probability of getting Head ?",
      option: {
        1: "0",
        2: "1",
        3: "1/2",
        4: "3/4",
      },
      correct: {
        value: "1/2",
      },
      explanation: {
        value: `We know that the coin has two sides head (H) and tail (T) <br/> 
          So the possible outcomes are Xm. (where x is the number of outcomes when a coin is tossed and m is the number of coins) <br/>      
          ∴ The possible outcomes are H and T.  <br/> 
          Total possible outcomes =2 <br/> 
          ∴ Chances of getting a tail = 1(since there is a single coin) <br/> 
          By using the formula, <br/> 
          Probability p () = number of favorable outcomes/ total number of outcomes <br/> 
          ∴ Probability of getting a tail p (T) = chances/total number of outcomes = ½ <br/>`,
      },
    },
    {
      id: 1,
      type: "mcq",
      question: "What is Probability of getting Tail ?",
      option: {
        1: "0",
        2: "1",
        3: "1/2",
        4: "3/4",
      },
      correct: {
        value: "1/2",
      },
      explanation: {
        value: `An event that will never be happened is known as the impossible event. <br/> 
          For example:- <br/> 
          Tossing double-headed coins and getting tails in an impossible event <br/> 
          rolling a die and getting number > 10 in an impossible outcome, etc.`,
      },
    },
    {
      id: 2,
      type: "mcq",
      question:
        "An event in the probability that will never be happened is called as -",
      option: {
        1: "Unsure event",
        2: "Sure event",
        3: "Possible event",
        4: "Impossible event",
      },
      correct: {
        value: "Impossible event",
      },
      explanation: {
        value: `An event that will never be happened is known as the impossible event. <br/> 
          For example :-<br/> 
          Tossing double-headed coins and getting tails in an impossible event <br/> 
          rolling a die and getting number > 10 in an impossible outcome, etc.`,
      },
    },
  ];

  let quest2 = [
    {
      id: 1,
      type: "mcq",
      question:
        "An event in the probability that will never be happened is called as -",
      option: {
        1: "Unsure event",
        2: "Sure event",
        3: "Possible event",
        4: "Impossible event",
      },
      correct: {
        value: "Impossible event",
      },
      explanation: {
        value: `An event that will never be happened is known as the impossible event. <br/> 
          For example :-<br/> 
          Tossing double-headed coins and getting tails in an impossible event <br/> 
          rolling a die and getting number > 10 in an impossible outcome, etc.`,
      },
    },

  ]




  return (
    <div>
      {props.level===1 &&
      <Quizcontainer quest={quest} />
      }

      {props.level===2 &&
      <Quizcontainer quest={quest2} />
      }


      
    </div>
  );
}

export default Questions;
