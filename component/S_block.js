/** Composant qui génére de 0 à 3 blocks **/

import React from 'react'

function S_block(props) {

    const { data, stepQuestion, numberOfQuestions, replyHandler, error, nextClickHandler, backClickHandler, handleStyle, isClicked, isActive, changeHandler } = props;

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
            <button onClick={backClickHandler} className="back"><img src="/path.svg" alt="" />Question précédente</button>
        </>
    )
}

export default S_block;
