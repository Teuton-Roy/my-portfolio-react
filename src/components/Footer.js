import './Footer.css'
import{FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight:'2rem'}}></FaHome>
                <div>
                    <p>
                        Satkura<br/>Jalpaiguri, 735122 <br/> West Bengal, India
                    </p>
                </div>
            </div>
            <div className="phone">
            <FaPhone size={20} style={{color:"#fff", marginRight:'2rem'}}></FaPhone>
                <div>
                    <p>
                        +91 9775795017 <br/> +91 8972028100
                    </p>
                </div>
            </div>
            <div className="email">
            <FaMailBulk size={20} style={{color:"#fff", marginRight:'2rem'}}></FaMailBulk>
                <div>
                    <p>
                        teuton.hdb@gmail.com
                    </p>
                </div>
            </div>
        </div>

        <div className="right">
            <h4>This is my portfolio</h4>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero consequuntur assumenda aliquam blanditiis ullam aut ipsa amet maxime obcaecati quasi nam, laudantium ipsum ad doloribus voluptate eum voluptatum esse enim.
            </p>
            <div className="social">
                <NavLink to='https://github.com/Teuton-Roy'><FaGithub size={30} style={{color:'#fff', marginRight:'1rem'}}></FaGithub></NavLink>
                <NavLink to='https://www.linkedin.com/in/teuton-roy-73031a21b/'><FaLinkedin size={30} style={{color:'#fff', marginRight:'1rem'}}></FaLinkedin></NavLink>
                <NavLink to='https://twitter.com/'><FaTwitter size={30} style={{color:'#fff', marginRight:'1rem'}}></FaTwitter></NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}


export default Footer
