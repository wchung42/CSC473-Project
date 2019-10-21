import React from 'react';
import './SideDrawerMenu.css';

const sideDrawerMenu = props => (
    <nav className = "side-drawer">
        <ul>
            <li><a href = "#">Games</a></li>
            <li><a href = "#">About Us</a></li>
            <li><a href = "#">Contact Us</a></li>
        </ul>
    </nav>
);

export default sideDrawerMenu;