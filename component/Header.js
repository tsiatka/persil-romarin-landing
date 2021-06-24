import React, { useState, useEffect } from 'react'

const Header = (props) => {

    const { progress } = props;

    const [backgroundStyle, setBackgroundStyle] = useState({});

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
            <a href="/">
                <img src="/logo.svg" alt="" />
            </a>
        </header>
    )
}

export default Header;
