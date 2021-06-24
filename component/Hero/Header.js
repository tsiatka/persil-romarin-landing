import React from 'react'

function Header() {
    return (
        <header>
            <section>
                <div className="header_content">
                    <p>Vous êtes unique et vos besoins aussi. Découvrons ce qui vous correspond le mieux.</p>
                    <a href="/quiz">Faites le test !</a>
                </div>
                <div className="header_bottom">
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
                        <a href="">Carte cadeaux</a>
                        <a href="">Parrainage</a>
                        <button>Réserver mon chef</button>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header
