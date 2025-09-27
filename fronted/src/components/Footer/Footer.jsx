import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <h2>Need Update on Latest Recipe?</h2>
        <p>Subscribe to our newsletter to get frequent updates</p>
        <div className="input-footer">
          <input type="email" placeholder="Enter your email" />
          <button>Join Now</button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <h2>FoodSpot</h2>
          <div className="socials">
            <FaFacebook className='social-icons' />
            <FaInstagram className='social-icons' />
            <FaYoutube className='social-icons' />
          </div>
        </div>

        <div className="footer-right">
          <ul className="footer-links">
            <li>Home</li>
            <li>Service</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <p className="copy">© {new Date().getFullYear()} FoodSpot. All rights reserved.</p>
    </div>
  );
};

export default Footer;
