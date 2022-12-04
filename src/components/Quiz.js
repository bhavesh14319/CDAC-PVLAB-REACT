import React from "react";
import '../css/Quiz.css'
import quiz from "../components/images/quiz-time.jpg"


function Quiz() {
  return (
    <div className="quiz-container">
      <div className="quiz-text">QUIZ</div>
      <div className="quiz-images"><img src={quiz} alt="quiz" /></div>
      <div className="quiz-director" ><button id="quiz-btn" disabled>Let's Test </button></div>
    </div>
  );
}

export default Quiz;
