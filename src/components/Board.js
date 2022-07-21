import React, { useEffect, useReducer, useState } from "react";
import character from '../character/img.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import probFormula from '../components/images/probability-formula.jpg'

import '../css/Board.css'

const Board = (props) => {

  var current = 0;
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
let output=props?.output;
// console.log(output);

useEffect(()=>{
  console.log(output);
},[output])


  let splitText = (text) =>{
    let t = text?.split(' ');
   return t;
}

  function showInstruction(instruction){
    console.log(current);
    if(textBox){
    // display
    let spliitedText = splitText(instruction);
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
    textBox.innerHTML = `<img class="formulaImage fadeInClass" id="formulaImage" src=${formula}>`;
  }


  function updateFormulaList(inst){
      let formulaContainer = document.getElementById('formulaContainer');
      console.log(formulaContainer);
      if(!document.getElementById(inst.id)){
        let img =  `<img src=${inst.image} className='fadeInClass' id=${inst.id}>`
        formulaContainer.innerHTML += img;
      }
  }


  function showCalculation(calculation){

    let calHtml = 
   `
      <h3 className="calcHeading">${calculation.heading}</h3> \n
      <p className="favText"> ${calculation.favourable}</p> \n
      <p className="totalText">${calculation.Total}</p> \n
      <div className="calc"> &there4; <span>P(HEAD) = </span> <div className="fraction"> <p className="row1"> ${calculation.noOfFavourable} </p> <p className="row1"> ${calculation.noOfTotal} </p> </div>  
    
    `
    textBox.innerHTML += calHtml;

  }

  // function onNext(){
  //   if(current<inst.length){
      
  //     if(current===0){
  //       if(textBox?.textContent){
  //         textBox.textContent=""
  //       }
  //       showInstruction(inst[current])
  //       setCurrent(current+1);
  //     }else{
  //       setCurrent(current+1);
  //        // console.log(current);
  //        if(textBox?.textContent)
  //         textBox.textContent=""
  //     // speakInstruction(inst[current].value)
  //         showInstruction(inst[current]);
  //     }

  //   }

  //   // if(current >= inst.length){
  //   //   setCurrent(inst.length)
  //   //   console.log(current)
  //   // }
  // }

  // function onPrev(){
  //   console.log('print')
  //   if(current>0){
  //     setCurrent(current-1);
  //     // console.log(current);
  //     if(textBox?.textContent)
  //     textBox.textContent=""
  //     // speakInstruction(inst[current].value)
  //     showInstruction(inst[current])
  //   }
  // }

  // function startLab(){
  //   setTextBox(document.getElementById('textBox'))
  //   setAudioElement(document.getElementById('audio'))
  //   let btn = document.getElementById('startBtn')
  //   btn.style.display='none'
  //   let index=current;
  //   setCurrent(index)
  //   // onNext();
  //   // speakInstruction(inst[current].value)
  //   showInstruction(inst[index]);
  // }


  // useEffect(()=>{
  //   let prevBtn =document.getElementById('prevBtn');
  //   let nextBtn = document.getElementById('nextBtn')
  //   console.log(current)
  //   console.log(inst[current])
  //   if(current>0){
  //     prevBtn.disabled=false;
  //   }else{
  //     prevBtn.disabled=true;
  //   }

  //   if(current === inst.length){
  //     nextBtn.disabled=true;
  //   }
  //   if(current < inst.length){
  //     nextBtn.disabled = false;
  //   }
  // },[current]);


  
  function onNext(){

      // current<inst[length]
      // 0 < 4 -> 1 1<4 -> 2 2<4 -> 3 3<4 -> 4 <5 -> 5 
      if(current<inst.length-1){
        current = current+1;
        textBox.textContent=""

        if(inst[current].type==='calculation'){
          showCalculation(inst[current].value);
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

  }

  function onPrev(){
    if(current>0){
      current=current-1;
      textBox.textContent="";
      if(inst[current].type==='formula'){
        showFormula(inst[current].image);
      }else{
        showInstruction(inst[current].value);
        // console.log(current); 
      }
 
    }

  }

  // window.addEventListener('load',showInstruction(inst[current].value));

  function onStart(){
      let btn = document.getElementById('startBtn');
      btn.style.display='none';
      showInstruction(inst[current].value)
  }


  useEffect(()=>{
    setTextBox(document.getElementById('textBox'));
    setPrevBtn(document.getElementById('prevBtn'));
    setNextBtn(document.getElementById('nextBtn'));
  },[])

  

  return (
    <>
      <audio src="" id="audio" hidden></audio>
      <div className="formulaContainer" id="formulaContainer">  
        {/* <img src={probFormula} alt="" className="fadeInClass" /> */}
      </div> 
      <div className="boardContainer">
      <div className="MainContainer" id="MainContainer">
        {/* <!-- Upper instruction Box --> */}
        <button className="startBtn" id="startBtn" onClick={onStart}>Start</button>
        <div className="instructionBox" id="instructionBox">
         
          <div className="textBox" id="textBox">
          </div>
        </div>
        <div className="buttonContainer">
            <button className="btn prev-btn" id="prevBtn" onClick={onPrev}>Prev</button>
            <button className="btn next-btn" id="nextBtn" onClick={onNext}>Next</button>
        </div>


        {/* <!-- Character --> */}
        <div className="character" id="character">
          <img src={character} alt=""  />
        </div>
      </div>
      </div>
      </>
  );
  
};

export default Board;
