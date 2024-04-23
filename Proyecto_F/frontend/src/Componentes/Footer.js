import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} All_Fred'x</p>
      
      <ul className="contact-info">
        <li>
          <a href="mailto:info@allfredx.com">info@allfredx.com</a>
        </li>
        <li>
          <a href="tel:+1234567890">(123) 456-7890</a>
        </li>
        <li>
          <address>123 Main Street, Anytown, CA 12345</address>
        </li>
      </ul>
      <ul className="social-links">
        <li>
          <a href="https://www.facebook.com/" target="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/" target="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
