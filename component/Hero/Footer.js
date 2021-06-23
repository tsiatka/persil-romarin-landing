import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="wrap">
                    <div className="wrap_container">
                        <div className="wrap_card">
                            <div className="wrap_card_img">
                                <img src="/cake.svg" alt="" />
                            </div>
                            <div className="wrap_label">
                                <p>Prenez un chef à domicile</p>
                                <p>Une fois par semaine, votre chef cuisine l’ensemble de vos plats à votre domicile.</p>
                            </div>
                        </div>
                        <div className="wrap_card">
                            <div className="wrap_card_img">
                                <img src="/cook.svg" alt="" />
                            </div>
                            <div className="wrap_label">
                                <p>15 nouveaux plats par semaine</p>
                                <p>Choisissez vos plats pour la semaine, le nombre de convives et vos disponibilités.</p>
                            </div>
                        </div>
                        <div className="wrap_card">
                            <div className="wrap_card_img">
                                <img src="/heart.svg" alt="" />
                            </div>
                            <div className="wrap_label">
                                <p>Sans prise de tête !</p>
                                <p>Votre chef s’occupe des courses et du nettoyage de votre cuisine.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom"></div>
            </div>
        </footer>
    )
}

export default Footer
