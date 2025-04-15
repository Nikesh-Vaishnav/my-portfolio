import React from "react";
import "../styles/ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact">
      {/* Left Section - Contact Info & Social Links */}
      <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-section">
        <div className="contact-left">
          <h2>Contact Information</h2>
          <p>Phone: +91 7023003622</p>
          <p>Email: nikeshvaishnav377@gmail.com</p>

        </div>

        {/* Right Section - Google Maps Iframe */}
        <div className="contact-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29023.892119590106!2d73.70108802963198!3d24.589661598821266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5e94707e587%3A0xf61db2122d651bfe!2sMohanlal%20Sukhadia%20University!5e0!3m2!1sen!2sin!4v1742388573378!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;
