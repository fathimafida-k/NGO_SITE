import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
     

    
    <div
  style={{
    height: "30vh",
    backgroundColor: "#2c3e50",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "2rem",
    fontWeight: "bold",
    position: "relative", 
  }}
>

  <Link
    to="/"
    style={{
      position: "absolute",
      left: "2rem",      
      color: "#ffffff",
      fontWeight: "600",
      border: "1.5px solid rgba(255, 255, 255, 0.4)",
      backdropFilter: "blur(6px)",
      padding: "8px 14px",
      borderRadius: "5px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      fontSize: "1rem",
    }}
  >
    <i className="fa-solid fa-arrow-left"></i>
  </Link>

 
  <span>Contact Us / Join Us</span>
</div>


      <div
        style={{
          padding: "4rem 2rem",
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            maxWidth: "300px",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#eece2fff", marginBottom: "1rem" }}>Email</h3>
          <p>hope@brightfutures.org</p>
        </div>

        <div
          style={{
            maxWidth: "300px",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#eece2fff", marginBottom: "1rem" }}>Phone</h3>
          <p>+91 9875785467</p>
        </div>

        <div
          style={{
            maxWidth: "300px",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#eece2fff", marginBottom: "1rem" }}>Address</h3>
          <p>123, Hope Street, Kerala, India</p>
        </div>
      </div>

      
      <div
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#f0f0f0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          style={{
            maxWidth: "500px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            backgroundColor: "white",
            padding: "3rem",
            borderRadius: "10px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ textAlign: "center", color: "#12105aff", marginBottom: "1rem" }}>
            Join Us
          </h3>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "0.8rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "0.8rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <textarea
            placeholder="Your Message / Why you want to join"
            rows="5"
            style={{
              padding: "0.8rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
           
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.8rem",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#0b0336ff",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
