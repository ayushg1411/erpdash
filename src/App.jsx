import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import Home from './Home';
import LoginPage from './Auth/loginPage';
import Profile from './Auth/Profile';
import MainScreen from './MainScreen';

// App.jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './SideBar';
import PageComponent from './PageComponent';

const App = () => {
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
    <div className="App">
   
    
    <BrowserRouter >
      <Routes>
        <Route path={"/"}  element={<Home />} />
        <Route path={"/profile"}  element={<Profile />} />
        <Route path="/Login"  element={<LoginPage/>} />
        <Route path='/main' element={<MainScreen />} />
       

      </Routes>
  
    
      
    </BrowserRouter>

  </div>
  );
};

export default App;
