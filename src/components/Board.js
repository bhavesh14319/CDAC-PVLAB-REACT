import React, { useEffect, useReducer, useState } from "react";
import character from "../character/img.png";
import Popup from "./Popup";
import ImagePopUp from "./ImagePopUp";
import GeneralInstruction from "./GeneralInstruction";
import Formula from "./Formula";
import Calculation from "./Calculation";
import Quiz from "./Quiz";
import Heading from "./Heading";
// import Menu from "./Menu";
// import Quizcontainer from './Quizcontainer'
// import SideNavRight from "./SideNavRight";
import "../css/Board.css";
import Questions from "./Questions";
import Popup1 from "./Popup1";
import { useSpeechSynthesis } from "react-speech-kit";

const Board = (props) => {
  let [current, setCurrent] = useState(0);
  // let prevBtn = document.getElementById('prevBtn');
  // let nextBtn = document.getElementById('nextBtn');

  const [prevBtn, setPrevBtn] = useState(null);
  const [nextBtn, setNextBtn] = useState(null);
  const [quizBtn, setQuizBtn] = useState(null);
  const [audioElement, setAudioElement] = useState(null);
  let [type, setType] = useState(null);

  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();


  let inst = props?.inst;

  // x

  // function showFormula(formula){
  //   textBox2.innerHTML = `<div class="boardFormulaContainer"> <img class="formulaImage fadeInClass" id="formulaImage" src=${formula}></div>`;
  // }

  // function showCalculation(calculation){
  //   console.log("calculation")
  // //   let calHtml =
  // //  `  <div class='calculationContainer'>
  // //     <h3 class="calcHeading">${calculation.heading}</h3> \n
  // //     <p class="favText"> ${calculation.favourable} => Number of favourable outcomes = ${calculation.noOfFavourable} </p> \n
  // //     <p class="totalText">${calculation.Total} => Total Possible outcomes = ${calculation.noOfTotal} </p> \n
  // //     <div class="calc"> &there4; <span class='calcLHS'>P(HEAD) = </span> <div class="fraction"> <p class="row1"> ${calculation.noOfFavourable} </p> <p class="row2"> ${calculation.noOfTotal} </p> </div> &
  // //     <span class='calcLHS'>P(TAIL) = </span>  <div class="fraction"> <p class="row1"> ${calculation.noOfFavourable} </p> <p class="row2"> ${calculation.noOfTotal} </p> </div>
  // //     </div>
  // //   `

  //   // let spliitedText = splitText(calHtml,'\n');
  //   // console.log(spliitedText)
  //   textBox3.innerHTML += calculation;
  // }

  const onNext = () => {
    if (current + 1 < inst.length) {
      if (current > 0) {
        setCurrent((current = current + 1));
      }
      setType((type = inst[current].type));
    }
  };

  // const onPrev=()=>{
  //   //  console.log('outside prev',current);
  //   //   // setCurrent(current-1);
  //   //   console.log('outside prev',current);
  //   //   // current=current-1;
  //   //   // textBox1.textContent="";
  //   //   if(inst[current].type==='formula'){
  //   //     showFormula(inst[current].image);
  //   //   }
  //   //   if(inst[current].type==='calculation'){
  //   //     showCalculation(inst[current].calculation);
  //   //   }
  //   //   if(inst[current].type==='general'){
  //   //     // setCurrent(current+1);
  //   //     showInstruction(inst[current].value);
  //   //   }

  // }

  window.addEventListener("load", () => {
    if (prevBtn && nextBtn && quizBtn) {
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      // quizBtn.disabled=true;
    }
  });

  useEffect(() => {
    if (prevBtn && nextBtn && quizBtn) {
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      // quizBtn.disabled=true;
    }
  }, []);

  function onStart() {
    let btn = document.querySelector(".startCont");
    if (btn) {
      btn.style.display = "none";
    }
    setType((type = inst[current].type));
    setValue(inst[current].audiosrc);

    if (nextBtn) {
      nextBtn.disabled = false;
    }
  }

  // useEffect(()=>{
  //   if(type === 'general') {
  //     setTextBox1(document.getElementById('textBox1'));

  //   } else if(type === 'formula') {
  //     setTextBox2(document.getElementById('textBox2'));

  //   } else if(type === 'calculation') {
  //     setTextBox3(document.getElementById('textBox3'));

  //   }

  //   // if(updateInst){
  //   //   updateInst.current = updateInstructions
  //   // }
  // },[type])

  function showQuiz() {
    document.getElementById("quizContainer").style.display = "block";
  }

  useEffect(() => {
    setPrevBtn(document.getElementById("prevBtn"));
    setNextBtn(document.getElementById("nextBtn"));
    setQuizBtn(document.getElementById("quiz-btn"));
    document.getElementById("quiz-btn").addEventListener("click", showQuiz);
    // if(updateInst){
    //   updateInst.current = updateInstructions
    // }
  }, []);

  useEffect(() => {
    if (current > 0) {
      if (prevBtn) {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
      }
    } else {
      if (prevBtn) {
        prevBtn.disabled = true;
        nextBtn.disabled = false;
      }
    }

    if (current === inst.length - 1) {
      if (nextBtn) {
        nextBtn.disabled = true;
      } else {
        nextBtn.disabled = false;
      }

      if (quizBtn) {
        quizBtn.disabled = false;
      }
    }
  }, [current]);

  // useEffect(() => {
  //   if (prevBtn && nextBtn) {
  //     if (current > 0) {
  //       prevBtn.disabled = false;
  //     }

  //     if ((current = 0)) {
  //       prevBtn.disabled = true;
  //     }

  //     if ((current = inst?.length - 1)) {
  //       nextBtn.disabled = true;
  //     }else{
  //       nextBtn.disabled=false;
  //     }
  //   }
  // }, [type]);

  function updateFormulaList() {
    if (inst[current].retain) {
      let formulaContainer = document.getElementById("formulaContainer");
      // console.log(formulaContainer);
      if (!document.getElementById(inst[current].id)) {
        let img = `<img src=${inst[current].image} class='fadeInClass sideImage' id=${inst[current].id}>`;
        formulaContainer.innerHTML += img;
        // document.getElementById(`${inst[current].id}`).addEventListener('click',function(e){
        //  console.log( document.getElementById(`${inst[current].id}`).getAttribute("src") , "hii")
        //  document.querySelector(`.poppedImageContainer`).style.display='flex';
        //  document.querySelector(`.poppedImageContainer`).innerHTML=`<img src=${document.getElementById(`${inst[current].id}`).getAttribute("src")}>`
        // })
      }
    }
    document.querySelectorAll(".sideImage").forEach((img) => {
      img.addEventListener("click", function (e) {
        console.log(img.src);
        document.querySelector(`.poppedImageContainer`).style.display = "grid";
        document.querySelector(
          `.popImageContainer`
        ).innerHTML = `<img src=${img.src}>`;
      });
    });
  }

  function decisionComponent(type) {
    if (type === "general") {
      return <GeneralInstruction instruction={inst[current].value} />;
    } else if (type === "formula") {
      updateFormulaList();
      return (
        <Formula formula={inst[current].image} animationClass="fadeInClass" />
      );
    } else if (type === "calculation") {
      return (
        <Calculation
          instruction={inst[current].calculation}
          equations={inst[current].equations}
        />
      );
    }
  }

  function decisionComponent1(type) {
    if (type === "Question") {
      return <Popup1 question={inst[current].values} onNext={onNext} />;
    }
  }
  // useEffect(()=>{
  //   if(value !==null){
  //     speak({text:value})
  //   }
  // },[value])

  return (
    <>
      <audio src="" id="audio" hidden></audio>
      <div className="formulaContainer" id="formulaContainer">
        {/* <img src={probFormula} alt="" className="fadeInClass" /> */}
      </div>
      <ImagePopUp />
      <Questions level={props?.level} />
      <div className="boardContainer">
        <div className="MainContainer" id="MainContainer">
          {/* <!-- Upper instruction Box --> */}
          <div className="startCont">
            <button className="startBtn" id="startBtn" onClick={onStart}>
              Start
            </button>
          </div>
          {props?.level === 1 && (
            <Popup
              level={1}
              setOutput={props?.setOutput}
              setheads={props?.setheads}
              settails={props?.settails}
              heads={props?.heads}
              tails={props?.tails}
            ></Popup>
          )}

          {props?.level === 2 && (
            <Popup
              level={2}
              setOutput={props?.setOutput}
              setHH={props?.setHH}
              setHT={props?.setHT}
              setTH={props?.setTH}
              setTT={props?.setTT}
              HH={props?.HH}
              TH={props?.TH}
              HT={props?.HT}
              TT={props?.TT}
            ></Popup>
          )}
          {decisionComponent1(type)}

          {type !== "formula" && (
            <div className="instructionBox" id="instructionBox">
              {decisionComponent(type)}
            </div>
          )}
          {type == "formula" && (
            <div
              className="instructionBox"
              id="instructionBox"
              style={{ overflow: "visible" }}
            >
              {decisionComponent(type)}
            </div>
          )}

          <div className="buttonContainer">
            <button
              className="btn prev-btn"
              id="prevBtn"
              onClick={function () {
                if (current > 0) {
                  setCurrent((current = current - 1));
                }
                setType((type = inst[current].type));
                setValue(inst[current].audiosrc);
              }}
            >
              Prev
            </button>
            <div>
              <span
                className="btn speak-btn"
                onClick={() => {
                  speak({
                    text: value,
                    voices: [
                      {
                        // default: true,
                        lang: "en-US ",
                        localService: true,
                        name: "Microsoft David - English (United States)",
                        voiceURI: "Microsoft David - English (United States)",
                      },
                    ],
                  });
                }}
                style={{ alignSelf: "flex-end" }}
              >
                {" "}
                🔊{" "}
              </span>
              <button
                className="btn next-btn"
                id="nextBtn"
                onClick={function () {
                  if (current < inst.length - 1) {
                    setCurrent((current = current + 1));
                  }
                  setType((type = inst[current].type));
                  setValue(inst[current].audiosrc);
                }}
              >
                Next
              </button>
            </div>
          </div>

          {/* <!-- Character --> */}
          <div className="character" id="character">
            <img src={character} alt="" />
          </div>
        </div>
      </div>

      {/* side nav bar */}
      <Heading level={props?.level} />
      <Quiz />

      {/* <SideNavRight /> */}
    </>
  );
};

export default Board;
