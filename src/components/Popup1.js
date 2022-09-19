import React from "react";
import "../css/Popup1.css";
import think from "../components/images/thinkcoin.png";
import swal from "sweetalert";

const Popup1 = (props) => {
  console.log("rendering");
  // const childFunc = React.useRef(null)
  React.useEffect(() => {
    console.log(props);
  }, []);

  function closePopUp() {
    let cont = document.querySelector(".popUpContainer");
    cont.style.display = "none";
  }

  function handleOutputLevel1(e) {
    e.preventDefault();
    // const Head = document.getElementById("HEAD");
    // const Tail = document.getElementById("TAIL");

    // if (Head?.checked === true) {
    //   props?.setOutput("Head");
    //   props?.setheads(props?.heads + 1);
    // }

    // if (Tail?.checked === true) {
    //   props?.setOutput("Tail");
    //   props?.settails(props?.tails + 1);
    // }

    // if (Head && Tail) {
    //   Head.checked = false;
    //   Tail.checked = false;
    // }

    // let cont = document.querySelector("#popUpContainer");
    // cont.style.display = "none";

    // // const output = document.getElementById("coininput").value;
    // // console.log(output);
    // // props?.setOutput(output);
    // // if(output==='head'){
    // //   props?.setheads(props?.heads+1);
    // // }else{
    // //   props?.settails(props?.tails+1);
    // // }

  }

  function handleOutputLevel(e) {
    e.preventDefault();
    const op1 = document.getElementById("Choice0");
    const op2 = document.getElementById("Choice1");
    const op3 = document.getElementById("Choice2");
    const op4 = document.getElementById("Choice3");

    console.log(op1, op2, op3, op4);

    if (op1?.checked === true) {
      console.log(typeof(op1.value))
      if (op1.value == props.question.correctAns) {
        swal({
          title: "Nice",
          text: "You Guessed it right 😀",
          icon: "success",
        })
        .then(()=> {
          let cont = document.querySelector("#popUpContainer1");
          cont.style.display = "none";
          props.onNext();
        })
      } else {
        console.log("wrong");
        swal("Oops! \n You made it wrong 🙂", `${props.question.justification}`, "error")
      }
    }

    if (op2?.checked === true) {
      if (op2.value == props.question.correctAns) {
        console.log("correct");
        swal({
          title: "Nice",
          text: "You Guessed it right 😀",
          icon: "success",
        })
        .then(()=> {
          let cont = document.querySelector("#popUpContainer1");
          cont.style.display = "none";
          props.onNext();
        })
      } else {
        console.log("wrong");
        swal("Oops! \n You made it wrong 🙂", `${props.question.justification}`, "error")
      }
    }

    if (op3?.checked === true) {
      if (op3.value == props.question.correctAns) {
        console.log("correct");
        swal({
          title: "Nice",
          text: "You Guessed it right 😀",
          icon: "success",
        })
        .then(()=> {
          let cont = document.querySelector("#popUpContainer1");
          cont.style.display = "none";
          props.onNext();
        })
      } else {
        console.log("wrong");
        swal("Oops! \n You made it wrong 🙂", `${props.question.justification}`, "error")
      }
    }

    if (op4?.checked === true) {
      if (op4.value == props.question.correctAns) {
        console.log("correct");
        swal({
          title: "Nice",
          text: "You Guessed it right 😀",
          icon: "success",
        })
        .then(()=> {
          let cont = document.querySelector("#popUpContainer1");
          cont.style.display = "none";
          props.onNext();
        })
      } else {
        console.log("wrong");
        swal("Oops! \n You made it wrong 🙂", `${props.question.justification}`, "error")
      }
    }

    if (op1 && op2 && op3 && op4) {
      op1.checked = false;
      op2.checked = false;
      op3.checked = false;
      op4.checked = false;
    }

    // let cont = document.querySelector("#popUpContainer");
    // cont.style.display = "none";
  }

  React.useEffect(()=>{
    setTimeout(() => {
      let cont = document.querySelector("#popUpContainer1");
      cont.style.display = "block";
      console.log(cont);
    }, 100);

  },[props])

  return (
    <div>
      <div className="popUpContainer1 fadeInClass " id="popUpContainer1">
        <div className="popUp1">
          <>
            <h2 className="question">{props?.question.Question}</h2>
            <form action="">
              <div className="formCont">
                <div className="col1">
                  <div className="inputContainer1">
                    <ol type="A">
                      {props?.question.Choices?.map((choice, index) => {
                        return (
                          <li>
                            <span className="radioCont1">
                              {console.log(choice)}
                              <input
                                style={{
                                  height: "20px",
                                  width: "20px",
                                  verticalAlign: "middle",
                                }}
                                type="radio"
                                name="OUTPUT"
                                id={`Choice${index}`}
                                value={choice}
                              />{" "}
                              <span className="radioLable1">{choice}</span>
                              
                            </span>
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </div>
                <div className="imageCont1">
                  <span>
                    <img src={think} alt="think" />
                  </span>
                </div>
              </div>
            </form>
            <div className="submit">
              <button onClick={handleOutputLevel}>SUBMIT</button>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Popup1;
