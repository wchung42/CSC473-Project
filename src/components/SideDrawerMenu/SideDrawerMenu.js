import React from 'react';
import './SideDrawerMenu.css';
import Game from '../Game/Game.js'
import Puzzle from '../Game/Puzzle';
const sideDrawerMenu = props => {
    let animateDrawer = 'side-drawer';

    
    if (props.show) {
        animateDrawer = 'side-drawer open';
    }
    
    return (
        <nav className = { animateDrawer }>
            <ul>
                <li><a href = "/Home">Log in</a> </li>
                <li><a href = "/Game">Games</a></li>
                <li><a href = "#">About Us</a></li>
                <li><a href = "#">Contact Us</a></li>
            </ul>
        </nav>
    )
};

export default sideDrawerMenu;