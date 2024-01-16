import React from 'react'

import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import image from '../src/assets/Logo.jpg'

// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './SideBar';
import PageComponent from './PageComponent';

 const MainScreen = () => {
    const [data, setCheckData] = useState([]);

    const [dataFetched, setDataFetched] = useState(false);
    
    useEffect(() => {
      const fetchCheckData = async () => {
        try {
          if (!dataFetched) { // Check if data has not been fetched yet
            const response = await axios.get(
              `https://sdaf-ijn7.onrender.com/api/user/getSides/get`
            );
            setCheckData(response.data.side);
            console.log(response)
            setDataFetched(true); // Set dataFetched to true after successful fetch
          }
        } catch (error) {
          console.error("Error fetching check data:", error);
        }
      };
    
      fetchCheckData();
    }, [dataFetched]); 
    
  return (
   <>
<div className="flex">
<div className='max-w-[340px] sm:w-1/2 md:w-full lg:w-full xl:w-1/1 fixed h-screen overflow-y-auto '>
      
<Sidebar  data={data}/>
     
      
          </div>
          <div className='ml-[340px] flex justify-center'>
   <img
   
   src={image}
    width="100px"
    height="100px"
   />
      </div>
</div>

   </>
  )
}
export default MainScreen




