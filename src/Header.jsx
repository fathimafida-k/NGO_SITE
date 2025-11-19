import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
  <header style={{backgroundColor: "none",height: "6.5rem", padding: "0 3rem", display: "flex",alignItems: "center",
 justifyContent: "flex-end"}}
    >
      <div
       
        className="d-flex align-items-center"
        style={{ height: "100%", width: "100%" }} 
      >
       
       
        


        <div className='ms-auto' style={{ display: "flex",alignItems: "center",justifyContent: "flex-end"}}> 
    
          <Link className='btn' style={{color:"white"}} to={'/'}>Home</Link>
           {/* <Link className='btn' style={{color:"white"}} to={'/donate'}>Donate</Link> */}
           <Link className='btn' style={{color:"white"}} to={'/about'}>About Us</Link>
           <Link className='btn' style={{color:"white"}} to={'/campaigns'}>Campaigns</Link>
         <Link className='btn' style={{color:"white"}} to={'/contact'}>Contact Us</Link>
       
       </div>
      
      </div>
    </header>
    </div>
  )
}

export default Header
 