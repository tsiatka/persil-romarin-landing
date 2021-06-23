import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer_container">
                <div className="container">
                    <div>
                        <img src="/logo_white.svg" alt="" />
                    </div>
                    <div className="column">
                        <p>A propos</p>
                        <p>Contactez-nous</p>
                        <p>Mention légales</p>
                        <p>CGV</p>
                    </div>
                    <div className="column">
                        <p>Concept</p>
                        <p>FAQ</p>
                        <p>Vous êtes chef ?</p>
                    </div>
                    <div className="column">
                        <p>Liens utiles</p>
                        <p>1Kubator</p>
                    </div>
                    <div className="column">
                        <p>Updates and more</p>
                        <p>Suivez-nous sur facebook</p>
                        <p>Suivez-nous sur instagram</p>
                    </div>
                </div>
                <div className="bottom_footer">
                    <p>Copyright 2021 - Persil & Romarin</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
