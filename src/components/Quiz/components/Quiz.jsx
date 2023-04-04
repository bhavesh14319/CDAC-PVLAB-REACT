import React from "react";
import "../Styles/Quiz.css";
import "../Styles/Start.css";

const Quiz = ({
  showQuiz,
  question,
  quizs,
  checkAnswer,
  correctAnswer,
  selectedAnswer,
  questionIndex,
  nextQuestion,
  showTheResult,
}) => {
  return (
    // <section className="bg-dark text-white"  }}>
    <div
      className="start_container"
      style={{ display: `${showQuiz ? "block" : "none"}` }}
    >
      <div className="question_contaainer">
        <div className="d-flex justify-content-between gap-md-3">
          <h5 style={{ color: "#60d600", textAlign: "left", padding: "15px" }}>
            <span>QUESTION NO. &emsp;</span>
            <span style={{ fontSize: "large" }}>
              {quizs.indexOf(question) + 1} / {quizs?.length}
            </span>
          </h5>
          <h5 className="question_text">{question?.question}</h5>
        </div>
        <div className="options_main_container">
          {question?.options?.map((item, index) => (
            <>
              <div className="options">
                <span className="option_number">{index + 1}</span>
                <button
                  key={index}
                  className="options_container"
                  onClick={(event) => checkAnswer(event, item)}
                >
                  {item}
                </button>
              </div>
            </>
          ))}
        </div>

        {questionIndex + 1 !== quizs.length ? (
          <div className="submit_button_container">
            <button
              className="submit_button"
              onClick={nextQuestion}
              disabled={!selectedAnswer}
            >
              Next Question
            </button>
          </div>
        ) : (
          <button
            className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold"
            onClick={showTheResult}
            disabled={!selectedAnswer}
          >
            Show Result
          </button>
        )}
      </div>
    </div>
    // </section>
  );
};

export default Quiz;
