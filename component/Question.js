import react, { useState, useRef, useEffect } from 'react';

function Question(props) {

    const { data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep } = props;

    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();

    console.log(data)

    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if (findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [data]);

    const changeHandler = (e) => {
        setSelected(e.target.value);
        if (error) {
            setError('');
        }
    }

    const nextClickHandler = (e) => {
        if (selected === '') {
            return setError('Please select one option!');
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
        setSelected('');
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
        } else {
            onSetStep(3);
        }
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
            {/* <h2>{data.data[0].question}</h2> */}
            <div className="choices_container" ref={radiosWrapper}>
                {data.choices.map((choice, i) => (
                    <label className="radio has-background-light" key={i}>
                        <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                        {choice}
                    </label>
                ))}
            </div>
            {error && <div className="has-text-danger">{error}</div>}
            <button onClick={nextClickHandler}>Next</button>
            <button onClick={backClickHandler}>back</button>
        </div>
    )
}

export default Question;