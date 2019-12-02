import React from 'react';
import './About.css'

const About=(props)=>{
    return(
<<<<<<< HEAD
        <div >  
            <section>
           <img id='bg' className="ab-image"src={require("./Grey.jpg")} alt="logo" /> 
           <h1>ABOUT <br/><span>US</span></h1>
           <hr />
           <p>we are escape, our app is to help you blabalbalabla</p>
=======
        <div className = 'about-container'>
            
            <div><h1>About Us</h1></div>
            <div><a href="/"><img className="a-image"src={require("./escaperoom.jpg")} alt="logo" /></a></div>
            <div><p>balabalablabla</p></div>
            
           
        
>>>>>>> 79eaa841e20a1da03c313e9207327319e022b9de
        
           </section>
        </div>
        
    )
};

export default About;

