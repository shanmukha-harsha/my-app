import "./ProjectDetailsStyles.css"

import React from 'react'
import {Link} from "react-router-dom"

const ProjectDetails = () => {
  return (
    <div className="projects">
    <h1 className="project-heading">Academic Projects</h1>
        <div className="card-container">
            <div className="card">
                <h4>Project 1</h4>
                <span className="bar"></span>
                <p className="btc">Language Proficiency Assessment</p>
                <p>Application that scores essay inputs based on 6 parameters.</p>
                <p>Used RoBERTa and DeBERTa, compared them.</p>
                <p>Achieved a Mean Columnwise RMSE loss of 0.43</p>
                <a href="www.google.com" className="btn">LEARN MORE</a>
            </div>

            <div className="card">
                <h4>Project 2</h4>
                <span className="bar"></span>
                <p className="btc">Inventory Management System</p>
                <p>Utilized Spring Data JPA to perform CRUD operations.</p>
                <p>Built RESTful web services using Spring MVC.</p>
                <p>Unit and integration testing using JUnit and Mockito.</p>
                <Link to="/contact" className="btn">LEARN MORE</Link>
            </div>

            <div className="card">
                <h4>Project 3</h4>
                <span className="bar"></span>
                <p className="btc">Cartoonification & Emotion Detection</p>
                <p>Application that uses pixel-level filters on images.</p>
                <p>Detects emotions using CNN and delivers captions.</p>
                <p>Achieved a training accuracy of 92.86%.</p><br></br>
                <Link to="/contact" className="btn">LEARN MORE</Link>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails