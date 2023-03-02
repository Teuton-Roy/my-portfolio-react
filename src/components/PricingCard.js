import './PricingCard.css';
import { Link } from 'react-router-dom';
import React from 'react'


const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className="card-container">
            <div className="card">
                <h3>-Basic-</h3>
                <span className='bar'>
                </span>
                <p className='btc'>
                        $ 100
                </p>
                <p>-3 Days-</p>
                <p>-3 Pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design-</p>
                <Link to='/contact' className='btnn'>
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h3>-Premium-</h3>
                <span className='bar'>
                </span>
                <p className='btc'>
                        $ 300
                </p>
                <p>-2 Days-</p>
                <p>-5 Pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design-</p>
                <Link to='/contact' className='btnn'>
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h3>-Business-</h3>
                <span className='bar'>
                </span>
                <p className='btc'>
                        $ 500
                </p>
                <p>-5 Days-</p>
                <p>-8 Pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design-</p>
                <Link to='/contact' className='btnn'>
                    PURCHASE NOW
                </Link>
            </div>

            <div className="card">
                <h3>-Student-</h3>
                <span className='bar'>
                </span>
                <p className='btc'>
                        $ 000
                </p>
                <p>-10 Days-</p>
                <p>-20 Pages-</p>
                <p>-Featured-</p>
                <p>-Responsive Design-</p>
                <Link to='/contact' className='btnn'>
                    PURCHASE NOW
                </Link>
            </div>


        </div>
    </div>
  )
}

export default PricingCard
