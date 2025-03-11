import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import "./styles/ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact">
      {/* Left Section - Contact Info & Social Links */}
        <h1>Contact Me</h1>
      <div  className="contact-section">
      <div className="contact-left">
        <h2>Contact Information</h2>
        <p>Phone: +91 7023003622</p>
        <p>Email: nikeshvaishnav377@gmail.com</p>

        <div className="social-links">
          <div className="social-item linkedin">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
          <div className="social-item github">
            <FaGithub />
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <div className="social-item x">
            <FaXTwitter />
            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
              X (Twitter)
            </a>
          </div>
          <div className="social-item instagram">
            <FaInstagram />
            <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - Google Maps Iframe */}
      <div className="contact-right">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902048849294!2d90.41251801538416!3d23.7508764946297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b937d61b8f55%3A0x52c6e4f5f9b4d4b4!2sYour%20Location!5e0!3m2!1sen!2sbd!4v1633028825615!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;
