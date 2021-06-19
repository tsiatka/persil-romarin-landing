/** Composant qui génére un input **/

import React from 'react';


function S_input(props) {

    const { data, stepQuestion, numberOfQuestions, changeHandler, error, nextClickHandler } = props;

    return (
        <div className="container">
            <div className="content">
                <p className="step">question {stepQuestion}/{numberOfQuestions}</p>
                <h1>{data.question}</h1>
                <p className="description">{data.description}</p>
                <div className="bottom_container">
                    <input type="text" id="q1" onChange={changeHandler} />
                    <button onClick={nextClickHandler} value="Search" className="next">Suivant</button>
                </div>
                {error && <div className="error">{error}</div>}
            </div>
        </div>

    )
}

export default S_input;
