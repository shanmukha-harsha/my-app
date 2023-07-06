import "./FooterStyles.css"

import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <p>760N 7th Street</p>
                        <p>San Jose, CA, 95112</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />408-690-8630</h4>
                </div>
                <div className="mail">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />shanmukha.harsha07@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me</h4>
                <p>I'm Shanmukha Sri Harsha Anivilla, a graduate student in Computer Science at San Jose State University. I'm looking for Co-op and Full-Time Opportunities.</p>
                <div className="social">
                    <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}} />
                    <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer