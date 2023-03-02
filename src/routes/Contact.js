import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Proj from '../components/Proj'
import From from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Proj heading='Get-In-Touch' text='Feel free to contect me for any work or suggestions below'></Proj>
      <From></From>
      <Footer></Footer>
    </div>
  )
}

export default Contact
