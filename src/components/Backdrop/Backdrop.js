// this backdrop component is used to bring attention to important components
// by darkening the background

import React from 'react';
import './Backdrop.css';

const backdrop = props => (
    <div className = "backdrop" onClick = { props.click }>

    </div>
);

export default backdrop;