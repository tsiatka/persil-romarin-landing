import React from 'react'

function L_block_16(props) {

    const { data, stepQuestion, numberOfQuestions, replyHandler, error, nextClickHandler, backClickHandler, handleStyle, isClicked, isActive } = props;

    return (
        <>
            <div className="block_container">
                <div className="block_content">
                    <p className="uppercase">question {stepQuestion}/{numberOfQuestions}</p>
                    <h1 className="title_block_16">{data.question}</h1>
                    <div className="block_16_bottom_container">
                        {
                            data.choices.map((choice, i) => (
                                <>
                                    <div id="q2" value={choice.label} className={"block_16_card " + `${isClicked ? (i == isActive ? "active" : "inactive") : ''}`} onClick={e => handleStyle(i)} key={i}>
                                        {isActive === i &&
                                            <img class="block_16_check" src="/check.svg" alt="" />
                                        }
                                        <div className="block_16_card_img">
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
                        <button onClick={nextClickHandler} value="Search" className="next_block_16">Suivant</button>
                    </div>
                    {data.reply === false &&
                        <div>
                            <button onClick={replyHandler} value="Search" className="next">Suivant</button>
                        </div>
                    }
                </div>
            </div>
            <button onClick={backClickHandler} className="back"><img src="/path.svg" alt="" />Question précédente</button>
        </>
    )
}

export default L_block_16;
