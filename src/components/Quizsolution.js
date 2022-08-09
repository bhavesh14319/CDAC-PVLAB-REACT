import React, { useState } from 'react'

// import '../css/Board.css'

const Quizsolution = ({instruction}) => {
  const [text, setText] = useState('')
  const display = React.useRef(null)

  let current = ""



 

  React.useEffect(() => {
    let solutiontext=document.querySelector('.solutiontext');
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
      // console.log('found', spliitedText)
      display.current = setInterval(function() {
        if (i === (spliitedText.length)) {
          clearInterval(display.current);
          return
        }
       
    
          current += `${spliitedText[i]} ` 
          if(solutiontext){
            solutiontext.innerHTML=current; 
          }else{
            // console.log(solutiontext)
          }
          
         
        
        // if(current.includes('<br/>')){
        //   console.log(current)
        // }
        // setText(current);
            // solutiontext.innerHTML=current;
        i += 1
      }, 100);
    }

    showInstruction();
    return () => {
      if(display.current) {
        clearInterval(display.current);
      }
    }
  }, [instruction, current])

  return (
    <div>
        <div className="solutiontext">{text}</div>
        {/* <div className="solutiontext"></div> */}
    </div>
  )
}

export default Quizsolution;
