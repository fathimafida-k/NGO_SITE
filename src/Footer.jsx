import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#2c3e50", color: "#ecf0f1", padding: "3rem 1rem" }}>
      <div className="container">
        <div className="row">

          {/* About NGO */}
          <div className="col-lg-4 mb-4">
            <h2 style={{ fontFamily: "Lora", fontWeight: "700", color: "#f1c40f" }}>HOPE</h2>
            <p style={{ fontFamily: "Inter", fontSize: "0.95rem", color: "#bdc3c7" }}>
              Dedicated to improving the lives of children through education, nutrition, and mental well-being programs. Join us in making a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 mb-4">
            <h5 style={{ fontFamily: "Lora", fontWeight: "600", color: "#f1c40f" }}>Quick Links</h5>
            <Link to="/" style={{ display: "block", color: "#ecf0f1", margin: "0.4rem 0", textDecoration: "none" }}>Home</Link>
            <Link to="/donate" style={{ display: "block", color: "#ecf0f1", margin: "0.4rem 0", textDecoration: "none" }}>Donate</Link>
            <Link to="/projects" style={{ display: "block", color: "#ecf0f1", margin: "0.4rem 0", textDecoration: "none" }}>About Us</Link>
            <Link to="/contact" style={{ display: "block", color: "#ecf0f1", margin: "0.4rem 0", textDecoration: "none" }}>Contact</Link>
          </div>

          {/* Volunteer / Guides */}
          <div className="col-lg-2 mb-4">
            <h5 style={{ fontFamily: "Lora", fontWeight: "600", color: "#f1c40f" }}>Resources</h5>
            <Link to="/volunteer" style={{ display: "block", color: "#ecf0f1", margin: "0.4rem 0", textDecoration: "none" }}>Volunteer Guide</Link>
            <Link to="/reports" style={{ display: "block", color: "#ecf0f1", margin: "0.4rem 0", textDecoration: "none" }}>Reports</Link>
            <Link to="/faq" style={{ display: "block", color: "#ecf0f1", margin: "0.4rem 0", textDecoration: "none" }}>FAQ</Link>
          </div>

          {/* Newsletter & Social */}
          <div className="col-lg-4 mb-4">
            <h5 style={{ fontFamily: "Lora", fontWeight: "600", color: "#f1c40f" }}>Stay Connected</h5>
            <p style={{ fontFamily: "Inter", fontSize: "0.95rem", color: "#bdc3c7" }}>Subscribe to our newsletter for updates on projects and campaigns.</p>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
              <input type="email" placeholder="Your Email" style={{ padding: "0.5rem", borderRadius: "5px", border: "none", flex: 1 }} />
              <button style={{ backgroundColor: "#f1c40f", color: "#2c3e50", border: "none", borderRadius: "5px", padding: "0.5rem 1rem", cursor: "pointer" }}>Subscribe</button>
            </div>
            <div style={{ display: "flex", gap: "1rem", fontSize: "1.5rem", marginTop: "0.5rem" }}>
              <a href="#"><i className="fab fa-facebook" style={{ color: "#ecf0f1" }}></i></a>
              <a href="#"><i className="fab fa-twitter" style={{ color: "#ecf0f1" }}></i></a>
              <a href="#"><i className="fab fa-instagram" style={{ color: "#ecf0f1" }}></i></a>
              <a href="#"><i className="fab fa-linkedin" style={{ color: "#ecf0f1" }}></i></a>
              <a href="#"><i className="fas fa-phone" style={{ color: "#ecf0f1" }}></i></a>
            </div>
          </div>

        </div>

       
      </div>
    </footer>
  );
}

export default Footer;
