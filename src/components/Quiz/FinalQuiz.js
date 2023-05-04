import React, { useEffect, useState } from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';
import Result from './components/Result';
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';
import Right from "../sounds/correct.mp3"
import Wrong from "../sounds/buzzer.mp3"

function FinalQuiz() {



  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  // Display Controlling States
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);



  // adaptiveness
  const EASY_THRESHOLD = 3;
  const MEDIUM_THRESHOLD = 3;


  const [questions, setQuestions] = useState({});
  let [easyQuestions, setEasyQuestions] = useState([]);
  let [medQuestions, setMedQuestions] = useState([]);
  let [hardQuestions, setHardQuestions] = useState([]);

  const [currentLevel, setCurrentLevel] = useState('easy');
  let [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  // let [currentQuestions, setCurrentQuestions] = useState([]);
  const[currentQuestions, setCurrentQuestions] = useState([]);

  const [totalQuestions, setTotalQuestions] = useState(0);







  // Load JSON Data
  useEffect(() => {
    fetch("quiz.json")
      .then(res => res.json())
      .then(data => {
        // setQuizs(data)
        setQuestions(data);
        // console.log(quizs);

        if (data) {
          console.log(data);
          const randomEasyQuestions = data?.easy?.sort(() => 0.5 - Math.random()).slice(0, 4);

          setEasyQuestions(easyQuestions = randomEasyQuestions);

          const randomMedQuestions = data?.medium?.sort(() => 0.5 - Math.random()).slice(0, 5);
          setMedQuestions(medQuestions = randomMedQuestions);

          const randomHardQuestions = data?.hard?.sort(() => 0.5 - Math.random()).slice(0, 3);
          setHardQuestions(hardQuestions = randomHardQuestions);

          // setCurrentQuestions(currentQuestions = easyQuestions);
          setCurrentQuestions(easyQuestions);


          console.log(easyQuestions);
          console.log(medQuestions);
          console.log(hardQuestions);

        }

      })

  }, []);





  // Start Quiz
  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  }

  // Check Answer
  const checkAnswer = (event, selected) => {
    let audio = document.getElementById('quiz-audio');

    if (currentLevel === "easy") {
      if (!selectedAnswer) {
        setCorrectAnswer(currentQuestions && currentQuestions[currentQuestionIndex].answer);
        setSelectedAnswer(selected);

        if (selected === currentQuestions[currentQuestionIndex].answer) {
          audio.src=Right;
          audio.play();
          event.target.classList.add('bg-success');
          // setCorrectAnswers((correctAnswers=correctAnswers+1));
          setCorrectAnswers((curr)=>curr+1);
          setScore((curr)=>curr+5);
        } else {
          audio.src=Wrong;
          audio.play();
          event.target.classList.add('bg-danger');
 
        }
      }
    }


    if (currentLevel === "medium") {
      if (!selectedAnswer) {
        setCorrectAnswer(currentQuestions && currentQuestions[currentQuestionIndex].answer);
        setSelectedAnswer(selected);

        if (selected === currentQuestions[currentQuestionIndex].answer) {
          event.target.classList.add('bg-success');
          // setCorrectAnswers((correctAnswers=correctAnswers+1));
          audio.src=Right;
          audio.play();
          setCorrectAnswers((curr)=>curr+1);
          setScore((curr)=>curr+10);
        } else {
          audio.src=Wrong;
          audio.play();
          event.target.classList.add('bg-danger');
        }
      }
    }


    if (currentLevel === "hard") {
      if (!selectedAnswer) {
        setCorrectAnswer(currentQuestions && currentQuestions[currentQuestionIndex].answer);
        setSelectedAnswer(selected);

        if (selected === currentQuestions[currentQuestionIndex].answer) {
          event.target.classList.add('bg-success');
          // setCorrectAnswers((correctAnswers=correctAnswers+1));
          audio.src=Right;
          audio.play();
          setCorrectAnswers((curr)=>curr+1);
          setScore((curr)=>curr+15);
        } else {
          audio.src=Wrong;
          audio.play();
          event.target.classList.add('bg-danger');
        }
      }
    }


    setTotalQuestions((cur) => cur + 1);

  }

  // Next Quesion
  const nextQuestion = () => {

    console.log(correctAnswers);
    if (currentLevel === 'easy' && correctAnswers >= EASY_THRESHOLD) {
      setCurrentLevel("medium");
      // setCurrentQuestions(currentQuestions = medQuestions);
      setCurrentQuestions(medQuestions);

      setCurrentQuestionIndex(currentQuestionIndex = -1);
      setCorrectAnswers(0);
      swal(
        {
          title:" Congratulations!! 🎉🥳 " ,
          text: `You have advanced to the medium level. 👏`,
          buttons: {
            cancel: true,
            Keep: {
              text: "Keep Going",
              value: "Keep-Going",
              className: 'Keep-Going-Btn'
            },
          },
  
        })
      // alert('Congratulations! You have advanced to the medium level.');
    } else if (currentLevel === 'medium' && correctAnswers >= MEDIUM_THRESHOLD) {
      setCurrentLevel("hard");
      // setCurrentQuestions(currentQuestions = hardQuestions);
      setCurrentQuestions(hardQuestions);

      setCorrectAnswers(0);
      setCurrentQuestionIndex(currentQuestionIndex = -1);
      swal(
        {
          title:" Congratulations!! 🎉🥳 " ,
          text: `You have advanced to the hard level. 👏`,
          buttons: {
            cancel: true,
            Keep: {
              text: "Keep Going",
              value: "Keep-Going",
              className: 'Keep-Going-Btn'
            },
          },
  
        })
      // alert('Congratulations! You have advanced to the hard level.');
    }
    // Check if all questions in the current level have been asked
    console.log(currentQuestions.length);
    if (currentQuestionIndex >= currentQuestions.length-1) {
      swal(
        {
          title:"Note" ,
          icon:"info",
          text: `You have completed all the questions of ${currentLevel} level. \n you have solved ${correctAnswers} questions correctly from ${totalQuestions} ${currentLevel} questions \n we recommend you to rewise the concepts once again`,
          buttons: {
            Keep: {
              text: "Revise",
              value: "Rewise",
              className: 'Rewise-Btn'
            },
          },
  
        }).then((Rewise) => {
          if (Rewise) {
            navigate("/");
            return;
          }
        })


      


    }
   

    
    setCurrentQuestionIndex(currentQuestionIndex += 1);


    setCorrectAnswer('');

    setSelectedAnswer('');
    const wrongBtn = document.querySelector('button.bg-danger');
    wrongBtn?.classList.remove('bg-danger');
    const rightBtn = document.querySelector('button.bg-success');
    rightBtn?.classList.remove('bg-success');
    // setQuestionIndex(questionIndex + 1);
  }

  // Show Result
  const showTheResult = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  }

  // Start Over
  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setCorrectAnswer('');
    setSelectedAnswer('');
    setCurrentQuestionIndex(0);
    setCurrentLevel('easy');
    setScore(0);
    const wrongBtn = document.querySelector('button.bg-danger');
    wrongBtn?.classList.remove('bg-danger');
    const rightBtn = document.querySelector('button.bg-success');
    rightBtn?.classList.remove('bg-success');

    window.reload();
  }


  useEffect(() => {

  }, [])



  return (
    <div style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center"}} className='quiz_main'>
       <audio src="" id="quiz-audio" hidden></audio>
      {/* Welcome Page */}
      <Start
        startQuiz={startQuiz}
        showStart={showStart}
      />

      {/* Quiz Page */}
      <Quiz
        showQuiz={showQuiz}
        question={currentQuestions && currentQuestions[currentQuestionIndex]}
        checkAnswer={checkAnswer}
        correctAnswer={correctAnswer}
        selectedAnswer={selectedAnswer}
        nextQuestion={nextQuestion}
        showTheResult={showTheResult}
        totalQuestions={totalQuestions}
        level={currentLevel}
        score={score}
      />

      {/* Result Page */}
      <Result
        showResult={showResult}
        score={score}
        startOver={startOver} />
    </div>
  );
}

export default FinalQuiz;