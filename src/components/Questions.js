import React from "react";
import  Quizcontainer from "../components/Quizcontainer"

function Questions() {
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
           value:"1/2",
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
           value:"1/2",
        },
      }
    ];
  return <div><Quizcontainer quest={quest}/></div>;
}

export default Questions;
