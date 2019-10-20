import React from 'react';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawerMenu/DrawerToggleButton';
import drawerToggleButton from '../SideDrawerMenu/DrawerToggleButton';

const navbar = props => (
    <header className = "navbar">
        <nav className = "navigation">
            <div>
                <DrawerToggleButton />
            </div>
            <div className = "nav-logo"><a href = "/">LOGO</a></div>
            <div className = "space-btw-logo-items" />
            <div className = "nav-items">
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