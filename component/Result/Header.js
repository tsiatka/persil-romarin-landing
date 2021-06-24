import React from 'react'

function Header({ count }) {
    return (
        <header>
            <div className="header_result">
                <div className="right">
                    <a href="">Le concept</a>
                    <a href="">Nos valeurs</a>
                </div>
                <div className="center">
                    <a href="/">
                        <img src="/logo.svg" alt="" />
                    </a>
                </div>
                <div className="left">
                    <a href="" className="link">Carte cadeaux</a>
                    <a href="" className="link">Parrainage</a>
                    <a href="" className="basket">
                        <p>Panier</p>
                        <p>{count}</p>
                    </a>
                    <button>Réserver mon chef</button>
                </div>
            </div>
        </header>
    )
}

export default Header
