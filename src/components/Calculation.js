import React from 'react'
import { MathComponent } from "mathjax-react";
import '../css/Board.css'

const Calculation = ({calculation}) => {
  return (
    <div>
      <div className="textBox" id="textBox3">
          <MathComponent tex={calculation}/>
      </div>
    </div>
  )
}

export default Calculation