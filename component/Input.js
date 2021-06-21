import React from 'react'

function Input(props) {

    const { data, stepQuestion, numberOfQuestions, changeHandler, error, nextClickHandler, backClickHandler } = props;

    return (
        <>
            <div className="container">
                <div className="input_content">
                    <p className="step">question {stepQuestion}/{numberOfQuestions}</p>
                    <h1>{data.question}</h1>
                    <p className="description">{data.description}</p>
                    <div className="input_bottom_container">
                        <input type="text" id="r7" placeholder={data.placeholders} onChange={changeHandler} />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <button onClick={nextClickHandler} value="Search" className="input_next">Suivant</button>
                </div>
            </div>
            <button onClick={backClickHandler} className="back"><img src="/path.svg" alt="" />Question précédente</button>
        </>
    )
}

export default Input
