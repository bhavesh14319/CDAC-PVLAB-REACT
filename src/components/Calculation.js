import React, { useEffect } from 'react'
import { MathComponent } from "mathjax-react";
import '../css/Board.css'

const Calculation = ({calculation,equations}) => {
 useEffect(()=>{
  let calcCont = document.getElementById('calcText');
  if(calcCont) {
   calcCont.innerHTML=calculation; 
  }
 },[equations])



  return (
    <div>
      <div className="textBox" id="textBox3">
        <div className='calcText' id='calcText'></div>
        <div className='eqnCont'> 
        {equations && Object.values(equations)?.map((eqaution,index)=>{
          let eqn= <><MathComponent key={index} className="equation" tex={eqaution}/> <span className='andSign'>&#38;</span></>  
          return eqn
        })}
        </div>
         
      </div>
    </div>
  )
}

export default Calculation