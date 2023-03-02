import './Form.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text' required='required'></input>

            <label>Email</label>
            <input type='email' required='required'></input>
            
            <label>Subject</label>
            <input type='text' required='required'></input>
            
            <label>Massage</label>
            <textarea rows="6" placeholder='Type Your Massage Here..'></textarea>

            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form
