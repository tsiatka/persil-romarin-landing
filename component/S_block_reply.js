/** Composant qui génére de 0 à 3 blocks **/

import React from 'react'

function S_block_reply(props) {

    const { data, stepQuestion, numberOfQuestions, replyHandler, error, nextClickHandler, backClickHandler, handleStyle, isClicked, isActive, changeHandler, inputAnswer, dataAnswers } = props;

    return (
        <>
            <div className="block_container">
                <div className="block_content">
                    <p className="uppercase">question {stepQuestion}/{numberOfQuestions}</p>
                    <h1>{data.question}</h1>
                    <div className="block_bottom_container">
                        {
                            data.choices.map((choice, i) => (
                                <>
                                    <div id="q2" value={choice.label} className={"block_card " + `${isClicked ? (i == isActive ? "active" : "inactive") : ''}`} onClick={e => handleStyle(e, i)} key={i}>
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
            <button onClick={backClickHandler} className="back"><img src="/path.svg" alt="" />Question précédente</button>


            {/* {inputAnswer === 1 &&
                <>
                    <div className="block_container">
                        <div className="block_content">
                            <h1>{dataAnswers.r1}</h1>
                            <p>Nous sommes heureux de savoir que tout roule pour vous !</p>
                        </div>
                    </div>
                </>
            }
            {inputAnswer === 2 &&
                <div className="block_container">
                    <div className="block_content">
                        <h1>Bonjour {dataAnswers.r1}</h1>
                        <p>Nous sommes heureux de savoir que tout roule pour vous !</p>
                    </div>
                </div>
            } */}
        </>
    )
}

export default S_block_reply;
