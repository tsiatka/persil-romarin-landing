import react, { useState, useEffect } from 'react';
import { useCountUp } from 'react-countup';

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
        // if (data.type === "block16") {
        //     // const activeClass = document.getElementsByClassName('inactiveactive')
        //     // for (let i = 0; i < activeClass.length; i++) {
        //     //     console.log(activeClass[i])
        //     //     console.log(activeClass[i].getAttribute('value'))
        //     //     newData[e.target.id] = activeClass[i].getAttribute('value')

        //     // }
        //     newData[e.target.id] = e.target.getAttribute('value')
        // }
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
        // console.log(e.target.getAttribute('value'))
    }

    const nextClickHandler = (e) => {
        if (data.requis === true && data.dataName in dataAnswers === false && data.type !== "input2" && data.type !== "date") {
            return setError('* Ce champ est obligatoire');
        }
        // if (data.requis === true && data.type === "input2") {
        //     data.placeholders.map((placeholder, i) => {
        //         if ((data.dataName + '_' + placeholder) in dataAnswers === false) {
        //             return setError('* Ces champ sont obligatoires');
        //         }
        //     });

        // }
        if (stepQuestion < numberOfQuestions) {
            if (data.type === "input" || data.type === "text" || data.type === "input2" || data.type === "input1" || data.type === "select" || data.type === "date" || data.type === "block16" || data.type === "block6") {
                setPrevStep(activeQuestion)
                onSetActiveQuestion(data.choices[0].nextStep);
                setIsActive({})
                setIsClicked(false)

                if (datas.filter(item => item.id == data.choices[0].nextStep)[0].progress === true) {
                    setStepQuestion(stepQuestion + 1)
                    setProgress(((stepQuestion + 1) * 100) / numberOfQuestions)
                    setIsActive({})
                    setIsClicked(false)
                }
            } else {
                setPrevStep(activeQuestion)
                onSetActiveQuestion(data.choices[isReplyKey].nextStep);
                setIsActive({})
                setIsClicked(false)
                setIsReplyKey(false)

                if (datas.filter(item => item.id == data.choices[isReplyKey].nextStep)[0].progress === true) {
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
        onSetActiveQuestion(prevStep);
        if (data.type === "input" || data.type === "text" || data.type === "input2" || data.type === "input1" || data.type === "select" || data.type === "date" || data.type === "block16" || data.type === "block6" || data.type === "email") {

            if (datas.filter(item => item.id == prevStep)[0].progress === true) {
                setStepQuestion(stepQuestion - 1)
                setProgress(((stepQuestion - 1) * 100) / numberOfQuestions)
            }
        } else {
            // setPrevStep(activeQuestion)
            // onSetActiveQuestion(data.choices[isReplyKey].nextStep);

            if (datas.filter(item => item.id == prevStep)[0].progress === true) {
                setStepQuestion(stepQuestion - 1)
                setProgress(((stepQuestion - 1) * 100) / numberOfQuestions)
            }
        }
    }

    const questionHandler = (e) => {
        if (isAnnexKey === 2) {
            setIsAnnex(true);
            setIsClicked(false)
        } else {
            nextClickHandler()
        }
    }

    // const replyHandler = (e) => {
    //     if (isReplyKey === 0 || 1) {
    //         setInputAnswer(0)

    //     }
    //     if (isReplyKey === 2) {
    //         onSetActiveQuestion(activeQuestion + 1);
    //         setStepQuestion(stepQuestion + 1)
    //         setInputAnswer(0);
    //         setIsClicked(false)
    //     }
    // }


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
            />}
        </section >
    )
}

export default Question;