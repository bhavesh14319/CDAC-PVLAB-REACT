import React from "react";
import "../css/Popup.css";
import think from "../components/images/thinkcoin.png";

const Popup = (props) => {
  // const childFunc = React.useRef(null)
  function closePopUp() {
    let cont = document.querySelector(".popUpContainer");
    cont.style.display = "none";
  }

  function handleOutputLevel1(e) {
    e.preventDefault();
    const Head = document.getElementById("HEAD");
    const Tail = document.getElementById("TAIL");

    if (Head?.checked === true) {
      props?.setOutput("Head");
      props?.setheads(props?.heads + 1);
    }

    if (Tail?.checked === true) {
      props?.setOutput("Tail");
      props?.settails(props?.tails + 1);
    }

    if (Head && Tail) {
      Head.checked = false;
      Tail.checked = false;
    }

    let cont = document.querySelector("#popUpContainer");
    cont.style.display = "none";
    props.onNext();

    // const output = document.getElementById("coininput").value;
    // console.log(output);
    // props?.setOutput(output);
    // if(output==='head'){
    //   props?.setheads(props?.heads+1);
    // }else{
    //   props?.settails(props?.tails+1);
    // }
  }

  function handleOutputLevel2(e) {
    e.preventDefault();
    const HH = document.getElementById("HEAD-HEAD");
    const TT = document.getElementById("TAIL-TAIL");
    const TH = document.getElementById("TAIL-HEAD");
    const HT = document.getElementById("HEAD-TAIL");

    if (HH?.checked === true) {
      props?.setOutput("HEAD HEAD");
      props?.setHH(props?.HH + 1);
    }

    if (TT?.checked === true) {
      props?.setOutput("TAIL TAIL");
      props?.setTT(props?.TT + 1);
    }

    if (HT?.checked === true) {
      props?.setOutput("HEAD TAIL");
      props?.setHT(props?.HT + 1);
    }

    if (TH?.checked === true) {
      props?.setOutput("TAIL HEAD");
      props?.setTH(props?.TH + 1);
    }

    if (HH && TT && HT && TH) {
      HH.checked = false;
      TT.checked = false;
      TH.checked = false;
      HT.checked = false;
    }

    let cont = document.querySelector("#popUpContainer");
    cont.style.display = "none";
    props.onNext();
  }

  return (
    <div>
      <div className="popUpContainer fadeInClass " id="popUpContainer">
        <div className="popUp">
          {props?.level === 1 && (
            <>
              <h2>What was the Output you got on coin?</h2>
              <form action="">
                <div className="formCont">
                  <div className="inputContainer">
                    <span className="radioCont">
                      <span className="radioLable">HEAD</span>
                      <input
                        style={{
                          height: "20px",
                          width: "20px",
                          verticalAlign: "middle",
                        }}
                        type="radio"
                        name="OUTPUT"
                        id="HEAD"
                        value="HEAD"
                      />{" "}
                    </span>
                    <span className="radioCont">
                      <span className="radioLable">TAIL</span>
                      <input
                        style={{
                          height: "20px",
                          width: "20px",
                          verticalAlign: "middle",
                        }}
                        type="radio"
                        name="OUTPUT"
                        id="TAIL"
                        value="TAIL"
                      />{" "}
                    </span>
                  </div>
                  <div className="imageCont">
                    <span>
                      <img src={think} alt="think" />
                    </span>
                  </div>
                </div>
              </form>
              <div className="submit">
               <button onClick={handleOutputLevel1}>SUBMIT</button>
               </div>
            </>
          )}

          {props?.level === 2 && (
            <>
              <h2>What was the Output you got on coins?</h2>
              <form action="">
                <div className="formCont">
                <div className="inputContainerlevel2">
                  <div className="left_input">
                  <span className="radioCont">
                      <span className="radioLable">HEAD HEAD</span>
                      <input
                        style={{
                          height: "20px",
                          width: "20px",
                          verticalAlign: "middle",
                        }}
                        type="radio"
                        name="OUTPUT"
                        id="HEAD-HEAD"
                        value="HEAD HEAD"
                      />
                    </span>
                    <span className="radioCont">
                      <span className="radioLable">HEAD TAIL</span>
                      <input
                        style={{
                          height: "20px",
                          width: "20px",
                          verticalAlign: "middle",
                        }}
                        type="radio"
                        name="OUTPUT"
                        id="HEAD-TAIL"
                        value="HEAD TAIL"
                      />{" "}
                    </span></div>
                    <div className="right_input">
                    <span className="radioCont">
                      <span className="radioLable">TAIL HEAD</span>
                      <input
                        style={{
                          height: "20px",
                          width: "20px",
                          verticalAlign: "middle",
                        }}
                        type="radio"
                        name="OUTPUT"
                        id="TAIL-HEAD"
                        value="TAIL HEAD"
                      />{" "}
                    </span>
                    <span className="radioCont">
                      <span className="radioLable">TAIL TAIL</span>
                      <input
                        style={{
                          height: "20px",
                          width: "20px",
                          verticalAlign: "middle",
                        }}
                        type="radio"
                        name="OUTPUT"
                        id="TAIL-TAIL"
                        value="TAIL TAIL"
                      />{" "}
                    </span>
                    </div>
                  </div>
                  <div className="imageCont">
                    <span>
                      <img src={think} alt="think" />
                    </span>
                  </div>
                </div>
              </form>
              <div className="submit">
               <button onClick={handleOutputLevel2}>SUBMIT</button>
               </div>
            </>
          )}
        </div>
     
        {/* <div className="closeButton" onClick={closePopUp}>
          <span>&#10006;</span>
        </div> */}
      </div>
    </div>
  );
};

export default Popup;
