import React from 'react';
import './SideDrawerMenu.css';
<<<<<<< HEAD
import {Link} from "react-router-dom";
=======
import Game from '../Game/Game.js'
import Puzzle from '../Game/Puzzle';


>>>>>>> 996896bb55aab14b3b6480ad970c95e916c444d7
const sideDrawerMenu = props => {
    let animateDrawer = 'side-drawer';

    
    if (props.show) {
        animateDrawer = 'side-drawer open';
    }
    
    return (
        <nav className = { animateDrawer }>
            <ul>
<<<<<<< HEAD
                <li><a href = "#">Game</a></li>
=======
                <li><a href = "/Home">Log in</a> </li>
                <li><a href = "/Game">Games</a></li>
>>>>>>> 996896bb55aab14b3b6480ad970c95e916c444d7
                <li><a href = "#">About Us</a></li>
                <li><a href = "#">Contact Us</a></li>
            </ul>
        </nav>
    )
};

export default sideDrawerMenu;