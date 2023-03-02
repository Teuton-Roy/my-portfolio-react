import './AboutContent.css';
import { Link } from 'react-router-dom';
import React from 'react'
import react1 from '../assets/react_1.jpg'
import react2 from '../assets/react_2.jpg'


const AboutContent = () => {
  return (
    <div className='about'>
      <div className="left">
            <h1>Who am I?</h1>
            <p>Im a beginner react font-end developer.</p>
            <Link to='/contact'>
              <button className='btn'>Contact</button>
            </Link>
      </div>
      <div className="right">
            <div className="img-container">
              <div className="img-stack top">
                <img src={react1} className='img' alt='true'/>
              </div>
              <div className="img-stack bottom">
                <img src={react2} className='img' alt='true'/>
              </div>
            </div>
      </div>
    </div>
  )
}

export default AboutContent
