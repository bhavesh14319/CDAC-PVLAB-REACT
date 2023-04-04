import React from 'react';
import "../Styles/Start.css"


const Start = ({ startQuiz, showStart }) => {
    return (

        <div className="start_container" style={{ display: `${showStart ? 'flex' : 'none'}` }}>

            <div style={{flex:"0.5"}}>
                <img className='start_img' src="quiz_img.jpg" alt="" />
            </div>
            <div style={{display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center",flex:"0.5"}}>
                <h1 className='start_heading'>Test Your Knowledge </h1>

                <button className="start_btn" onClick={startQuiz} style={{ margin: "0 auto" }}>Start Quiz</button>
            </div>
        </div>
    );
};

export default Start;