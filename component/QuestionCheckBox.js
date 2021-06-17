import react, { useState, useRef } from 'react';

function QuestionCheckBox(props) {

    const { data, dataChange, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep } = props;

    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();

    console.log(data)

    const handler = (e) => {
        setSelected(e.target.value);
        console.log(e.target.value, "value")
        if (error) {
            setError('');
        }
    }

    const nextClickHandler = (e) => {
        if (selected === '') {
            return setError('Please select one option!');
        }
        onSetStep(4);
    }

    const backClickHandler = (e) => {
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion - 1);
        } else {
            onSetStep(3);
        }
    }

    return (
        <div className="card_container">
            <h2>Vous êtes ?</h2>
            <div className="choices_container">
                <label>une femme</label>
                <input type="checkbox" id="q2" value="une femme" onClick={dataChange} onChange={handler}></input>
                <label>un homme</label>
                <input type="checkbox" id="q2" value="un homme" onClick={dataChange} onChange={handler}></input>
                <label>un couple</label>
                <input type="checkbox" id="q2" value="en couple" onClick={dataChange} onChange={handler}></input>
                <label>à la retraite</label>
                <input type="checkbox" id="q2" value="à la retraite" onClick={dataChange} onChange={handler}></input>
            </div>
            {error && <div>{error}</div>}
            <button onClick={nextClickHandler}>Next</button>
            <button onClick={backClickHandler}>back</button>
        </div>
    )
}

export default QuestionCheckBox;