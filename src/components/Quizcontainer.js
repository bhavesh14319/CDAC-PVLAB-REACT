import React from "react";
import "../css/Quizcontainer.css";
import questioncoin from "../components/images/questioncoin.png";
import happycoin from "../components/images/happycoin.png";
import pointingcoin from "../components/images/pointingcoin.png";
import Quizsolution from "./Quizsolution";
import swal from "sweetalert";
import { useNavigate } from 'react-router-dom';
import quest1 from "./Level1";
import quest2 from "./Level2";
import quest3 from "./Level3";
import quest4 from "./Level4";

// import { imageListClasses } from "@mui/material";

const Quizcontainer = (props) => {
  let [current, setcurrent] = React.useState(0);
  let [timer, settimer] = React.useState(3);
  // const display = React.useRef(null)

  const navigate = useNavigate();

  console.log(props);

  let quest;

  switch (props.level) {
    case 1:
      quest = quest1;
      break;

    case 2:
      quest = quest2;
      break;

    case 3:
      quest = quest3;
      break;
      
    case 4:
      quest = quest4;
      break;

    default:
      break;
  }


  function closePopUp() {
    document.getElementById("quizContainer").style.display = "none";
  }
  // let quest = [
  //   {
  //     id: 0,
  //     type: "mcq",
  //     question: "What is Probability of getting Head ?",
  //     option: {
  //       1: "0",
  //       2: "1",
  //       3: "1/2",
  //       4: "3/4",
  //     },
  //     correct: {
  //        value:"1/2",
  //     },
  //   },
  //   {
  //     id: 1,
  //     type: "mcq",
  //     question: "What is Probability of getting Tail ?",
  //     option: {
  //       1: "0",
  //       2: "1",
  //       3: "1/2",
  //       4: "3/4",
  //     },
  //     correct: {
  //        value:"1/2",
  //     },
  //   }
  // ];


  function handleOutputLevel(e) {
    console.log("wrong");
    swal("Oops! \n You made it wrong 🙂", `${props.question.justification}`, "error")

  }


  function answervalidation() {
    var option = document.getElementsByName("OUTPUT");
    var quizcoin = document.getElementById("quizcoin");
    var solutiontext = document.getElementById("solutiontext");
    var correctalert = document.querySelector(".alert-success");

    // var wrongalert= document.getElementsByClassName("alert-warning");
    console.log(correctalert);
    console.log(solutiontext);

    console.log(option);
    var selected;
    for (var i = 0; i < option.length; i++) {
      if (option[i].checked) {
        selected = option[i].value;
        console.log(typeof selected);
      }
      // if(selected===quest.correct?.value){
      //   console.log("correct");

      // }
    }
    console.log(selected === quest[current]?.correct?.value);
    if (selected === quest[current]?.correct?.value) {
      console.log("correct");
      quizcoin.src = happycoin;
      if (correctalert) {
        correctalert.style.display = "block";
      }
      let i = 2;
      const myInterval = setInterval(() => {
        if (i >= 0) {
          settimer(timer = i);
        }
        i = i - 1;
      }, 1000);
      if (i === 0) {
        clearInterval(myInterval);
      }

      setTimeout(() => {
        setcurrent((current = current + 1));
        console.log(current);
        correctalert.style.display = "none";

        for (var i = 0; i < option.length; i++) {
          option[i].checked = false;
        }
        quizcoin.src = questioncoin;
        solutiontext.style.display = "none";


        settimer(timer = 3);
      }, 3000);

    } else {
      quizcoin.src = pointingcoin;
      swal("Oops! \n You made it wrong 🙂", `${quest[current]?.explanation.value}`, "error")
      // solutiontext.style.display = "block";


      // wrongalert.style.display="block";
    }

    // }
    // console.log(selected);
    // if (quest[current]?.correct[3]) {
    // }
  }

  React.useEffect(() => {
    console.log(current);

    if (current == quest.length) {
      document.querySelector('.quizContainer').style.display = "none";
      swal({
        icon: 'success',
        title: "You have completed quiz ",
        text: "Click on Next to go to next level. \n if you want to revise the same level click on Repeat",
        buttons: {
          Repeat: {
            text: "Repeat",
            value: "Repeat",
            width: "fit-content",
            className: "repeat-level-btn"
          },
          Next: {
            text: "Next",
            value: "Next Level",
            className: 'Next-level-btn'
          },
        },

      }).then((NextLevel) => {
        console.log();
        if (NextLevel == 'Next Level') {
          if (props.level === 1) {
            navigate('/twocoin')
          } else
            if (props.level === 2) {
              navigate('/singledice')
            } else if (props.level === 3) {
              navigate('/doubledice')
            }

        } else {
          navigate(window.location);
          setcurrent(0);
          props.onStart();
        }
      })
    }
  }, [current]);

  return (
    <div>
      <div className="quizContainer popUpContainer" id="quizContainer">
        <div className="questionContainer">
          <p className="questionText">{quest[current]?.question}</p>
        </div>

        <h4>Options:</h4>
        <div className="optionsContainer">
          <div className="inputContainer">
            <ol type="A">
              <li>
                <span className="radioCont">
                  <input
                    style={{
                      height: "20px",
                      width: "20px",
                      verticalAlign: "middle",
                    }}
                    type="radio"
                    name="OUTPUT"
                    id="OPTION"
                    value={quest[current]?.option[1]}
                  />
                  <span className="radioLable">
                    {quest[current]?.option[1]}
                  </span>
                </span>
              </li>
              <li>
                <span className="radioCont">
                  <input
                    style={{
                      height: "20px",
                      width: "20px",
                      verticalAlign: "middle",
                    }}
                    type="radio"
                    name="OUTPUT"
                    id="OPTION"
                    value={quest[current]?.option[2]}
                  />
                  <span className="radioLable">
                    {quest[current]?.option[2]}
                  </span>
                </span>
              </li>
              <li>
                <span className="radioCont">
                  <input
                    style={{
                      height: "20px",
                      width: "20px",
                      verticalAlign: "middle",
                    }}
                    type="radio"
                    name="OUTPUT"
                    id="OPTION"
                    value={quest[current]?.option[3]}
                  />
                  <span className="radioLable">
                    {quest[current]?.option[3]}
                  </span>
                </span>
              </li>

              <li>
                <span className="radioCont">
                  <input
                    style={{
                      height: "20px",
                      width: "20px",
                      verticalAlign: "middle",
                    }}
                    type="radio"
                    name="OUTPUT"
                    id="OPTION"
                    value={quest[current]?.option[4]}
                  />
                  <span className="radioLable">
                    {quest[current]?.option[4]}
                  </span>
                </span>
              </li>
            </ol>
            <div id="quizimage">
              <span>
                <img id="quizcoin" src={questioncoin} alt="think" />
              </span>
              {/* <din className="alertcontainer">
                <span>Alet message:</span>
              </din> */}
              <div className="alert alert-success">
                <div className="icon hidden-xs">
                  <i className="fa fa-check" aria-hidden="true"></i>
                </div>
                <strong>CORRECT!</strong>
                <br /> Next Question in {timer} sec
              </div>
            </div>
          </div>
        </div>
        <div className="submit">
          <button onClick={answervalidation}>SUBMIT</button>
        </div>
        <div className="closeButton" onClick={closePopUp}>
          <span>&#10006;</span>
        </div>
      </div>
      <div id="solutiontext" className="solution_container">
        <div className="alert alert-warning">
          <div className="icon hidden-xs">
            <i className="fa fa-exclamation-circle"></i>
          </div>
          <strong>WRONG!</strong>
          <br /> Here's the solution
        </div>

        <div className="solution_text">
          <span>
            <Quizsolution instruction={quest[current]?.explanation.value} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Quizcontainer;
