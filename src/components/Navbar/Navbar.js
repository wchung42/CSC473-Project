import React from 'react';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawerMenu/DrawerToggleButton';

const navbar = props => (
    <header className="navbar">
        <nav className="navigation">
            <div className="nav-logo"><a href="/"><img src={require("./escape.png")} alt="logo" /></a></div>
            <div className="space-btw-logo-items" />
            {/* <div className="nav-items">
                <ul>
                    <li ><a href="#">Log in</a></li>
                </ul>
            </div> */}
            <div>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
        </nav>
    </header>
);

export default navbar;