import React from 'react'

const M_block = (props) => {

    const { data, stepQuestion, numberOfQuestions, replyHandler, error, nextClickHandler, backClickHandler, handleStyle, isClicked, isActive } = props;

    return (
        <>
            <div className="block_container">
                <div className="block_content">
                    <p className="uppercase">question {stepQuestion}/{numberOfQuestions}</p>
                    <h1>{data.question}</h1>
                    <div className="block_4_bottom_container">
                        {
                            data.choices.map((choice, i) => (
                                <>
                                    <div id={data.dataName} value={choice.label} className={"block_4_card " + `${isClicked ? (i == isActive ? "active" : "inactive") : ''}`} onClick={e => handleStyle(e, i)} key={i}>
                                        {isActive === i &&
                                            <img class="block_4_check" src="/check.svg" alt="" />
                                        }
                                        <div className="block_4_card_img">
                                            <img src={choice.images} alt="" />
                                        </div>
                                        <div className="block_4_label_container">
                                            <p className="block_4_label">{choice.label}</p>
                                            {choice?.description &&
                                                <p className="block_4_description">{choice.description}</p>
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

export default M_block;
