import react, { useState, useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';

function Question(props) {

    const { data, dataChange, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep } = props;

    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');

    const [stepQuestion, setStepQuestion] = useState(1);
    const [progress, setProgress] = useState(0);
    const [isActive, setIsActive] = useState({});
    const [isClicked, setIsClicked] = useState(false);


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

    function handleStyle(i) {
        setIsActive(i)
        setIsClicked(true)
    }

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
        onSetActiveQuestion(activeQuestion - 1);
        setStepQuestion(stepQuestion - 1)
        setProgress(((stepQuestion - 1) * 100) / numberOfQuestions)
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
                                {
                                    data.choices.map((choice, i) => (
                                        <>
                                            <div className={"block_card " + `${isClicked ? (i == isActive ? "active" : "inactive") : ''}`} onClick={e => handleStyle(i)} key={i}>
                                                {isActive === i &&
                                                    <img class="check" src="/check.svg" alt="" />
                                                }
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
                    <button onClick={backClickHandler} className="back"><img src="/path.svg" alt="" />Question précédente</button>
                </>
            }
        </section >
    )
}

export default Question;