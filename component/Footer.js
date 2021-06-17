import React, { useState, useEffect } from 'react'

const Footer = () => {

    const [backgroundStyle, setBackgroundStyle] = useState({});
    const [step, setStep] = useState(1);
    const [numberQuestion, setNumberQuestion] = useState(14);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress((step * 100) / numberQuestion)
    }, []);


    setTimeout(() => {
        const newStyle = {
            backgroundColor: '#000000',
            width: `${progress}%`,
        }
        setBackgroundStyle(newStyle)

    })

    const handle = () => {
        setStep(step + 1)
        setProgress(((step + 1) * 100) / numberQuestion)
    }

    return (
        <footer>
            <div className="footer_container">
                <p>Etape {step} / {numberQuestion}</p>
                {/* <button onClick={handle}></button> */}
                <div className="progressBar">
                    <div className="progress" style={backgroundStyle}></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
