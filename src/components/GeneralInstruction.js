import React from 'react'
import '../css/Board.css'

const GeneralInstruction = ({instruction}) => {
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    let splitText = (text, splitParameter) =>{
      let t = text?.split(splitParameter);
      return t;
    }

    function showInstruction() {
      setText("")
      let spliitedText = splitText(instruction,' ');
      let i = 0;
      let display = setInterval(function() {
        setText((current) => {
          return current + `${spliitedText[i]} `;
        });
  
        if (i === (spliitedText.length-1)) {
            clearInterval(display);
        }
        i += 1
      }, 100);
    }

    showInstruction();
  }, [instruction])

  return (
    <div>
        <div className="textBox" id="textBox1">{text}</div>
    </div>
  )
}

export default GeneralInstruction
