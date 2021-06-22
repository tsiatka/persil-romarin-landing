import React from 'react'

function Input(props) {

    const { data, stepQuestion, numberOfQuestions, changeHandler, error, nextClickHandler, backClickHandler } = props;


    return (
        <>
            {data.requis === true &&
                <>
                    <div className="container">
                        <div className="input_content">
                            <p className="step">question {stepQuestion}/{numberOfQuestions}</p>
                            <h1>{data.question}</h1>
                            <p className="description">{data.description}</p>
                            <div className="input_bottom_container">
                                <input type="text" id={data.dataName} placeholder={data.placeholders} onChange={changeHandler} />
                            </div>
                            {error && <div className="error">{error}</div>}
                            {stepQuestion === numberOfQuestions ?
                                <button onClick={nextClickHandler} className="input_next" href="">Finaliser</button>
                                :
                                <button onClick={nextClickHandler} value="Search" className="input_next">Suivant</button>
                            }
                        </div>
                    </div>
                    <button onClick={backClickHandler} className="back"><img src="/path.svg" alt="" />Question précédente</button>
                </>
            }
            {data.requis === false &&
                <>
                    <div className="container">
                        <div className="input_content skip_input_content">
                            <p className="step">question {stepQuestion}/{numberOfQuestions}</p>
                            <h1>{data.question}</h1>
                            <p className="description">{data.description}</p>
                            <div className="skip_bottom_container">
                                <input type="text" id={data.dataName} className="skip_input" placeholder={data.placeholders} onChange={changeHandler} />
                            </div>
                            {error && <div className="error">{error}</div>}
                            <div>
                                <button onClick={nextClickHandler} className="input_next" href="">Suivant</button>
                                <button onClick={nextClickHandler} className="input_skip">Passer la question</button>
                            </div>
                        </div>
                    </div>
                    <button onClick={backClickHandler} className="back"><img src="/path.svg" alt="" />Question précédente</button>
                </>
            }
        </>
    )
}

export default Input
