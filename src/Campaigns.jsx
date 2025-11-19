import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function Campaigns() {
  return (
    <div>
      
      <div style={{ position: "relative", height: "70vh" }}>
        <div style={{ position: "absolute", zIndex: 10, width: "100%" }}>
          <Header />
        </div>

   
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://media.istockphoto.com/id/1395727868/photo/happy-smiling-school-girl-kid-holding-empty-slate-board-near-paddy-field-concept-of-education.jpg?s=612x612&w=0&k=20&c=3tZxeSZHHXdt5DtIvM_cQeGXYj3tea3cavtsPcJaSmk=')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>


        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.45)",
          }}
        ></div>

        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "absolute",
            top: "30%",
            width: "100%",
            textAlign: "center",
            color: "white",
            padding: "0 1rem",
          }}
        >
          <div
            style={{
              padding: "2rem",
              borderRadius: "1rem",
              width: "90%",
              maxWidth: "35rem",
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
              "Book and Beyond"
            </h1>
            <p className='text-light' style={{fontFamily:"lora"}}>An innovative collect books, stationery, and provide scholarships or learning resources for underprivileged girls.</p>
          </div>
         
        </div>
      </div>


    <div style={{ padding: "4rem 2rem", backgroundColor: "#f9f9f9" }}>
  <h2 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#12105aff", textAlign: "center" }}>
    Book and Beyond
  </h2>

  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "2rem" }}>
    {/* Text Column */}
    <div style={{ maxWidth: "650px", color: "#555555", fontFamily: "Inter", lineHeight: 1.7 }}>
      <p>At Bright Futures Foundation, we believe that every child deserves the chance to learn, grow, and realize their full potential. Education is the key to breaking the cycle of poverty, and we strive to create opportunities for children from underprivileged communities.</p>

      <p>Our mission is to provide access to quality education, mentorship programs, and essential learning resources. By fostering a safe and inspiring learning environment, we empower children to build confidence, curiosity, and the skills they need to succeed.</p>

      <p>Through our dedicated volunteers, community partnerships, and innovative programs, we have reached hundreds of children, helping them gain literacy, numeracy, and life skills. Every effort is focused on giving them the tools to create a better tomorrow.</p>

      <p>At Bright Futures Foundation, we don’t just teach lessons — we nurture dreams, encourage creativity, and build the leaders of the future. Join us in shaping a world where every child has the opportunity to shine.</p>
    </div>

    <div style={{ maxWidth: "450px", flex: "1" }}>
      <img 
        src="https://www.hamraahfoundation.org/data/2018/05/book-distribution-1.jpg" 
        alt="Girls Education" 
        style={{ width: "100%", borderRadius: "10px", boxShadow: "0 4px 15px rgba(0,0,0,0.2)",height:"26rem" }} 
      />
    </div>
  </div>
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
  );
}

export default Campaigns;
