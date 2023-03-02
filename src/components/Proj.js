import './Proj.css'


import React from 'react'

const Proj = ({heading, text}) => {
  return (
    <div className='hero-img'>
      <div className="heading">
        <h1>
          {heading}
        </h1>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}

export default Proj
