import React from 'react';
import './About.css'

const About=(props)=>{
    return(
        <div className = 'about-container'>
            
            <div className = 'heading'>
                <h1>About Us</h1>
            </div>
            {/* <div className = 'about-image'>
                <a href="/"><img className="a-image"src={require("./escaperoom.jpg")} alt="logo" /></a>
            </div> */}
            <div className = 'mission-statement'>
                <div className = 'statement-header'>
                    <h3><strong>Our Mission</strong></h3>
                </div>
                <div className = 'statement-body'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className = 'section-divider'>
                    <hr/>
                </div>
            </div>
            <div className = 'meet-team'>
                <div className = 'statement-header'>
                    <h3><strong>Meet The Team</strong></h3>
                </div>
                <div className = 'statement-body'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className = 'section-divider'>
                    <hr/>
                </div>
            </div>
            <br></br>

        </div>
        
    )
};

export default About;