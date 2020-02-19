import React from 'react'

function Nav(props) {
    return (
        <nav className="navbar nav-pills nav-justified">
            <li className="nav-item">
                <a href="/">Jen's Clicky Game</a>
            </li>
            <li className="nav-item">
                {props.message}
            </li>
            <li className="nav-item">
                Score: {props.correctGuesses} | Top Score: {props.highScore}
            </li>
        </nav>
    )
}

export default Nav;
