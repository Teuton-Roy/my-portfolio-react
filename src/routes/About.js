import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Proj from '../components/Proj'

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Proj heading='About.' text='Im a friendly Front-End Developer.'></Proj>
      <Footer></Footer>
    </div>
  )
}

export default About
