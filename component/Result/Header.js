import React from 'react'

function Header() {
    return (
        <header>
            <div className="header_result">
                <div className="right">
                    <a href="">Le concept</a>
                    <a href="">Nos valeurs</a>
                </div>
                <div className="center">
                    <img src="/logo.svg" alt="" />
                </div>
                <div className="left">
                    <a href="" className="link">Carte cadeaux</a>
                    <a href="" className="link">Parainage</a>
                    <a href="" className="basket">
                        <p>Panier</p>
                        <p>9</p>
                    </a>
                    <button>Réserver mon chef</button>
                </div>
            </div>
        </header>
    )
}

export default Header
