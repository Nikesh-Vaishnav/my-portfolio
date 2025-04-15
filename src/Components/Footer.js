import React from "react";
import { FaInstagram, FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";
import "../styles/Footer.css"; // Import CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.instagram.com/_nikesh_vaishnav_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
        <a href="https://www.instagram.com/_nikesh_vaishnav_/" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Nikesh Vaishnav. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
