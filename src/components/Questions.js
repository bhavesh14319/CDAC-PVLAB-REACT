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
    {
      id: 3,
      type: "mcq",
      question: "The complement of P(A) is ? ",
      option: {
        1: "1-P(A)",
        2: "1+P(A)",
        3: "1/P(A)",
        4: "None of these",
      },
      correct: {
        value: "1-P(A)",
      },
      explanation: {
        value: `The complement of P(A) is 1 -P(A) <br/> 
        refer formula list on left side for reference `,
      },
    },
    {
      id: 4,
      type: "mcq",
      question:
        "The probability of all the events in a sample space adds up to ?",
      option: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
      },
      correct: {
        value: "1",
      },
      explanation: {
        value: `refer formula list on left side for reference `,
      },
    },
    {
      id: 5,
      type: "mcq",
      question: "If P(E) = 0.44, then P(not E) will be: ?",
      option: {
        1: "0.34",
        2: "0.12",
        3: "0.56",
        4: "0.4",
      },
      correct: {
        value: "0.56",
      },
      explanation: {
        value: `P(E) + P(E) ' = 1 <br/> use this`,
      },
    },
    {
      id: 6,
      type: "mcq",
      question: "If P(E) = 0.44, then P(not E) will be: ?",
      option: {
        1: "0.34",
        2: "0.12",
        3: "0.56",
        4: "0.4",
      },
      correct: {
        value: "0.56",
      },
      explanation: {
        value: `P(E) + P(E) ' = 1 <br/> use this`,
      },
    },
    {
      id: 7,
      type: "mcq",
      question: "What will be the probability of an impossible event ?",
      option: {
        1: "0",
        2: "1",
        3: "Infinity",
        4: "None Of These",
      },
      correct: {
        value: "0",
      },
      explanation: {
        value: `refer last image of formula list`,
      },
    },
    {
      id: 8,
      type: "mcq",
      question: "Which of the following can be the probability of an event ? ",
      option: {
        1: "-1.3",
        2: "004",
        3: "3/8",
        4: "10/7",
      },
      correct: {
        value: "3/8",
      },
      explanation: {
        value: `0 < P(E) < 1`,
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
    {
      id: 2,
      type: "mcq",
      question:
        "The probability of getting two tails when two coins are tossed is - ?",
      option: {
        1: "1/6",
        2: "1/4",
        3: "1/3",
        4: "1/2",
      },
      correct: {
        value: "1/4",
      },
      explanation: {
        value: `The sample space when two coins are tossed = (H, H), (H, T), (T, H), (T, T)
        <br/>
        So, n(S) = 4
        <br/>
        The event "E" of getting two tails (T, T) = 1
        <br/>
        So, n(E) = 1
        <br/>
        So, the probability of getting two tails, P (E) = n(E) / n(S) `,
      },
    },
  ];



  let quest3 = [
    {
      id: 1,
      type: "mcq",
      question:
        "The probability of getting number 10 when six sided dice is rolled is ?",
      option: {
        1: "1/6",
        2: "1/4",
        3: "0",
        4: "5/2",
      },
      correct: {
        value: "0",
      },
      explanation: {
        value: `Is there any side which is numbered zero on dice ? think and answer.`,
      },
    }
  ]

  
  let quest4 = [
    {
      id: 1,
      type: "mcq",
      question:
        "Two six-sided, fair dice are rolled. What are the probabilities of getting one even and one odd number?",
      option: {
        1: "1/6",
        2: "1/4",
        3: "1/2",
        4: "5/2",
      },
      correct: {
        value: "1/2",
      },
      explanation: {
        value: `Refer the possible combinations of numbers when two dice are tossed`,
      },
    }
  ]

  return (
    <div>
      {props.level === 1 && <Quizcontainer quest={quest} level={props.level} onStart={props.onStart}/>}

      {props.level === 2 && <Quizcontainer quest={quest2} level={props.level} onStart={props.onStart}/>}

      {props.level === 3 && <Quizcontainer quest={quest3}  level={props.level} onStart={props.onStart}/>}

      {props.level === 4 && <Quizcontainer quest={quest4} level={props.level} onStart={props.onStart}/>}
    </div>
  );
}

export default Questions;
