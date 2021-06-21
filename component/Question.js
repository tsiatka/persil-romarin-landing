import react, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';

import Header from './Header';
import Input from './Input';
import S_input from './S_input';
import S_block from './S_block';
import S_block_annex from './S_block_annex';
import S_block_reply from './S_block_reply';


import M_block from './M_block';
import M_input from './M_input';

import L_block_16 from './L_block_16';

function Question(props) {

    const { data, dataChange, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep } = props;

    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const [errorInput, setErrorInput] = useState('');

    const [stepQuestion, setStepQuestion] = useState(1);
    const [progress, setProgress] = useState(0);
    const [isActive, setIsActive] = useState({});
    const [isClicked, setIsClicked] = useState(false);
    const [isAnnex, setIsAnnex] = useState(false);
    const [isAnnexKey, setIsAnnexKey] = useState(false);
    const [inputAnswer, setInputAnswer] = useState(0);
    const [isReplyKey, setIsReplyKey] = useState(false);
    const [counter, setCounter] = useState(0);


    let interval;

    const [dataAnswers, setDataAnswers] = useState({
        r1: "",
        q2: "",
        q3: "",
        q4: "",
        r5: "",
        r6: "",
        r7: "",
    })

    useEffect(() => {
        setProgress((stepQuestion * 100) / numberOfQuestions)
    }, [])

    const changeHandler = (e) => {
        const newData = { ...dataAnswers }
        newData[e.target.id] = e.target.value
        setDataAnswers(newData)
        console.log(newData)
        if (error) {
            setError('');
        }
    }

    // const changeHandler = (e) => {
    //     setSelected(e.target.value);
    //     console.log(selected)
    // }

    function handleStyle(i) {
        setIsActive(i)
        setIsClicked(true)
        setIsAnnexKey(i)
        setIsReplyKey(i)
    }

    const nextClickHandler = (e) => {
        if (dataAnswers.q1 === "" && activeQuestion === 0) {
            return setError('* Ce champ est obligatoire');
        }
        if (dataAnswers.r5 === "" && activeQuestion === 4) {
            return setError('* Ces champs sont obligatoires');

        }
        if (dataAnswers.r6 === "" && activeQuestion === 4) {
            return setError('* Ces champs sont obligatoires');

        }
        if (dataAnswers.r7 === "" && activeQuestion === 5) {
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

    const questionHandler = (e) => {
        if (isAnnexKey === 2) {
            setIsAnnex(true);
            setIsClicked(false)
        } else {
            nextClickHandler()
        }
    }

    const replyHandler = (e) => {
        if (isReplyKey === 0 || 1) {
            setInputAnswer(0)

        }
        if (isReplyKey === 2) {
            onSetActiveQuestion(activeQuestion + 1);
            setStepQuestion(stepQuestion + 1)
            setInputAnswer(0);
            setIsClicked(false)
        }
    }


    const backReplyHandler = (e) => {
        setIsAnnex(false)
        console.log(isAnnex)
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
                inputAnswer={inputAnswer}
                dataAnswers={dataAnswers}
            />}
            {data.type === "block_reply" && <S_block_reply
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
                inputAnswer={inputAnswer}
                dataAnswers={dataAnswers}
                replyHandler={replyHandler}
            />}
            {data.type === "block_annex" && <S_block_annex
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
                questionHandler={questionHandler}
                backReplyHandler={backReplyHandler}
                isAnnex={isAnnex}
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
                questionHandler={questionHandler}
                backReplyHandler={backReplyHandler}
            />}
            {data.type === "input2" && <M_input
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
                questionHandler={questionHandler}
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
            {data.type === "block16" && <L_block_16
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
                questionHandler={questionHandler}
            />}
        </section >
    )
}

export default Question;