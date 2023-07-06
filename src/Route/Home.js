import React from 'react'
import Navbar from "../components/Navbar" 
import HeroImage from "../components/HeroImage"
import Footer from "../components/Footer"
import MySkillSet from '../components/MySkillSet'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage />
      <MySkillSet />
      <Footer />
    </div>
  )
}

export default Home