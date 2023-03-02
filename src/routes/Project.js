import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Proj from '../components/Proj'

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Proj heading="PROJECTS." text='Some of my most recent works'></Proj>
      <Footer></Footer>
    </div>
  )
}

export default Project
