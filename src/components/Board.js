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

const Board = (props) => {
  let [current, setCurrent] = useState(0);
  // let prevBtn = document.getElementById('prevBtn');
  // let nextBtn = document.getElementById('nextBtn');

  const [prevBtn, setPrevBtn] = useState(null);
  const [nextBtn, setNextBtn] = useState(null);
  const [quizBtn, setQuizBtn] = useState(null);
  const [audioElement, setAudioElement] = useState(null);
  let [type, setType] = useState(null);

  // const initialState = { idType: 'general' }

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case 'general':
  //       return {
  //         idType: 'general',
  //       };
  //     case 'formula':
  //       return {
  //         idType: 'formula',
  //       };
  //     case 'calculation':
  //       return {
  //         idType: 'calculation',
  //       };
  //     default:
  //       return state;
  //   }
  // }

  // const [state, dispatch] = useReducer(reducer, initialState);

  // VOICE RSS SDK

  //   const VoiceRSS = {

  //    speech: function (e) {
  //         return this._validate(e), this._request(e);
  //     },
  //     _validate: function (e) {
  //     //  return
  //          if (!e) throw "The settings are undefined";
  //           if (!e.key) throw "The API key is undefined";
  //           if (!e.src) throw "The text is undefined";
  //         if (!e.hl) throw "The language is undefined";
  //         if (e.c && "auto" != e.c.toLowerCase()) {
  //             var a = !1;
  //             switch (e.c.toLowerCase()) {
  //                 case "mp3":
  //                     a = new Audio().canPlayType("audio/mpeg").replace("no", "");
  //                     break;
  //                 case "wav":
  //                     a = new Audio().canPlayType("audio/wav").replace("no", "");
  //                     break;
  //                 case "aac":
  //                     a = new Audio().canPlayType("audio/aac").replace("no", "");
  //                     break;
  //                 case "ogg":
  //                     a = new Audio().canPlayType("audio/ogg").replace("no", "");
  //                     break;
  //                 case "caf":
  //                     a = new Audio().canPlayType("audio/x-caf").replace("no", "");
  //             }
  //             if (!a) throw "The browser does not support the audio codec " + e.c;
  //         }

  //     },
  //     _request: function (e) {
  //         var a = this._buildRequest(e),
  //             t = this._getXHR();
  //       return  (t.onreadystatechange = function () {
  //             if (4 == t.readyState && 200 == t.status) {
  //                 if (0 == t.responseText.indexOf("ERROR")) throw t.responseText;
  //                 return (audioElement.src = t?.responseText), audioElement.play();
  //             }
  //         }),
  //             t.open("POST", "https://api.voicerss.org/", !0),
  //             t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
  //             t.send(a);
  //     },
  //     _buildRequest: function (e) {
  //         var a = e.c && "auto" != e.c.toLowerCase() ? e.c : this._detectCodec();
  //         return "key=" + (e.key || "") + "&src=" + (e.src || "") + "&hl=" + (e.hl || "") + "&r=" + (e.r || "") + "&c=" + (a || "") + "&f=" + (e.f || "") + "&ssml=" + (e.ssml || "") + "&b64=true";
  //     },
  //     _detectCodec: function () {
  //         var e = new Audio();
  //         return e.canPlayType("audio/mpeg").replace("no", "")
  //             ? "mp3"
  //             : e.canPlayType("audio/wav").replace("no", "")
  //             ? "wav"
  //             : e.canPlayType("audio/aac").replace("no", "")
  //             ? "aac"
  //             : e.canPlayType("audio/ogg").replace("no", "")
  //             ? "ogg"
  //             : e.canPlayType("audio/x-caf").replace("no", "")
  //             ? "caf"
  //             : "";
  //     },
  //     _getXHR: function () {
  //         try {
  //             return new XMLHttpRequest();
  //         } catch (e) {}
  //         try {
  //             return new window.ActiveXObject("Msxml3.XMLHTTP");
  //         } catch (e) {}
  //         try {
  //             return new window.ActiveXObject("Msxml2.XMLHTTP.6.0");
  //         } catch (e) {}
  //         try {
  //             return new window.ActiveXObject("Msxml2.XMLHTTP.3.0");
  //         } catch (e) {}
  //         try {
  //             return new window.ActiveXObject("Msxml2.XMLHTTP");
  //         } catch (e) {}
  //         try {
  //             return new window.ActiveXObject("Microsoft.XMLHTTP");
  //         } catch (e) {}
  //         throw "The browser does not support HTTP request";
  //     },
  // };

  // function speakInstruction(instruction){
  //   VoiceRSS.speech({
  //       key: '9f8ce55541e9424fa998b3472e121e46',
  //       src: `${instruction}`,
  //       hl: 'en-us',
  //       v: 'Linda',
  //       r: 1,
  //       c: 'mp3',
  //       f: '44khz_16bit_stereo',
  //       ssml: false
  //   });
  // }

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
    if(current+1<inst.length){
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

      if(quizBtn){
        quizBtn.disabled=false;
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
      return (
        // <Popup1
        //   question={inst[current].values}
        //   setCurrent={setCurrent}
        //   setType={setType}
        //   current={current}
        //   inst={inst}
        // />

        <Popup1 question={inst[current].values} onNext={onNext} />
      );
    }
  }

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

          <div className="instructionBox" id="instructionBox">
            {decisionComponent(type)}
          </div>

          <div className="buttonContainer">
            <button
              className="btn prev-btn"
              id="prevBtn"
              onClick={function () {
                if (current > 0) {
                  setCurrent((current = current - 1));
                }
                setType((type = inst[current].type));
              }}
            >
              Prev
            </button>
            <button
              className="btn next-btn"
              id="nextBtn"
              onClick={function () {
                if (current < inst.length - 1) {
                  setCurrent((current = current + 1));
                }
                setType((type = inst[current].type));
              }}
            >
              Next
            </button>
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
