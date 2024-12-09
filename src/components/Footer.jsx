// eslint-disable-next-line no-unused-vars
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Pulse Fitness Gym</h2>
        </div>

        <div className="footer-info">
          <p>456 Strength Avenue, Muscle Town, Fitland, IN</p>
          <p>Email: contact@pulsefitnessgym.com</p>
          <p>Phone: (987) 654-3210</p>
        </div>

        <div className="footer-socials">
          <a href="https://facebook.co" target="_blank" rel="noopener noreferrer">
            <img src="/public/icons8-facebook.svg" alt="Facebook" />
          </a>
          <a href="https://twitter.co" target="_blank" rel="noopener noreferrer">
            <img src="/public/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://instagram.co" target="_blank" rel="noopener noreferrer">
            <img src="/public/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
