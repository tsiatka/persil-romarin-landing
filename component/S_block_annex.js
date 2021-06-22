import React from 'react'

function S_block_annex(props) {

    const { data, stepQuestion, numberOfQuestions, questionHandler, error, nextClickHandler, backClickHandler, handleStyle, isClicked, isActive, changeHandler, isAnnex, backReplyHandler } = props;

    return (
        <>
            {isAnnex === false &&
                <>
                    <div className="block_container">
                        <div className="block_content">
                            <p className="uppercase">question {stepQuestion}/{numberOfQuestions}</p>
                            <h1>{data.question}</h1>
                            <div className="block_bottom_container">
                                {
                                    data.choices.map((choice, i) => (
                                        <>
                                            {console.log(isActive)}
                                            <div id="q2" value={choice.label} className={"block_card " + `${isClicked ? (i == isActive ? "active" : "inactive") : ''}`} onClick={e => handleStyle(i)} key={i}>
                                                {isActive === i &&
                                                    <img class="check" src="/check.svg" alt="" />
                                                }
                                                <div className="block_card_img">
                                                    <img src={choice.images} alt="" />
                                                </div>
                                                <p className="block_label">{choice.label}</p>
                                                {choice?.description &&
                                                    <p className="block_description">{choice.description}</p>
                                                }
                                            </div>
                                        </>
                                    ))
                                }
                            </div>
                            <div>
                                <button onClick={questionHandler} value="Search" className="next">Suivant</button>
                            </div>
                        </div>
                    </div>
                    <button onClick={backClickHandler} className="back"><img src="/path.svg" alt="" />Question précédente</button>
                </>
            }
            {isAnnex === true &&
                <>
                    <div className="block_container">
                        <div className="block_content">
                            <p className="uppercase">question annexe</p>
                            <h1>{data.question_annex}</h1>
                            <p className="question_annex">{data.description_annex}</p>
                            <div className="block_bottom_container_annex">
                                {
                                    data.choices_annex.map((choice, i) => (
                                        <>
                                            <div id="q2" value={choice.label} className={"block_card " + `${isClicked ? (i == isActive ? "active" : "inactive") : ''}`} onClick={e => handleStyle(i)} key={i}>
                                                {isActive === i &&
                                                    <img class="check" src="/check.svg" alt="" />
                                                }
                                                <div className="block_card_img">
                                                    <img src={choice.images} alt="" />
                                                </div>
                                                <p className="block_label">{choice.label}</p>
                                                {choice?.description &&
                                                    <p className="block_description">{choice.description}</p>
                                                }
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
                    <button onClick={backReplyHandler} className="back"><img src="/path.svg" alt="" />Question précédente</button>
                </>
            }
        </>
    )
}

export default S_block_annex;
