import React from 'react';

function Result({ dataAnswers, data, step, onReset }) {
    return (
        <div className="result">
            <h3>Réponses données</h3>
            <p>{dataAnswers.q1}</p>
            <p>{dataAnswers.q2}</p>
            <p>{dataAnswers.q3}</p>
            <p>{dataAnswers.q4}</p>
            {step === 4 &&
                <button onClick={onReset}>Try again</button>}
        </div>
    );
}

export default Result;