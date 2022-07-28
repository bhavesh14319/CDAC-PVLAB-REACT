import React, { useEffect, useReducer, useState } from "react";
import character from '../character/img.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import probFormula from '../components/images/probability-formula.jpg'
import Popup from "./Popup";
import { MathComponent } from "mathjax-react";

import '../css/Board.css'

const Board = (props ) => {

  let[current,setCurrent]=useState(0);
  // let prevBtn = document.getElementById('prevBtn');
  // let nextBtn = document.getElementById('nextBtn');
  const [textBox,setTextBox] = useState(null);
  const [prevBtn,setPrevBtn] = useState(null);
  const [nextBtn,setNextBtn] = useState(null);
  const [audioElement,setAudioElement] = useState(null)

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



  let splitText = (text, splitParameter) =>{
    let t = text?.split(splitParameter);
   return t;
}

  function showInstruction(instruction){
   
    if(textBox){
    // display
    let spliitedText = splitText(instruction,' ');
    // console.log(instruction)
    let i=0;
    if(textBox){
      let display = setInterval(function() {
        if(textBox&&spliitedText && spliitedText[i]==='\n'){
          textBox.innerHTML +='<br>'
        }
        if(textBox!==null){
          textBox.innerHTML += `${spliitedText[i]} `;
        }
        
        if (i === (spliitedText.length-1)) {
            clearInterval(display);
        }
        i += 1
    }, 100);
  }
}
}

  function showFormula(formula){
    textBox.innerHTML = `<div class="boardFormulaContainer"> <img class="formulaImage fadeInClass" id="formulaImage" src=${formula}></div>`;
  }

  function updateFormulaList(inst){
      if(inst.retain){
        let formulaContainer = document.getElementById('formulaContainer');
        console.log(formulaContainer);
        if(!document.getElementById(inst.id)){
          let img =  `<img src=${inst.image} className='fadeInClass' id=${inst.id}>`
          formulaContainer.innerHTML += img;
        }
      }
  }

  function showCalculation(calculation){
    console.log("calculation")
  //   let calHtml = 
  //  `  <div class='calculationContainer'>
  //     <h3 class="calcHeading">${calculation.heading}</h3> \n
  //     <p class="favText"> ${calculation.favourable} => Number of favourable outcomes = ${calculation.noOfFavourable} </p> \n
  //     <p class="totalText">${calculation.Total} => Total Possible outcomes = ${calculation.noOfTotal} </p> \n
  //     <div class="calc"> &there4; <span class='calcLHS'>P(HEAD) = </span> <div class="fraction"> <p class="row1"> ${calculation.noOfFavourable} </p> <p class="row2"> ${calculation.noOfTotal} </p> </div> &  
  //     <span class='calcLHS'>P(TAIL) = </span>  <div class="fraction"> <p class="row1"> ${calculation.noOfFavourable} </p> <p class="row2"> ${calculation.noOfTotal} </p> </div> 
  //     </div>
  //   `
    
    // let spliitedText = splitText(calHtml,'\n');
    // console.log(spliitedText)
    textBox.innerHTML += calculation;
  }


   const onNext=()=>{

      // console.log('length',inst.length)
        textBox.textContent=""
        console.log(current)
        if(inst[current].type==='calculation'){
          showCalculation(inst[current].calculation);
        }

        if(inst[current].type==='formula'){
          showFormula(inst[current].image);
          updateFormulaList(inst[current]);
        }
        if(inst[current].type==='general'){
        // setCurrent(current+1);
        showInstruction(inst[current].value);
        // console.log(current);
      } 
  }

  const onPrev=()=>{
     console.log('outside prev',current);
      // setCurrent(current-1);
      console.log('outside prev',current);
      // current=current-1;
      textBox.textContent="";
      if(inst[current].type==='formula'){
        showFormula(inst[current].image);
      }
      if(inst[current].type==='calculation'){
        showCalculation(inst[current].calculation);
      }
      if(inst[current].type==='general'){
        // setCurrent(current+1);
        showInstruction(inst[current].value);
      }

  }

  window.addEventListener('load',()=>{
    if(prevBtn && nextBtn){
      prevBtn.disabled=true;
      nextBtn.disabled=true;
    }
  })

  function onStart(){
      let btn = document.querySelector('.startCont');
      if(btn){
        btn.style.display='none';
      }
      showInstruction(inst[current].value)
      if(nextBtn){
        nextBtn.disabled=false;
      }
  }


  useEffect(()=>{
    setTextBox(document.getElementById('textBox'));
    setPrevBtn(document.getElementById('prevBtn'));
    setNextBtn(document.getElementById('nextBtn'));

   
    // if(updateInst){
    //   updateInst.current = updateInstructions
    // }
  },[])


  useEffect(()=>{
    if(current>0){
      if(prevBtn){
        prevBtn.disabled=false;
        nextBtn.disabled=false;
      }
    }else{
      if(prevBtn){
        prevBtn.disabled=true;
        nextBtn.disabled=false;
      }
    }

    if(current===inst.length-1){
      if(nextBtn){
        nextBtn.disabled=true;
      }else{
        nextBtn.disabled=false;
      }
    }


  },[current])

  

  return (
    <>
      <audio src="" id="audio" hidden></audio>
      <div className="formulaContainer" id="formulaContainer">  
        {/* <img src={probFormula} alt="" className="fadeInClass" /> */}
      </div> 
      <div className="boardContainer">
      <div className="MainContainer" id="MainContainer">
        {/* <!-- Upper instruction Box --> */}
        <div className="startCont">
        <button className="startBtn" id="startBtn" onClick={onStart} >Start</button>
        </div>
        <div className="instructionBox" id="instructionBox">
          <Popup setOutput={props?.setOutput} setheads={props?.setheads} settails={props?.settails} heads={props?.heads} tails={props?.tails} ></Popup>
          <div className="textBox" id="textBox">
            {/* {inst[current].type==='calculation'?
               <MathComponent tex={String.raw`\int_0^1 x^2\ dx`}/>:showInstruction
            } */}
          </div>
        </div>
        <div className="buttonContainer">
            <button className="btn prev-btn" id="prevBtn" onClick={function(){
              if(current>0){
                setCurrent(current=current-1);
              }
              onPrev();
            }}>Prev</button>
            <button className="btn next-btn" id="nextBtn" onClick={function(){
              if(current<inst.length-1){
                setCurrent(current=current+1);
              }
              onNext();
            }}>Next</button>
        </div>


        {/* <!-- Character --> */}
        <div className="character" id="character">
          <img src={character} alt=""  />
        </div>
      </div>
      </div>
      </>
  );
  
function equationFunction(){
  return(
    <>
     
    </>
  )
}

  
};



export default Board;
