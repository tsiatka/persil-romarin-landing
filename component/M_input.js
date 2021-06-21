import React from 'react'

const M_input = (props) => {

    const { data, stepQuestion, numberOfQuestions, changeHandler, error, nextClickHandler, backClickHandler } = props;

    return (
        <>
            <div className="input_2_container">
                <div className="input_2_content">
                    <p className="step">question {stepQuestion}/{numberOfQuestions}</p>
                    <h1>{data.question}</h1>
                    <p className="description">{data.description}</p>
                    <div className="input_2_bottom_container">
                        {data.placeholders.map((placeholder, i) => (
                            <input type="number" id={"r" + (5 + i)} placeholder={placeholder} onChange={changeHandler} key={i} />
                        ))
                        }
                    </div>
                    {error && <div className="error">{error}</div>}
                    <button onClick={nextClickHandler} value="Search" className="next">Suivant</button>
                </div>
            </div>
            <button onClick={backClickHandler} className="back"><img src="/path.svg" alt="" />Question précédente</button>
        </>
    )
}

export default M_input;
