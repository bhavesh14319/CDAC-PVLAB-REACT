import React from 'react'
import '../css/Heading.css'


function Heading({level}) {
  return (
    <div className="heading-conatiner">
      {level==1 &&
        <span>Single Coin Probability</span>
      }
      {level==2 &&
        <span>Two Coin Probability</span>
      }
      {level==3 &&
        <span>Single Dice Probability</span>
      }
      {level==4 &&
        <span>Double Dice Probability</span>
      }
    </div>
  )
}

export default Heading;