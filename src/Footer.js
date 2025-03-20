import React from "react";
import { FaInstagram, FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";
import "./styles/Footer.css"; // Import CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Nikesh Vaishnav. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
