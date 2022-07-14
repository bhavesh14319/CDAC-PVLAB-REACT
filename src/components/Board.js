import React from "react";
import '../css/Board.css'

const Board = () => {
  return (
    <div>
      <div className="MainContainer" id="MainContainer">
        {/* <!-- Upper instruction Box --> */}
        <div className="instructionBox" id="instructionBox">
          <div className="textBox" id="textBox"></div>
        </div>
        {/* <!-- Character --> */}
        <div className="character" id="character">
          <img src='Character.png' alt=""  />
        </div>
      </div>
    </div>
  );
};

export default Board;
