import './Footer.css'
import{FaHome} from 'react-icons/fa'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome></FaHome>
            </div>
        </div>
        <div className="right">

        </div>
      </div>
    </div>
  )
}

export default Footer
