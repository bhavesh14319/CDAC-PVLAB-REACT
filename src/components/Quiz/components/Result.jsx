import React from 'react';
import "../Styles/Start.css";

const Result = ({ showResult,score, startOver }) => {
    score=100;
    return (
        // <section className="bg-dark text-white">
            <div className="start_container"  style={{ display: `${showResult ? 'block' : 'none'}` }}>
                <div className={`result_container`}>
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded`}>
                            <h1 className='mb-3 fw-bold' style={{margin:"10px 0"}}>{score >= (70) ? 'Awesome! 🥳🎉' : 'Oops! 😢😢'}</h1>
                            <h3 className='mb-5 fw-bold' style={{margin:"5px 0"}}>Your score is {score} out of {105}</h3>

                            <button onClick={startOver} className={`btn py-2 px-4 btn-light fw-bold d-inline ${score >= (70) ? 'btn-success' : 'btn-danger'}`}>Start Over</button>
                        </div>
                    </div>
                </div>
            </div>
        // </section>
    );
};

export default Result;