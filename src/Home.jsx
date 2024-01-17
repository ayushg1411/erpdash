import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Loader from './Tools/Loader';
import bgimage from '../src/assets/erp-system-850.jpg'
const Home = () => {

  const [load, setload]=useState(true);

  useEffect(()=>{
    setload(true);
  const user = JSON.parse(localStorage.getItem("currentUser"))
 
  if(user)
  {

    window.location.href = '/main';
  
  }
  else{
    setload(false)
  }
   
  },[])

  return (
   <>
      
  {   load  ?
   <Loader /> 
  :  
  <div className="bg-cover bg-center" style={{ backgroundImage: `url(${bgimage})` }}>
  <div className="flex justify-start items-center h-screen ml-[200px]">
    <NavLink to="/Login">
      <button className="bg-blue-500 min-w-64 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </NavLink>
    {/* Additional content */}
  </div>
</div>
    }
    
   
   </>

  )
}

export default Home