import React, { useState, useEffect } from 'react'

const Header = (props) => {

    const { step, numberOfQuestions } = props;

    const [backgroundStyle, setBackgroundStyle] = useState({});
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress((step * 100) / numberOfQuestions)
    }, []);


    setTimeout(() => {
        const newStyle = {
            backgroundColor: '#000000',
            width: `${progress}%`,
        }
        setBackgroundStyle(newStyle)

    })
    return (
        <header>
            <div className="header_container">
                <div className="progressBar">
                    <div className="progress" style={backgroundStyle}></div>
                </div>
            </div>
            <img src="/logo.svg" alt="" />
        </header>
    )
}

export default Header;
