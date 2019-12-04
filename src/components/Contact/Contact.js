import React, { Component } from 'react';
import './Contact.css';
// import email js api
import * as emailjs from 'emailjs-com';

class Contact extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    }
    

    // handle submitting of form
    handleSubmit(e) {
        e.preventDefault();

        const { name, email, subject, message } = this.state;

        // create template for emailjs
        let templateParams = {
          from_name: name,
          from_email: email,
          to_name: 'Escape Team',
          subject: subject,
          message_html: message,
         }

         // send email
         emailjs.send(
          'gmail',
          'template_WmqXIzdF',
           templateParams,
          'user_hcbgkj1kkrrFunOJqWNLQ'
         ).then (function(response) {
             console.log('Successfully sent email', response.status, response.text);
         }, function(error) {
             console.log('Failed to send', error);
         });

         this.resetForm()
     }
    
    // reset form values
    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })    
    }

    // handle change
    handleChange = (param, e) => {
        console.log(this.state.name);
        this.setState({
            [param]: e.target.value,
        })
        
    }

    render () {
        return (
            <div className="container">
                <div id = 'heading-title'>
                    <h1>Contact Us</h1> 
                </div>
                <div className = 'form-area was-validated'>
                    <form onSubmit = { this.handleSubmit.bind(this) }>
                        <div className = 'form-group'>
                            <label for = 'name'>Your Name (required)</label>
                            <input id = 'nameInput' type = 'text' className = 'form-control' value = { this.state.name } required onChange = { this.handleChange.bind(this, 'name') }></input>
                            <label for = 'name'>Your Email (required)</label>
                            <input id = 'emailInput' type = 'email' className = 'form-control' value = { this.state.email } required onChange = { this.handleChange.bind(this, 'email')}></input>
                            <label for = 'name'>Subject (required)</label>
                            <input id = 'subjectInput' type = 'text' className = 'form-control' value = { this.state.subject } required onChange = { this.handleChange.bind(this, 'subject')}></input>
                            <label for = 'name'>Your Message (required)</label>
                            <textarea id = 'messageInput' className = 'form-control' rows = '5' value = { this.state.message } required onChange = { this.handleChange.bind(this, 'message') }/>
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
         
    }
                   
};

export default Contact;