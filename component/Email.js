import React from 'react'

function Email(props) {

    const { data, stepQuestion, numberOfQuestions, changeHandler, error, nextClickHandler, backClickHandler } = props;

    return (
        <>
            <div className="container">
                <div className="email_content">
                    <p className="step">question {stepQuestion}/{numberOfQuestions}</p>
                    <h1>{data.question}</h1>
                    <p className="description">{data.description}</p>
                    <div className="email_bottom_container">
                        <input clasName="email_input" type="email" id={data.dataName} placeholder={data.placeholders} onChange={changeHandler} />
                        <>
                            {data?.dataName === "email" &&
                                <>
                                    <div className="checkbox_content">
                                        <input type="checkbox" />
                                        <p>J’accepte de recevoir des communications de Persil & Romarin</p>
                                    </div>
                                </>
                            }
                        </>
                    </div>
                    {error && <div className="error_email">{error}</div>}
                    {stepQuestion === numberOfQuestions ?
                        <button onClick={nextClickHandler} className="input_next" href="">Finaliser</button>
                        :
                        <button onClick={nextClickHandler} value="Search" className="input_next">Suivant</button>
                    }
                </div>
            </div>
            <button onClick={backClickHandler} className="back"><img src="/path.svg" alt="" />Question précédente</button>

        </>
    )
}

export default Email