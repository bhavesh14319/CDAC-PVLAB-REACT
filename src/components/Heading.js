import React from 'react'
import '../css/Heading.css'


function Heading({level}) {
  return (
    <div className="heading-conatiner">
      {level==1 &&
        <span>Introduction to Probability</span>
      }
      {level==2 &&
        <span>Two Coin Probability</span>
      }
    </div>
  )
}

export default Heading