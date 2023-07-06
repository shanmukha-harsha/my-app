import "./AboutDetailsStyles.css"

import React from 'react'
import snj from "../assets/SJSU.jpg"
import photography from "../assets/IMG_2236_Original.jpg"
import football from "../assets/Screenshot_20200214-205420_Photos_Original.jpg"

const AboutDetails = () => {
  return (
    <div className="about-container">
        <h1 className="activity-heading">Activities</h1>
        <div className="activity-container">
            <div className="activity-card">
                <img src={snj} alt="img" />
                <h2 className="activity-title">Global Leader</h2>
                <h5 className="subtitle">International Student & Scholar Services</h5>
                <div className="activity-details">
                  <p>I hold the position of Global Leader at SJSU's ISSS, where our primary focus is on fostering a vibrant and inclusive community for international students. As a team, we engage in brainstorming sessions, strategic planning, and event organization to create enriching experiences for our diverse student body. Our ultimate goal is to cultivate a warm and welcoming environment that facilitates meaningful connections among students from around the world.</p>
                </div>
            </div>

            <div className="activity-card">
                <img src={photography} alt="img" />
                <h2 className="activity-title">Photographer</h2>
                <h5 className="subtitle">Indian Student Organization, SJSU</h5>
                <div className="activity-details">
                  <p>As the Chief Photographer for the ISO-SJSU, my role is to take pictures of the events we organize. With my camera in hand, I am dedicated to preserving the spirit and energy of our events, ensuring that each captured image tells a compelling story, showcasing the rich culture and connections within our community. These photos are then shared on our Instagram page, for others to experience the vibrant atmosphere of our events.</p>
                </div>
            </div>

            <div className="activity-card">
                <img src={football} alt="img" />
                <h2 className="activity-title">Captain</h2>
                <h5 className="subtitle">MVSR FC</h5>
                <div className="activity-details">
                  <p>As the captain of MVSR FC during my undergraduate course, I had the privilege of leading our soccer team in numerous intercollegiate tournaments. Through determination and teamwork, we emerged victorious in several competitions. Our victories showcased our dedication, skill, and commitment to the sport. Being part of MVSR FC has not only honed my leadership abilities but also taught me the value of collaboration and perseverance.</p>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default AboutDetails