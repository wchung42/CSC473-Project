import React from 'react';
import './Contact.css'



const Contact=(props)=>{
    return(
        <div className="container">
            
            <div className="inner-box" >
              
            <h3 classname="inner-box-title">Advertisement</h3>
            
			
            <p>Email:<strong>ad@city.com</strong></p>
            </div>

            <div className="inner-box">
            <h3 classname="inner-box-title">Business cooperation</h3>
				
                <p>Email:<strong>bc@city.com</strong></p>
            </div>

            <div className="inner-box" >
            <h3 classname="inner-box-title">Game cooperation</h3>
				
               <p> Email:<strong>gc@city.com</strong></p>
            </div>

            <div className="inner-box" >
            <h3 classname="inner-box-title">Media contact</h3> 
				
               <p> Email:<strong>mc@city.com.com</strong></p>
            </div>
            

      
            
           
        
        
        </div>
        
        
    )
};

export default Contact;