import React from 'react';
import './Contact.css'



const Contact=(props)=>{
    return(
        <div className="container">
            <div id = 'heading-title'>
                <h1>Contact Us</h1> 
            </div>
            <div className = 'form-area was-validated'>
                <form>
                    <div className = 'form-group'>
                        <label for = 'name'>Your Name (required)</label>
                        <input type = 'text' className = 'form-control' required></input>
                        <label for = 'name'>Your Email (required)</label>
                        <input type = 'email' className = 'form-control' required></input>
                        <label for = 'name'>Your Message (required)</label>
                        <textarea className = 'form-control' rows = '5' required />
                        {/* <div class = 'invalid-feedback'>
                            Please enter a message.
                        </div> */}
                        <br></br>
                        <button type = 'submit' className = 'btn-lg' id = 'submit-button'>Submit</button>
                    </div>
                </form>
            </div>
        
        </div>
        
        
    )
};

export default Contact;