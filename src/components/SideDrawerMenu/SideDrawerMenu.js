import React from 'react';
import './SideDrawerMenu.css';

const sideDrawerMenu = props => (
    <nav className = "side-drawer">
        <ul>
            <li><a href = "#">About</a></li>
            <li><a href = "#">Games</a></li>
        </ul>
    </nav>
);

export default sideDrawerMenu;