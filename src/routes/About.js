import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Proj from '../components/Proj'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Proj heading='About.' text='Im a friendly Front-End Developer.'></Proj>
      <AboutContent></AboutContent>
      <Footer></Footer>
    </div>
  )
}

export default About
