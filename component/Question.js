import react, { useState, useEffect } from 'react';
import Axios from "axios";

import _URL from "./url";

import Header from './Header';
import Input from './Input';
import S_input from './S_input';
import S_block from './S_block';
import Text from './Text';
import SelectList from './SelectList';


import M_block from './M_block';
import M_block_6 from './M_block_6';
import M_input from './M_input';

import L_block_16 from './L_block_16';
import BirthDate from './BirthDate';
import Email from './Email';

function Question(props) {

    const axios = require('axios');

    const { data, dataChange, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep, datas } = props;

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

    const [prevStep, setPrevStep] = useState(0);
    const [birthDate, setBirthDate] = useState(new Date());


    let interval;

    const [dataAnswers, setDataAnswers] = useState({})




    useEffect(() => {
        setProgress((stepQuestion * 100) / numberOfQuestions)
    }, [])

    const getSelectedValue = (e) => {
        setSelected(e.target.value)
        changeHandler(e)
    }

    const changeHandler = (e) => {
        const newData = { ...dataAnswers }
        if (data.type === "block4" || data.type === "block" || data.type === "block16" || data.type === "block6") {

            newData[e.target.id] = e.target.getAttribute('value')
        }
        else {
            newData[e.target.id] = e.target.value
        }
        setDataAnswers(newData)

        console.log(newData)
        if (error) {
            setError('');
        }
    }


    function handleStyle(e, i) {
        setIsActive(i)
        setIsClicked(true)
        // setIsAnnexKey(i)
        setIsReplyKey(i)
        changeHandler(e)
    }

    console.log(numberOfQuestions, datas, data)

    const nextClickHandler = (e) => {
        if (data.requis === true && data.dataName in dataAnswers === false && data.type !== "input2" && data.type !== "date") {
            return setError('* Ce champ est obligatoire');
        }
        if (stepQuestion < numberOfQuestions) {
            setPrevStep(activeQuestion)
            if (data.type === "input" || data.type === "text" || data.type === "input2" || data.type === "input1" || data.type === "select" || data.type === "date" || data.type === "block16" || data.type === "block6") {
                onSetActiveQuestion(data.choices[0].nextStep);
                setIsActive({})
                setIsClicked(false)
                console.log("object")

                if (datas.filter(item => item.ordre == data.choices[0].nextStep)[0].progress === true) {
                    setStepQuestion(stepQuestion + 1)
                    setProgress(((stepQuestion + 1) * 100) / numberOfQuestions)
                    setIsActive({})
                    setIsClicked(false)
                }
            } else {
                onSetActiveQuestion(data.choices[isReplyKey].nextStep);
                setIsActive({})
                setIsClicked(false)
                setIsReplyKey(false)

                if (datas.filter(item => item.ordre == data.choices[isReplyKey].nextStep)[0].progress === true) {
                    setStepQuestion(stepQuestion + 1)
                    setProgress(((stepQuestion + 1) * 100) / numberOfQuestions)
                    setIsActive({})
                    setIsClicked(false)
                    setIsReplyKey(false)
                }
            }
        }
    }

    const backClickHandler = (e) => {
        console.log(prevStep, "prevestep")
        onSetActiveQuestion(prevStep);

        if (datas.filter(item => item.ordre == prevStep)[0].progress === true) {
            setStepQuestion(stepQuestion - 1)
            setProgress(((stepQuestion - 1) * 100) / numberOfQuestions)

        }
        setPrevStep(prevStep - 1)
    }
    const questionHandler = (e) => {
        if (isAnnexKey === 2) {
            setIsAnnex(true);
            setIsClicked(false)
        } else {
            nextClickHandler()
        }
    }
    const backReplyHandler = (e) => {
        setIsAnnex(false)
        console.log(isAnnex)
    }

    async function postAPI() {

        let dataAPI = JSON.stringify(dataAnswers)
        console.log(dataAPI, "dataAPI")

        // Axios.post(`${_URL}/clients`, {
        //     dataAPI
        // })
        let res = await axios.post(`${_URL}/clients`, dataAPI);
        let test = res.test;
        console.log(test);

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
            {data.type === "text" && <Text
                data={data}
                stepQuestion={stepQuestion}
                numberOfQuestions={numberOfQuestions}
                changeHandler={changeHandler}
                error={error}
                nextClickHandler={nextClickHandler}
                dataAnswers={dataAnswers}
                backClickHandler={backClickHandler}
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
            {data.type === "date" && <BirthDate
                data={data}
                stepQuestion={stepQuestion}
                numberOfQuestions={numberOfQuestions}
                changeHandler={changeHandler}
                error={error}
                nextClickHandler={nextClickHandler}
                backClickHandler={backClickHandler}
            // birthDate={birthDate}
            // birthDateHandler={birthDateHandler}
            />}
            {data.type === "select" && <SelectList
                data={data}
                stepQuestion={stepQuestion}
                numberOfQuestions={numberOfQuestions}
                changeHandler={changeHandler}
                error={error}
                nextClickHandler={nextClickHandler}
                backClickHandler={backClickHandler}
                getSelectedValue={getSelectedValue}
                selected={selected}
            />}
            {data.type === "block16" && <L_block_16
                data={data}
                stepQuestion={stepQuestion}
                numberOfQuestions={numberOfQuestions}
                changeHandler={changeHandler}
                error={error}
                nextClickHandler={nextClickHandler}
                backClickHandler={backClickHandler}
                isClicked={isClicked}
                isActive={isActive}
                questionHandler={questionHandler}
                changeHandler={changeHandler}
            />}
            {data.type === "block6" && <M_block_6
                data={data}
                stepQuestion={stepQuestion}
                numberOfQuestions={numberOfQuestions}
                changeHandler={changeHandler}
                error={error}
                nextClickHandler={nextClickHandler}
                backClickHandler={backClickHandler}
                isClicked={isClicked}
                isActive={isActive}
                questionHandler={questionHandler}
                changeHandler={changeHandler}
            />}
            {data.type === "email" && <Email
                data={data}
                stepQuestion={stepQuestion}
                numberOfQuestions={numberOfQuestions}
                changeHandler={changeHandler}
                error={error}
                nextClickHandler={nextClickHandler}
                backClickHandler={backClickHandler}
                postAPI={postAPI}
            />}
        </section >
    )
}

export default Question;