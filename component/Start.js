import React from 'react';

const Start = ({ onQuizStart }) => {
    return (
        <div className="start_card">
            <h1>Start the quiz</h1>
            <p>Good luck!</p>
            <button onClick={onQuizStart}>Start</button>
        </div>
    );
}

export default Start;