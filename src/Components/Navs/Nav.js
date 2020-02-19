import React from 'react'

function Nav() {
    return (
        <nav className="navbar nav-pills nav-justified">
            <li className="nav-item">
                <a href="/">Jen's Clicky Game</a>
            </li>
            <li className="nav-item">
                Click on an Image to Start
                </li>
            <li className="nav-item">
                Score: 0 | Top Score: 0
                </li>
        </nav>
    )
}

export default Nav;
