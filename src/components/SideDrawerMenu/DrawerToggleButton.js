import React, { Component } from 'react';
import './DrawerToggleButton.css';

class DrawerToggleButton extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = ({
    //         currentUser: props.currentUser
    //     })
    // }

    render() {
        return (
            <button className = "toggle-button" onClick = { this.props.click }>
                <div className = "toggle-button-line" />
                <div className = "toggle-button-line" />
                <div className = "toggle-button-line" />
            </button>
        )

         
    }

}

export default DrawerToggleButton;
