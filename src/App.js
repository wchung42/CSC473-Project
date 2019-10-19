import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" 
      integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" 
      crossorigin="anonymous"/>
          <link rel="stylesheet" href="styles.css"></link>

      <footer>
      <a id ="profile-link" href = "" target ="_blank" className = "btn contact-details"><i className ="fab fa-github"></i> GitHub</a>
      
      <a id ="facebook" href = "" target ="_blank" className = "btn contact-details"><i className ="fab fa-facebook"></i> Facebook</a>
    
    
      <a id ="instagram" href = "" target ="_blank" className = "btn contact-details"><i className ="fab fa-instagram" id = "inst-logo"></i> Instagram</a>
    
  
      <a id ="freecodecamp" href = "" target ="_blank" className = "btn contact-details"><i className ="fab fa-free-code-camp"></i> FreeCodeCamp</a>
      
      <a id ="LinkedIn" href = "" target ="_blank" className = "btn contact-details"><i className ="fab fa-linkedin"></i> LinkedIn</a>

      </footer>
    </div>
  );
}

export default App;
