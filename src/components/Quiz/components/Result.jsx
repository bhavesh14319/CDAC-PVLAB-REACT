import React from 'react';
import "../Styles/Start.css";

const Result = ({ showResult, quizs, marks, startOver }) => {
    return (
        // <section className="bg-dark text-white">
            <div className="start_container"  style={{ display: `${showResult ? 'block' : 'none'}` }}>
                <div className={`result_container ${marks > (quizs.length * 5 / 2) ? 'bg-success' : 'bg-danger'}`}>
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > (quizs.length * 5 / 2) ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className='mb-2 fw-bold'>{marks > (quizs.length * 5 / 2) ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className='mb-3 fw-bold'>Your score is {marks} out of {quizs.length * 5}</h3>

                            <button onClick={startOver} className='btn py-2 px-4 btn-light fw-bold d-inline'>Start Over</button>
                        </div>
                    </div>
                </div>
            </div>
        // </section>
    );
};

export default Result;