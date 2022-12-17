import React from "react"
import "./Header.css";
import logo from "./images/logo.png"
import camera from "./images/camera.jpeg"
import { Link } from 'react-router-dom'
const Header=()=>{
   return(
    <>
    <nav className="header">
        <section className="logo">
            <img src={logo} alt="log"/>
        </section>
        <section className="camera-icon">
           <Link to="/Postpage"><img src={camera} alt="camera"/></Link>
        </section>
    </nav>
     </>
   
)
}
export default Header;