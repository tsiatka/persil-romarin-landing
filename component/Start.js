import React from 'react';

const Start = ({ onQuizStart }) => {
    return (
        <div className="start_card">
            <h1>Commencer le quiz</h1>
            <button onClick={onQuizStart}>Start</button>
        </div>
    );
}

export default Start;