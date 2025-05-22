import React from 'react'
import { NavLink } from 'react-router-dom'

export const ErrorPage = () => {
  return (
       <div className='error-wrapper'>
      <div className="container">
       <div className="error-row">
        <img src="./Images/404.png" alt="404-image" />
        <h2>404 page not found</h2>
        <p>The page you are looking for might have been removed had this name changed or its temporarily unavailable</p>
        <button className='error-btn'><NavLink to="/">Go To HomePage</NavLink></button>

       </div>
        </div>
        </div>
  )
}

