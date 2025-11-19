import React from 'react'
import Carousal from './carousal'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <Carousal/>  
       <h1 className='mt-5 text-center' style={{ fontFamily: "Lora", fontSize: "3rem", fontWeight: "700", marginBottom: "1rem" }}>
        What We Do
        </h1>
        <div style={{ padding: "4rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
          <div style={{ flex: "1", backgroundColor: "#fdf6e3", padding: "2rem", borderRadius: "1rem" }}>
            <h2 style={{ fontFamily: "Lora", fontWeight: "600", color: "#2c3e50" }}>Our Mission</h2>
            <p>
              To empower children and underprivileged communities by providing education, nutrition, mental health support, and opportunities for holistic growth.
            </p>
          </div>
          <div style={{ flex: "1", backgroundColor: "#fdf6e3", padding: "2rem", borderRadius: "1rem" }}>
            <h2 style={{ fontFamily: "Lora", fontWeight: "600", color: "#2c3e50" }}>Our Vision</h2>
            <p>
              A world where every child has access to basic needs, education, and emotional well-being, and can realize their full potential.
            </p>
          </div>
        </div>
        <div>
         
      <div style={{ color: "#555555", fontFamily: "Inter", lineHeight: "1.6",marginTop:"2rem" }}>
  

  
  <h3><i className="fa-solid fa-hands-holding-child" style={{color:"#3b82f6", marginRight:"10px"}}></i>Our Impact</h3>
  <p>
    Over the years, we have impacted thousands of lives through our health, education, and mentorship programs.
  </p>
  
  <h3><i className="fa-solid fa-heart-pulse" style={{color:"#ffb703", marginRight:"10px"}}></i>Health Programs</h3>
  <p>
    We organize regular health check-ups, vaccination drives, and nutrition programs to ensure children grow up healthy and strong.
  </p>
  
  <h3><i className="fa-solid fa-book" style={{color:"#8c5252", marginRight:"10px"}}></i>Education Programs</h3>
  <p>
    We provide access to quality education through after-school tutoring, mobile libraries, and educational materials for children in need.
  </p>
  
  <h3><i className="fa-solid fa-smile-beam" style={{color:"#0b0336", marginRight:"10px"}}></i>Mentorship & Mental Well-being</h3>
  <p>
    Our mentorship programs and creative activities support the emotional and mental well-being of children, helping them build confidence and resilience.
  </p>
  
  <h3 ><i className="fa-solid fa-people-arrows" style={{color:"#3b82f6", marginRight:"10px"}}></i>Community Engagement</h3>
  <p>
    We conduct awareness campaigns and workshops to empower families and communities to create lasting change.
  </p>

</div>


           <div style={{ color: "#2c3e50", textAlign: "center", padding: "4rem 1rem" }}>
        <h2 style={{ fontFamily: "Lora", fontWeight: "700", marginBottom: "1rem" }}>Join Us in Making a Difference</h2>
        <p style={{ marginBottom: "2rem" }}>Support our mission by volunteering or donating today.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Link to="/donate" style={{ padding: "0.75rem 2rem", backgroundColor: "#2c3e50", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: "600" }}>Donate</Link>
          <Link to="/contact" style={{ padding: "0.75rem 2rem", backgroundColor: "#2c3e50", color: "#fff", borderRadius: "8px", textDecoration: "none", fontWeight: "600" }}>Volunteer</Link>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default About