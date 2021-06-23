import React from 'react'


function SelectList(props) {

    const { data, stepQuestion, numberOfQuestions, changeHandler, error, nextClickHandler, backClickHandler, getSelectedValue, selected } = props;

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    // ]

    return (
        <>
            <div className="container">
                <div className="input_content">
                    <p className="step">question {stepQuestion}/{numberOfQuestions}</p>
                    <h1>{data.question}</h1>
                    {data?.description &&
                        <p className="description">{data.description}</p>
                    }
                    <div className="select_bottom_container">
                        <select id={data.dataName} onChange={getSelectedValue} className="select" value={selected}>
                            {data.choices.map((choice, i) => (
                                <option value={choice.label}>{choice.label}</option>
                            ))
                            }
                        </select>
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div>
                        <button onClick={nextClickHandler} value="Search" className="input_next">Suivant</button>
                        <button onClick={nextClickHandler} className="input_skip">Passer la question</button>
                    </div>
                </div>
            </div>
            <button onClick={backClickHandler} className="back"><img src="/path.svg" alt="" />Question précédente</button>
        </>
    )
}
export default SelectList;