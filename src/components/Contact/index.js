import React from 'react'
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'
import './index.css' // Ensure this matches the path to the CSS file

const Contact = () => (
  <footer className="contact-container">
    <div className="section-container">
      <div className="contact-content">
        <div className="contact-links">
          <a
            href="https://github.com/sureshnenavath"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaGithub className="contact-icon" />
          </a>
          <a
            href="https://linkedin.com/in/nenavath-suresh"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <FaLinkedin className="contact-icon" />
          </a>
          <a href="mailto:contact@nenavathsuresh.com" className="contact-link">
            <FaEnvelope className="contact-icon" />
          </a>
        </div>
        <p className="contact-text">
          © {new Date().getFullYear()} Nenavath Suresh. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)

export default Contact
