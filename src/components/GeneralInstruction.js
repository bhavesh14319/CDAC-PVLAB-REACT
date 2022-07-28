import React from 'react'
import '../css/Board.css'

const GeneralInstruction = ({instruction}) => {
  const [text, setText] = React.useState('')
  const display = React.useRef(null)
  let current = ""

  React.useEffect(() => {
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

      display.current = setInterval(function() {
        if (i === (spliitedText.length)) {
          clearInterval(display.current);
          return
        }

        current += `${spliitedText[i]} `
        setText(current);
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
        <div className="textBox">{text}</div>
    </div>
  )
}

export default GeneralInstruction
