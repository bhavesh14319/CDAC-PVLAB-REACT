import React from "react";
import "../css/Quizcontainer.css";
import questioncoin from "../components/images/questioncoin.png"

const Quizcontainer = () => {
  function closePopUp() {
    document.getElementById("quizContainer").style.display = "none";
  }

  return (
    <div>
      <div className="quizContainer popUpContainer" id="quizContainer">
        <div className="questionContainer">
          <p className='questionText'>What is Probability of getting Head</p>
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
                value="TAIL"
              />
              <span className="radioLable">0</span>
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
                value="TAIL"
              />
              <span className="radioLable">1</span>
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
                value="TAIL"
              />
              <span className="radioLable">1/2</span>
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
                value="TAIL"
              />
              <span className="radioLable">3/2</span>
            </span>
            </li>
            </ol>
            <div  id="quizimage">
                <span><img src={questioncoin} alt="think" /></span>
                </div>
          </div>
        </div>
        <div className="submit">
                  <button>SUBMIT</button>
        </div>
        <div className="closeButton" onClick={closePopUp}>
        <span>&#10006;</span>
      </div>
      </div>
     
    </div>
  );
};

export default Quizcontainer;
