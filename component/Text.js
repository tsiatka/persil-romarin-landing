import React from 'react'

function Text(props) {

    const { data, stepQuestion, numberOfQuestions, changeHandler, error, nextClickHandler, dataAnswers, backClickHandler } = props;

    return (
        <>
            <div className="container">
                <div className="content_text">
                    <h1>{data.question + " "}{dataAnswers.prenom} 👋</h1>
                    <p className="description">{data.description}</p>
                    <div className="bottom_container_text">
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

export default Text;

