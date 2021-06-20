import react, { useState, useEffect } from 'react';

import Header from './Header';
import Input from './Input';
import S_input from './S_input';
import S_block from './S_block';

import M_block from './M_block';
import M_input from './M_input';


function Question(props) {

    const { data, dataChange, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep } = props;

    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const [errorInput, setErrorInput] = useState('');

    const [stepQuestion, setStepQuestion] = useState(1);
    const [progress, setProgress] = useState(0);
    const [isActive, setIsActive] = useState({});
    const [isClicked, setIsClicked] = useState(false);


    const [dataAnswers, setDataAnswers] = useState({
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        r5: "",
        r6: ""
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
        console.log(activeQuestion)
        if (dataAnswers.q1 === "") {
            return setError('* Ce champ est obligatoire');
        }
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
            setStepQuestion(stepQuestion + 1)
            setProgress(((stepQuestion + 1) * 100) / numberOfQuestions)
            setIsActive({})
            setIsClicked(false)
        }
    }

    const backClickHandler = (e) => {
        onSetActiveQuestion(activeQuestion - 1);
        setStepQuestion(stepQuestion - 1)
        setProgress(((stepQuestion - 1) * 100) / numberOfQuestions)
    }

    const replyHandler = (e) => {

    }

    return (
        <section>
            <Header numberOfQuestions={numberOfQuestions} stepQuestion={stepQuestion} progress={progress} />
            {data.type === "input" && <S_input
                data={data}
                stepQuestion={stepQuestion}
                numberOfQuestions={numberOfQuestions}
                changeHandler={changeHandler}
                error={error}
                nextClickHandler={nextClickHandler}
            />}
            {data.type === "block" && <S_block
                data={data}
                stepQuestion={stepQuestion}
                numberOfQuestions={numberOfQuestions}
                changeHandler={changeHandler}
                error={error}
                nextClickHandler={nextClickHandler}
                backClickHandler={backClickHandler}
                handleStyle={handleStyle}
                isClicked={isClicked}
                isActive={isActive}
                replyHandler={replyHandler}
            />}
            {data.type === "block4" && <M_block
                data={data}
                stepQuestion={stepQuestion}
                numberOfQuestions={numberOfQuestions}
                changeHandler={changeHandler}
                error={error}
                nextClickHandler={nextClickHandler}
                backClickHandler={backClickHandler}
                handleStyle={handleStyle}
                isClicked={isClicked}
                isActive={isActive}
                replyHandler={replyHandler}
            />}
            {data.type === "input2" && <M_input
                data={data}
                stepQuestion={stepQuestion}
                numberOfQuestions={numberOfQuestions}
                changeHandler={changeHandler}
                errorInput={errorInput}
                nextClickHandler={nextClickHandler}
                backClickHandler={backClickHandler}
                handleStyle={handleStyle}
                isClicked={isClicked}
                isActive={isActive}
                replyHandler={replyHandler}
            />}
            {data.type === "input1" && <Input
                data={data}
                stepQuestion={stepQuestion}
                numberOfQuestions={numberOfQuestions}
                changeHandler={changeHandler}
                error={error}
                nextClickHandler={nextClickHandler}
                backClickHandler={backClickHandler}
            />}
        </section >
    )
}

export default Question;