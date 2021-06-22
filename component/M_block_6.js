import React, { useState } from 'react'

function M_block_6(props) {

    const { data, stepQuestion, numberOfQuestions, replyHandler, error, nextClickHandler, backClickHandler, handleStyle, isClicked, changeHandler } = props;


    //const [isChecked, setIsChecked] = useState(false)
    const [checkedState, setCheckedState] = useState(
        new Array(data.choices.length).fill(false)
    );

    const handleMultipleBlock = (position) => {
        const updateCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item)

        setCheckedState(updateCheckedState);
    };

    const handleClick = (e, i) => {
        handleMultipleBlock(i)
        changeHandler(e, i)
    }



    return (
        <>
            <div className="block_container">
                <div className="block_content">
                    <p className="uppercase">question {stepQuestion}/{numberOfQuestions}</p>
                    <h1 className="title_block_16">{data.question}</h1>
                    <div className="block_6_bottom_container">
                        {
                            data.choices.map((choice, i) => (
                                <>
                                    <div id={data.dataName} value={choice.label} checked={checkedState[i]} className={"block_6_card " + `${checkedState.find((item) => item === true) ? "inactive" : ""}` + `${checkedState[i] ? "active" : ""}`} onClick={e => handleClick(e, i)} key={i}>
                                        {checkedState[i] &&
                                            <img class="block_16_check" src="/check.svg" alt="" />
                                        }
                                        <div className="block_6_card_img">
                                            <img src={choice.images} alt="" />
                                        </div>
                                        <div className="block_16_label_container">
                                            <p className="block_16_label">{choice.label}</p>
                                            {choice?.description &&
                                                <p className="block_16_description">{choice.description}</p>
                                            }
                                        </div>
                                    </div>

                                </>
                            ))
                        }
                    </div>
                    <div>
                        {stepQuestion === numberOfQuestions ?
                            <button onClick={nextClickHandler} className="next" href="">Finaliser</button>
                            :
                            <button onClick={nextClickHandler} value="Search" className="next">Suivant</button>
                        }
                    </div>
                </div>
            </div>
            <button onClick={backClickHandler} className="back"><img src="/path.svg" alt="" />Question précédente</button>
        </>
    )
}

export default M_block_6;
