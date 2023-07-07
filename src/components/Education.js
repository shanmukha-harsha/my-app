import "./EducationStyles.css"

import React from 'react'
import sjsu from "../assets/SJSU_Seal.jpg"
import ou from "../assets/Osmania_University_Logo.jpg"

const Education = () => {
  return (
    <div className="education-container">
    <h1 className="education-heading">Education</h1>
    <div className="timeline">
        <div className="container left-container">
            <img src={sjsu} alt="img"/>
            <div className="text-box">
                <h2>San Jose State University</h2>
                <h3>M.S., Computer Science</h3>
                <h5>GPA: 3.71</h5>
                <small>2022 - 2024</small>
                <p>Relevant Coursework: Design & Analysis of Algorithms, Topics in Artificial Intelligence, Computer Communication Systems, Advanced Topics in CS.</p>
                <span className="left-container-arrow" />
            </div>
        </div>

        <div className="container right-container">
            <img src={ou} alt="img"/>
            <div className="text-box">
                <h2>Osmania University</h2>
                <h3>B.E., Computer Science & Engineering</h3>
                <h5>GPA: 3.6</h5>
                <small>2017 - 2021</small>
                <p>Relevant Coursework: Object Oriented Programming using Java, Data Structures, Artificial Intelligence, Cloud Computing, Compiler Construction, Databases, Data Mining.</p>
                <span className="right-container-arrow" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Education