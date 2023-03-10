import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Proj from '../components/Proj'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'


const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Proj heading="PROJECTS." text='Some of my most recent works'></Proj>
      {/* <WorkCard></WorkCard> */}
      <Work></Work>
      <PricingCard></PricingCard>
      <Footer></Footer>
    </div>
  )
}

export default Project
