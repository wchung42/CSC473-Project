import React from 'react';
import './SideDrawerMenu.css';
import {Link} from "react-router-dom";
const sideDrawerMenu = props => {
    let animateDrawer = 'side-drawer';
    
    if (props.show) {
        animateDrawer = 'side-drawer open';
    }
    
    return (
        <nav className = { animateDrawer }>
            <ul>
                <li><a href = "#">Game</a></li>
                <li><a href = "#">About Us</a></li>
                <li><a href = "#">Contact Us</a></li>
            </ul>
        </nav>
    )
};

export default sideDrawerMenu;