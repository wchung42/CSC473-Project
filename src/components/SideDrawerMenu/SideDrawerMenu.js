import React, { Component } from 'react';
import './SideDrawerMenu.css';

class sideDrawerMenu extends Component{
    constructor(props) {
        super(props)
        this.state = {
          username:'',
          menu: props.show,
          animateDrawer:'side-drawer'
        }
    }
       
    render(){
        let animateDrawer = 'side-drawer';
        if (this.props.show) {
            animateDrawer = 'side-drawer open';
         }

        return (
            <nav className = {animateDrawer}>
                <ul>
                    <li><a href = "/Game">Games</a></li>
                    <li><a href = "/About">About Us</a></li>
                    <li><a href = "/Contact">Contact Us</a></li>
                </ul>
            </nav>
        );
    }

}



export default sideDrawerMenu;