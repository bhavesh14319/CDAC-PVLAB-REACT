import React from "react";
import "../css/Popup.css";

const Popup = (props) => {
  // const childFunc = React.useRef(null)
  function closePopUp(){
    let cont = document.querySelector('.popUpContainer');
    cont.style.display="none";
  }
  

  function handleOutput(e){
    e.preventDefault();
    const output = document.getElementById("coininput").value;
    console.log(output);
    props?.setOutput(output);
    if(output==='head'){
      props?.setheads(props?.heads+1);
    }else{
      props?.settails(props?.tails+1);
    }
    let cont = document.querySelector('.popUpContainer');
    cont.style.display="none";
  }
  
  return (
    <div>
      <div className="popUpContainer fadeInClass " id="popUpContainer">
          <div className="popUp">
              <h2>What was the Output you got on coin?</h2>
              <form action="">
                <div className="inputContainer">
                  <label htmlFor="output">Enter Result</label>
                  <input id="coininput" type="text" placeholder="Enter Output Here"/>
                </div>
                  <button onClick={handleOutput} >SUBMIT</button>
              </form>
          </div>
          <div className="closeButton" onClick={closePopUp}>
                <span>&#10006;</span>
              </div>
      </div>
      
    </div>
  );
};

export default Popup;

