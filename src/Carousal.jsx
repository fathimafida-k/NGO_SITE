import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Carousal() {
  return (
    <div>
         <Carousel>
      <Carousel.Item>
         <img src="https://www.unicef.org/sites/default/files/styles/hero_extended/public/UN0373501-hero.jpg.webp?itok=mET5fWDl" style={{width:"100vw",height:"80vh",filter:"brightness(90%)"}}  alt="" />
       
        <Carousel.Caption>
          <h3 style={{fontFamily:"poppins",fontWeight:"600",fontSize:"2.5rem"}}>Providing nutritious meals and regular health check-ups to children in need</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src="https://citizenmatters.in/wp-content/uploads/2018/08/TCLP-4.jpg"  style={{width:"100vw",height:"80vh",filter:"brightness(90%)"}} alt="" />
        <Carousel.Caption>
          <h3 style={{fontFamily:"poppins",fontWeight:"600",fontSize:"2.5rem"}}>Ensuring every child has access to quality education and learning resources</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    <img src="https://idronline.org/wp-content/uploads/2021/01/classroom_flickr-1024x768-1.jpg.webp" style={{width:"100vw",height:"80vh",filter:"brightness(90%)"}} alt="" />
        <Carousel.Caption>
          <h3 style={{fontFamily:"poppins",fontWeight:"600",fontSize:"2.5rem"}}>Supporting emotional and mental well-being of children through mentorship and creative activities.</h3>
     
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousal