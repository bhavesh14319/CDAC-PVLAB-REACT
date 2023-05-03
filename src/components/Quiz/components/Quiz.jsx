import React from "react";
import "../Styles/Quiz.css";
import "../Styles/Start.css";
import swal from "sweetalert";

const Quiz = ({
  showQuiz,
  question,
  checkAnswer,
  selectedAnswer,
  nextQuestion,
  showTheResult,
  totalQuestions,
  questions,
  level,
  score
}) => {
  console.log(questions)

  return (
    <div
      className="start_container start_container_quiz"
      style={{ display: `${showQuiz ? "block" : "none"}` }}
    >
      <div className="question_contaainer">
        <div style={{display:"flex" ,justifyContent:"space-between",paddingLeft:"10px"}}>
          <h5 style={{ color: "#60d600", textAlign: "left", padding: "10px" ,display:"inline"}}>
              <span style={{color:"#FFF"}}>Difficulty:&nbsp;</span>
              <span  style={{ color: `${level=="easy" ?"#00F200" : level=="medium" ? "#FACC2E" : "#FF0000"}`,fontSize: "medium" }}>
                {level}
              </span>
            </h5>
            <h5 style={{ color: "#60d600", textAlign: "left", padding: "10px" ,display:"inline"}}>
              <span>Score:&nbsp;</span>
              <span style={{ fontSize: "medium" }}>
                {score}
              </span>
            </h5>
            <h5 style={{ color: "#60d600", textAlign: "right", padding: "10px",display:"inline" }}>
              <span>QUESTION NO. &nbsp;</span>
              <span style={{ fontSize: "large" }}>
                {totalQuestions + 1}
              </span>
            </h5>
        </div>
        <h5 className="question_text">{question?.question}</h5>
        <div className="options_main_container">
          {question?.options?.map((item, index) => (
            <>
              <div className="options" key={index.toString()}>
                
                <button
                  key={index}
                  className="options_container"
                  onClick={(event) => checkAnswer(event, item)}
                >
                 <span className="option_number">{index + 1})</span><div style={{display:"inline-block"}}>{item}</div> 
                </button>
              </div>
            </>
          ))}
        </div>

        {totalQuestions + 1 !== 12 ? (
          <div className="submit_button_container">
            <button
              className="submit_button"
              onClick={nextQuestion}
              disabled={!selectedAnswer}
              style={!selectedAnswer? {backgroundColor:"#c4a76d"} : {backgroundColor:"#674706"}}
            >
              Next Question
            </button>
          </div>
        ) : (
          <button
            className="btn py-2 w-100 mt-3 ml-3  bg-primary text-light fw-bold"
            onClick={showTheResult}
            disabled={!selectedAnswer}
            style={{width:"fit-content",marginLeft:"20px"}}
          >
            Show Result
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;


/*
  20
 
  5-  hard  15  
  7-  med   21
  8 - easy  24


  // quiz

  16 - easy 
  14 - med 
  10 - hard

  8 - easy
  7 - med
  5 - hard


  if(all easy exhausted){
      if(easy(score)<25) 
        easy += 5
        render easy 
      }else{
        // easy qulified 
        render medium
      }
  }

if(all med exhausted){
      if(med(score)<40) 
        med += 5
        render med 
      }else{
        // med qualified 
        render hard
      }
}


if(all hard exhausted){
      if(hard(score)<45) 
        hard += 5
        render med 
      }else{
        // hard qualified 
        show result  
      }
}




  







  easy -> 5    score = 25   rA < 65%  vapis padh le
  medium -> 4  score = 40   rA < 60%  vapis padh le
  hard -> 3    score = 45   rA < 60%  vapis padh le       






*/