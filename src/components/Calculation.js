import React, { useEffect } from 'react'
import { MathComponent } from "mathjax-react";
import '../css/Board.css'

const Calculation = ({instruction,equations}) => {
//  useEffect(()=>{
  // let calcCont = document.getElementById('calcText');
  // if(calcCont) {
  //  calcCont.innerHTML=calculation; 
  // }
//  },[equations])

 const [text, setText] = React.useState('');
 const [showEquation,setShowEquation] = React.useState(false);
  const display = React.useRef(null)

  let current = ""


  React.useEffect(() => {
    let textBox=document.querySelector('.calcText');
    let splitText = (text, splitParameter) =>{
      let t = text?.split(splitParameter);
      return t;
    }

    function showInstruction() {
      setText("")
      if(display.current) {
        clearInterval(display.current);
      }

      let spliitedText = splitText(instruction,' ');
      let i = 0;
      console.log('found', spliitedText)
      display.current = setInterval(function() {
        if (i === (spliitedText.length)) {
          setShowEquation(true);
          clearInterval(display.current);
          return
        }
       
    
          current += `${spliitedText[i]} ` 
          if(textBox){
            textBox.innerHTML=current; 
          }else{
            console.log(textBox)
          }
          
         
        
        // if(current.includes('<br/>')){
        //   console.log(current)
        // }
        // setText(current);
            // textBox.innerHTML=current;
        i += 1
      }, 100);
    }

    console.log(instruction);
    showInstruction();
    return () => {
      if(display.current) {
        clearInterval(display.current);
      }
    }
  }, [instruction, current])



  return (
    <div>
      <div className="textBox" id="textBox3">
        <div className='calcText' id='calcText'>{text}</div>
        <div className='eqnCont'>
        { showEquation &&  equations && Object.values(equations)?.map((eqaution,index)=>{
          let eqn= <><MathComponent className="equation" tex={eqaution}/> <span  className='andSign'>&#38;</span></>  
          return eqn
        }
        )
       
        }
        </div>
         
      </div>
    </div>
  )
}

export default Calculation