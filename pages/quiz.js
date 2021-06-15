import react, { useState } from 'react';

import Question from "../component/Question";
import quizData from '../data/data.json';
import Start from '../component/Start';
import End from '../component/End';
import Result from '../component/Result';


export default function Quiz() {

    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [time, setTime] = useState(0);
    const [showModal, setShowModal] = useState(false);

    // let interval;

    const quizStartHandler = () => {
        setStep(2);
        // interval = setInterval(() => {
        //     setTime(prevTime => prevTime + 1);
        // }, 1000);
    }

    const resetClickHandler = () => {
        setActiveQuestion(0);
        setAnswers([]);
        setStep(2);
        setTime(0);
        // interval = setInterval(() => {
        //     setTime(prevTime => prevTime + 1);
        // }, 1000);
    }

    return (
        <div className="app">
            {step === 1 && <Start onQuizStart={quizStartHandler} />}
            {step === 2 && <Question
                data={quizData.data[activeQuestion]}
                onAnswerUpdate={setAnswers}
                numberOfQuestions={quizData.data.length}
                activeQuestion={activeQuestion}
                onSetActiveQuestion={setActiveQuestion}
                onSetStep={setStep}
            />}
            {step === 3 && <End
                results={answers}
                data={quizData.data}
                onReset={resetClickHandler}
                onAnswersCheck={() => setShowModal(true)}
                time={time}
            />}

            {showModal && <Result
                onClose={() => setShowModal(false)}
                results={answers}
                data={quizData.data}
            />}
        </div>
    )
}
