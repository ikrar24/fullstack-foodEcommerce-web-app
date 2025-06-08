import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footerContainer mt-9 ">
      <div className="footerContent">
        <div className="footerSection about">
          <h3>About Us</h3>
          <p>We provide high-quality services and the best experience for our customers.</p>
        </div>

        <div className="footerSection links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footerSection contact">
          <h3>Contact</h3>
          <p>Email: mdikrar@gmail.com</p>
          <p>Phone: +91 9060917993</p>
        </div>
      </div>

      <div className="footerBottom">
        <p>&copy; {new Date().getFullYear()} FCP. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
