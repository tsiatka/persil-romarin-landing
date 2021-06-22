import React from 'react'


function SelectList(props) {

    const { data, stepQuestion, numberOfQuestions, changeHandler, error, nextClickHandler, backClickHandler, getSelectedValue, selected } = props;

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    // ]

    return (
        <>
            <div className="container">
                <div className="input_content">
                    <p className="step">question {stepQuestion}/{numberOfQuestions}</p>
                    <h1>{data.question}</h1>
                    {data?.description &&
                        <p className="description">{data.description}</p>
                    }
                    <div className="select_bottom_container">
                        <select id={data.dataName} onChange={getSelectedValue} value={selected}>
                            <option value=""></option>
                            <option value="Instagram">Instagram</option>
                            <option value="Pinterest">Pinterest</option>
                            <option value="Facebook">Facebook</option>
                            <option value="Twitter">Twitter</option>
                            <option value="Article/Blog">Article/Blog</option>
                            <option value="Télévision">Télévision</option>
                            <option value="Radio">Radio</option>
                            <option value="Bouche à oreille">Bouche à oreille</option>
                            <option value="Recherche sur internet">Recherche sur internet</option>
                            <option value="Panneaux publicitaires">Panneaux publicitaires</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div>
                        <button onClick={nextClickHandler} value="Search" className="input_next">Suivant</button>
                        <button onClick={nextClickHandler} className="input_skip">Passer la question</button>
                    </div>
                </div>
            </div>
            <button onClick={backClickHandler} className="back"><img src="/path.svg" alt="" />Question précédente</button>
        </>
    )
}
export default SelectList;