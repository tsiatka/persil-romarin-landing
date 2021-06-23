import React from 'react'

function Card({ plat, click }) {

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <>
            {
                plat.choices.map((item, i) => (
                    <div className="card" key={i}>
                        <img src={item.bg_img} alt="" />
                        <div className="description">
                            <p className="name">{truncate(item.name, 25)}</p>
                            <div className="icon_content">
                                <p className="gram">{item.gram}g</p>
                                <p className="barre">|</p>
                                <div className="icons">
                                    <img src={item.icon_gluten} alt="" />
                                    <img src={item.icon_lait} alt="" />
                                </div>
                            </div>
                            <div className="attribute">
                                <img src={item.attribute_img} alt="" />
                                <p>{item.attribute}</p>
                            </div>
                        </div>
                        <button onClick={click}>Ajouter au panier - 6,70€</button>
                    </div>
                ))
            }
        </>
    )
}

export default Card
