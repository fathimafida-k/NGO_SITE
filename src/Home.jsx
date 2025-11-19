import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

function Home() {
  return (
   <div style={{ position: "relative", height: "70vh" }}>

 <div style={{position:"relative"}}>
     <div style={{position:"absolute",zIndex:"10"}}>
         <Header/>
     </div>
     <div style={{ height:"100vh", position:"relative" }}>
    {/* bgImageSection */}
    <div style={{ position:"absolute", inset:0, 
      backgroundImage:"url('https://c1.wallpaperflare.com/preview/285/888/4/child-india-person-fun.jpg')", backgroundSize:"cover", backgroundPosition:"center" }}>
    </div>


    <div style={{ position:"absolute", inset:0, backgroundColor:"rgba(0,0,0,0.45)" }}></div>

  
    <div className='d-flex justify-content-center align-items-center' style={{ position:"absolute", top:"30%", width:"100%", textAlign:"center", color:"white", padding:"0 1rem" }}>
      <div style={{backgroundColor:"rgba(255,255,255,0.15)", padding:"2rem", borderRadius:"1rem", width:"90%", maxWidth:"35rem", backdropFilter:"blur(5px)", boxShadow:"0 4px 20px rgba(0,0,0,0.3)"}}>
        <h1 style={{ fontSize:"2rem", marginBottom:"1rem", fontFamily:"Poppins", fontWeight:"bold" }}>
          Together, We Can Make a Difference
        </h1>
        <p style={{ fontSize:"1rem", lineHeight:1.6, opacity:0.9 }}>
          Join us in creating a better future by nurturing children’s growth, health, and happiness for a better tomorrow
        </p>
         <Link to={'/donate'}>  <button  style={{ marginTop:"1.5rem", padding:"0.8rem 1.5rem", backgroundColor:"#ffb703", border:"none", borderRadius:"0.5rem", fontSize:"1rem", fontWeight:600 }}>
          Donate Now
        </button></Link>
      </div>
    </div>
  </div>
 </div>

  <div className='mt-5 w-100' style={{ backgroundColor: "rgba(244, 244, 244, 1)", padding: "3rem 0" }}>

  <h2 className='text-center mb-5' style={{ fontFamily: "Poppins", fontWeight: 600 }}>Our Impacts</h2>

  <div className='container'>
    <div className='row justify-content-center'>
 
      <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-4'>
        <div style={{ height: "100%", minHeight:"15rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "30px", padding: "1rem" }}>
          <h1 className='text-center mt-4' style={{ fontFamily: "Poppins", color: "#ffb703" }}>500<i className="fa-solid fa-plus"></i></h1>
          <h3 className='text-center' style={{ fontFamily: "Lora", color: "#0a0944ff" }}>Children Educated</h3>
          <p className='text-center' style={{ fontSize: "0.95rem", fontWeight: 500, color: "#382c2cff", lineHeight: 1.5, marginTop: "0.5rem", padding: "0 0.5rem" }}>
            Provided quality education to over 500 children, helping them build a brighter future.
          </p>
        </div>
      </div>

  
      <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-4'>
        <div style={{ height: "100%", minHeight:"15rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "30px", padding: "1rem" }}>
          <h1 className='text-center mt-4' style={{ fontFamily: "Poppins", color: "#ffb703" }}>200<i className="fa-solid fa-plus"></i></h1>
          <h3 className='text-center' style={{ fontFamily: "Lora", color: "#0a0944ff" }}>Volunteers</h3>
          <p className='text-center' style={{ fontSize: "0.95rem", fontWeight: 500, color: "#382c2cff", lineHeight: 1.5, marginTop: "0.5rem", padding: "0 0.5rem" }}>
            Our dedicated volunteers work tirelessly to support our programs and empower every child.
          </p>
        </div>
      </div>

     
      <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-4'>
        <div style={{ height: "100%", minHeight:"15rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "30px", padding: "1rem" }}>
          <h1 className='text-center mt-4' style={{ fontFamily: "Poppins", color: "#ffb703" }}>15<i className="fa-solid fa-plus"></i></h1>
          <h3 className='text-center' style={{ fontFamily: "Lora", color: "#0a0944ff" }}>Active Programs</h3>
          <p className='text-center' style={{ fontSize: "0.95rem", fontWeight: 500, color: "#382c2cff", lineHeight: 1.5, marginTop: "0.5rem", padding: "0 0.5rem" }}>
            Running 15 active programs focused on literacy, mentorship, and holistic development for children.
          </p>
        </div>
      </div>

   
  <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-4'>
  <div style={{ height: "100%", minHeight:"15rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "30px", padding: "1rem" }}>
    <h1 className='text-center mt-4' style={{ fontFamily: "Poppins", color: "#ffb703" }}>5,000<i className="fa-solid fa-plus"></i></h1>
    <h3 className='text-center' style={{ fontFamily: "Lora", color: "#0a0944ff" }}>Nutrition Support</h3>
    <p className='text-center' style={{ fontSize: "0.95rem", fontWeight: 500, color: "#382c2cff", lineHeight: 1.5, marginTop: "0.5rem", padding: "0 0.5rem" }}>
      Over 5,000 nutritious meals have been provided to children, supporting their health, growth, and well-being.
    </p>
  </div>
</div>


    </div>
  </div>
</div>


  {/* ABOUT US SECTION */}
  <div className="mt-5" style={{ padding:"0 2rem" }}>
  
    <div className='row mt-5'>
      <div className='col-lg-6'>
        <img className='img-fluid ms-2 rounded' style={{width:"100%", height:"30rem"}} src="https://youngscholarz.com/wp-content/uploads/2021/10/education.jpeg" alt="" />
      </div>
      <div className='col-lg-6'>
  <h2 style={{ fontFamily:'Playfair Display', color:'#2C3E50', fontWeight:'600' }}>Empowering Young Minds for a Brighter Future</h2>
<div style={{ color:"#555555", fontFamily:"Inter", textAlign:"justify" }}>
  <p>At Bright Futures Foundation, we believe that every child deserves the chance to learn, grow, and realize their full potential. Education is the key to breaking the cycle of poverty, and we strive to create opportunities for children from underprivileged communities.</p>

  <p>Our mission is to provide access to quality education, mentorship programs, and essential learning resources. By fostering a safe and inspiring learning environment, we empower children to build confidence, curiosity, and the skills they need to succeed.</p>

  <p>Through our dedicated volunteers, community partnerships, and innovative programs, we have reached hundreds of children, helping them gain literacy, numeracy, and life skills. Every effort is focused on giving them the tools to create a better tomorrow.</p>

  <p>At Bright Futures Foundation, we don’t just teach lessons — we nurture dreams, encourage creativity, and build the leaders of the future. Join us in shaping a world where every child has the opportunity to shine.</p>
</div>

  
           <Link to={'/about'}>  <button  style={{ marginTop:"1.5rem", padding:"0.8rem 1.5rem", backgroundColor:"#ffb703", border:"none", borderRadius:"0.5rem", fontSize:"1rem", color:"white",fontWeight:600 }}>
               Learn More
        </button></Link>

      </div>
    </div>
  </div>

  {/* our programs */}

  <div className='mt-5'>
   <h2 className='text-center' style={{ fontFamily: "Poppins", fontWeight: 600 }}>Our Programs</h2>
   <h6 className='text-center' style={{ color:"#555555", fontFamily:"Inter", textAlign:"justify" }}>From education to health and emotional support, our initiatives ensure every child thrives</h6>

   <div className="container mt-4">
  <div className="row g-4">
    <div className="col-12 col-sm-6 col-md-6 col-lg-3">
      <Card>
        <Card.Img style={{ height: "18rem", objectFit: "cover" }} variant="top" src="https://www.unicef.org/india/sites/unicef.org.india/files/styles/hero_extended/public/UN0389730.jpg.webp?itok=cVVczvz4" />
        <Card.Body>
          <Card.Title style={{ color: "rgba(15, 25, 35, 1)" }}>Health & Nutrition</Card.Title>
          <Card.Text style={{ color: "#555555", fontFamily: "Inter", textAlign: "left" }}>
            Regular health check-ups and vaccination for kids and toddlers. Nutritious meal plans or mid-day meal programs.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-12 col-sm-6 col-md-6 col-lg-3">
      <Card>
        <Card.Img style={{ height: "18rem", objectFit: "cover" }} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Children_Reading_Pratham_Books_and_Akshara_-_Flickr_-_Pratham_Books_%2886%29.jpg" />
        <Card.Body>
          <Card.Title style={{ color: "rgba(15, 25, 35, 1)" }}>Education Support</Card.Title>
          <Card.Text style={{ color: "#555555", fontFamily: "Inter", textAlign: "left" }}>
            After-school tutoring. Availability of mobile libraries or book distribution. Reading clubs and storytelling sessions.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-12 col-sm-6 col-md-6 col-lg-3">
      <Card>
        <Card.Img style={{ height: "18rem", objectFit: "cover" }} variant="top" src="https://images.news18.com/ibnlive/uploads/2021/11/children-ngos-16368722174x3.png" />
        <Card.Body>
          <Card.Title style={{ color: "rgba(15, 25, 35, 1)" }}>Mental Well-being</Card.Title>
          <Card.Text style={{ color: "#555555", fontFamily: "Inter", textAlign: "left" }}>
            Providing emotional and mental well-being support for children through counseling, mentorship, and creative activities.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="col-12 col-sm-6 col-md-6 col-lg-3">
      <Card>
        <Card.Img style={{ height: "18rem", objectFit: "cover" }} variant="top" src="https://miro.medium.com/1*u0Gpx9vfAxjsaB0WoMSwnA.jpeg" />
        <Card.Body>
          <Card.Title style={{ color: "rgba(15, 25, 35, 1)" }}>Book & Resource Distribution</Card.Title>
          <Card.Text style={{ color: "#555555", fontFamily: "Inter", textAlign: "left" }}>
            Distributing essential resources like books, stationery, and learning materials to children in need.to over 500 children.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

  </div>
</div>

  </div>

</div>

  );
}

export default Home;
