import react, { useState, useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';

function Question(props) {

    const { data, dataChange, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep } = props;

    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');

    const [stepQuestion, setStepQuestion] = useState(1);
    const [progress, setProgress] = useState(0);

    const [dataAnswers, setDataAnswers] = useState({
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: ""
    })

    useEffect(() => {
        setProgress((stepQuestion * 100) / numberOfQuestions)
    }, [])

    const changeHandler = (e) => {
        const newData = { ...dataAnswers }
        newData[e.target.id] = e.target.value
        setDataAnswers(newData)
        console.log(newData)
    }

    // const changeHandler = (e) => {
    //     setSelected(e.target.value);
    //     console.log(selected)
    // }

    const nextClickHandler = (e) => {
        if (dataAnswers.q1 === "") {
            return setError('* Ce champ est obligatoire');
        }
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
            setStepQuestion(stepQuestion + 1)
            setProgress(((stepQuestion + 1) * 100) / numberOfQuestions)
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
            <Header numberOfQuestions={numberOfQuestions} stepQuestion={stepQuestion} progress={progress} />
            {data.type === "input" &&
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
            }
            {data.type === "block" &&
                <>
                    <div className="block_container">
                        <div className="block_content">
                            <p className="uppercase">question {stepQuestion}/{numberOfQuestions}</p>
                            <h1>{data.question}</h1>
                            <div className="block_bottom_container">
                                {console.log(data.choices)}
                                {
                                    data.choices.map((choice, i) => (
                                        <>
                                            <div className="block_card">
                                                <div className="block_card_img">
                                                    <img src={choice.images} alt="" />
                                                </div>
                                                <p>{choice.label}</p>
                                            </div>

                                        </>
                                    ))
                                }
                            </div>
                            <div>
                                <button onClick={nextClickHandler} value="Search" className="next">Suivant</button>
                            </div>
                        </div>
                    </div>
                    <button className="back"><img src="/path.svg" alt="" />Question précédente</button>
                    {/* <div className="wrapper">
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
                    </div> */}
                </>
            }
        </section >
    )
}

export default Question;