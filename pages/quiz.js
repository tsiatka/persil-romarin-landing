import react, { useState, useEffect } from 'react';

import _URL from "../component/url";
import Question from "../component/Question";
import quizData from '../data/data.json';
import Start from '../component/Start';
import Result from '../component/Result';
import QuestionCheckBox from '../component/QuestionCheckBox';
import Layout from '../component/Layout';


export default function Quiz() {

    const [step, setStep] = useState(2);
    const [question, setQuestion] = useState({});
    const [activeQuestion, setActiveQuestion] = useState(0);


    var headers = new Headers();
    headers.append("accept", "application/json");
    headers.get("accept");
    const myInit = {
        headers: headers,
    };

    // useEffect(() => {
    //     fetch(`${_URL}/questions`, myInit)
    //         .then((res) => res.json())
    //         .then((result) => {
    //             setQuestion(result);
    //             console.log(result)
    //         });
    // }, []);



    const [dataAnswers, setDataAnswers] = useState({
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: ""
    })

    const changeHandler = (e) => {
        const newData = { ...dataAnswers }
        newData[e.target.id] = e.target.value
        setDataAnswers(newData)
        console.log(newData)
    }

    const quizStartHandler = () => {
        setStep(2);
    }

    const resetClickHandler = () => {
        setActiveQuestion(0);
        setAnswers([]);
        setStep(2);
        setDataAnswers("")
    }

    return (
        <>
            <Layout />
            <div className="app">
                {step === 18 && <Start onQuizStart={quizStartHandler} />}
                {step === 2 && <Question
                    // dataChange={changeHandler}
                    data={quizData.data[activeQuestion]}
                // dataAnswers={dataAnswers}
                // onAnswerUpdate={setAnswers}
                // numberOfQuestions={quizData.data.length}
                // activeQuestion={activeQuestion}
                // onSetActiveQuestion={setActiveQuestion}
                // onSetStep={setStep}
                />}

                {step === 3 && <QuestionCheckBox
                    data={quizData.data[activeQuestion]}
                    dataChange={changeHandler}
                    onAnswerUpdate={setAnswers}
                    numberOfQuestions={quizData.data.length}
                    activeQuestion={activeQuestion}
                    onSetActiveQuestion={setActiveQuestion}
                    onSetStep={setStep}
                />}
                {step === 18 && <Result
                    onClose={() => setShowModal(false)}
                    dataAnswers={dataAnswers}
                    data={quizData.data}
                    step={step}
                    onReset={resetClickHandler}
                />}
            </div>
        </>
    )
}
