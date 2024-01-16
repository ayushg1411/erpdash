import React from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
   <>
   <div className="flex">
    <NavLink to="/Login">
    <button className='button'>Login</button>
    </NavLink>
  
   </div>
   </>

  )
}

export default Home