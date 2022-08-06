import React from "react";
import "../css/Quizcontainer.css";
import questioncoin from "../components/images/questioncoin.png";
import happycoin from "../components/images/happycoin.png";
import pointingcoin from "../components/images/pointingcoin.png";
import { imageListClasses } from "@mui/material";


const Quizcontainer = (props) => {
  let [current, setcurrent] = React.useState(0);
  let quest = props?.quest;


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
  function answervalidation() {
    var option = document.getElementsByName("OUTPUT");
    var quizcoin = document.getElementById("quizcoin");

    console.log(option);
    var selected;
    for (var i = 0; i < option.length; i++) {
      if (option[i].checked) {
        selected = option[i].value;
        console.log(typeof(selected));

      }
      // if(selected===quest.correct?.value){
      //   console.log("correct");
  
      // }
    }
    console.log(selected===quest[current]?.correct?.value);
    if(selected===quest[current]?.correct?.value){
      console.log("correct");
      quizcoin.src=happycoin;
      setTimeout(()=>{
        setcurrent(current=current+1)
        console.log(current)

        for (var i = 0; i < option.length; i++) {
         option[i].checked = false;
    
        }
        quizcoin.src=questioncoin;
      },3000);
      
    }
    else{
      quizcoin.src=pointingcoin;
    }
    

    // }
    // console.log(selected);
    // if (quest[current]?.correct[3]) {
    // }
  }
  React.useEffect(() => {
    console.log(current)
   
     
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
                  <span className="radioLable">{quest[current]?.option[1]}</span>
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
                  <span className="radioLable">{quest[current]?.option[2]}</span>
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
                  <span className="radioLable">{quest[current]?.option[3]}</span>
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
                  <span className="radioLable">{quest[current]?.option[4]}</span>
                </span>
              </li>
            </ol>
            <div id="quizimage">
              <span>
                <img id="quizcoin" src={questioncoin} alt="think" />
              </span>
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
    </div>
  );
};

export default Quizcontainer;
