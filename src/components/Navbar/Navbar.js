import React from 'react';

const navbar = props => (
    <header>
        <nav>
            <div><a href = "/">LOGO</a></div>
            <div>
                <ul>
                    <li><a href = "#">Log in</a></li>
                    <li><a href = "#">About</a></li>
                    <li><a href = "#">Games</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navbar;