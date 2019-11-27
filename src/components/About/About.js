import React from 'react';
import './About.css'



const About=(props)=>{
    return(
        <div >  
            <section>
           <img id='bg' className="ab-image"src={require("./Grey.jpg")} alt="logo" /> 
           <h1>ABOUT <br/><span>US</span></h1>
           <hr />
           <p>we are escape, our app is to help you blabalbalabla</p>
        
           </section>
        </div>
        
    )
};

export default About;

