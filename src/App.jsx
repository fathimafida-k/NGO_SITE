import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from "react-router-dom"
import Home from './Home'
import Donate from './Donate'
import Footer from './Footer'
import About from './About'
import Header from './Header'
import Campaigns from './Campaigns'
import Contact from './Contact'

function App() {

  return (
    <>

     <Routes>
        <Route path={"/"} element={<Home />} />
         <Route path={"/donate"} element={<Donate/>} />
           <Route path={"/about"} element={<About/>} />
               <Route path={"/campaigns"} element={<Campaigns/>} />
                    <Route path={"/contact"} element={<Contact/>} />
     </Routes>
     <Footer/>
            </>
  )
}

export default App
