import React from 'react';
import './Footer.css';

const footer = props => (
    <div className = "footer" >
        <footer className="footer-all">
          <div className="footer-social">

            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>

          </div>

          <div className="footer-info">

            <p>
              <a href="/Home">Home</a>
              ·
					<a href="/Game">Games</a>
              ·
					<a href="/About">About</a>
              ·
					<a href="/FAQ">Faq</a>
              ·
					<a href="/Contact">Contact</a>
            </p>

            <p><strong>Escape Team © 2019</strong></p>
          </div>

        </footer>
    </div>
);

export default footer;