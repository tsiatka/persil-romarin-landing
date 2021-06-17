import react, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';

function Question(props) {

    const { data, dataChange, dataAnswers, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep } = props;

    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');

    const [step, setStep] = useState(1);

    // const changeHandler = (e) => {
    //     setSelected(e.target.value);
    //     console.log(selected)
    // }

    const nextClickHandler = (e) => {
        setSelected('');
        console.log(activeQuestion, "coucou")
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
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
        <section>
            <Header numberOfQuestions={numberOfQuestions} step={step} />
            {data.type === "input" &&
                <div className="container">
                    <div className="content">
                        <p>question {step} / {numberOfQuestions}</p>
                        <h1>{data.question}</h1>
                        <p>{data.description}</p>
                        <div className="bottom_container">
                            <input type="text" />
                            <button>Suivant</button>
                        </div>
                    </div>
                </div>
            }
            {data.type === "block" &&
                <>
                    <div className="wrapper">
                        {
                            data.choices.map((choice, i) => (
                                <>
                                    <div className="card" key={i}>
                                        <img src="/rec.svg" alt="" />
                                        <h2>{choice}</h2>
                                        <p>En reprenant une alimentation saine et équilibrée</p>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                    <div className="card_bottom">
                        <button className="button_next" onClick={nextClickHandler}>Suivant<img src="/next.svg" alt="" /></button>
                    </div>
                </>
            }
            {/* <div className="card_container">
                <h2>Quel est votre prénom ?</h2>
                <div className="choices_container">
                    <input type="text" id="q1" onChange={dataChange} required />
                </div>
                <button onClick={nextClickHandler}>Next</button>
                <button onClick={backClickHandler}>back</button>
            </div> */}
        </section >
    )
}

export default Question;