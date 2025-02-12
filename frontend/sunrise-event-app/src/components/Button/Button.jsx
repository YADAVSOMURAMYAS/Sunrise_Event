import React from 'react'
import { Link } from 'react-router-dom'
const Button = () => {
  return (
    <div>
      <div className="button-container">
              <div>
                <Link to="/services">
                  <button>
                    Explore More Events 
                    <span className="arrow"> →</span> </button>
                </Link>
              </div>
            </div>
    </div>
  )
}

export default Button
