import React from 'react'

function BirthDate(props) {

    const { data, stepQuestion, numberOfQuestions, changeHandler, error, nextClickHandler, backClickHandler } = props;

    return (
        <>
            <div className="container">
                <div className="input_content_date">
                    <p className="step">question {stepQuestion}/{numberOfQuestions}</p>
                    <h1>{data.question}</h1>
                    <p className="description">{data.description}</p>
                    <div className="input_bottom_container_date">
                        {data.placeholders.map((placeholder, i) => (
                            <input type="number" id={data.dataName + "_" + placeholder} placeholder={placeholder} onChange={changeHandler} key={i} />
                        ))
                        }
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
    )
}

export default BirthDate
