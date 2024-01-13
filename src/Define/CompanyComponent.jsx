

import React from 'react'
import Form from '../Tools/Form'
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { fetchCreditControl } from '../Redux/Slices/CreditControlSlice';

const renderButtons = (data, tcodes) => {
  const dispatch=useDispatch();
  const fetchapi =() =>{
 

      dispatch(fetchCreditControl());
    
  }
  return Object.entries(data).map(([key, value]) => {
    if (typeof value === "boolean" && value) {
      return (
        <button
          className=" m-1 rounded-lg  bg-gray-300 h-[40px]"
          key={key}
          
          onClick={fetchapi}
        >
          <p className="p-1"> {key}</p>
        </button>
      );
    }
    return null;
  });
};
const ControlBar = ({ controls, getV }) => {
  const [ vl, slv] = useState(null);

  const dispatch=useDispatch();
  const state= useSelector((state) =>state);
  const [selectedFormItem, setSelectedFormItem] = useState(null);

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.value;
    console.log(event.target.value);
    setSelectedFormItem(event.target.value);
    slv(selectedFormItem)
    getV(event.target.value)
  };


  const renderedButtons = renderButtons(controls, controls.tcode);

  return (
    <>
      <div className="bg-gray-500  px-4 flex justify-between h-16 ">
        <p className="text-3xl md:text-xl sm:text-xs xl:text-3xl mx-2 pt-2 text-white font-bold">
          {controls.name}
          <span className="text-2xl md:text-xl  xl:text-3xl sm:text-base mx-2 pt-2 text-black font-bold">
            {" "}
            - {controls.tcode}
          </span>
        </p>
        {
        
        (state!=null)? ( 
        <div className='py-2'>
             <select 
          className='bg-gray-100   h-10 rounded-md'
          onChange={(e) => handleSelectChange(e)}
            
          >
          <option   className="bg-gray-100 p-2 rounded-md" value="">{Object.keys(state)[0]}</option>
          {state.CreditControl.data &&
            state.CreditControl.data.map((formItem, index) => (
              <option key={index} value={formItem.form[index]}>
                {/* You can customize the display of each option here */}
                {formItem.form["Credit Control Area"]}
              </option>
            ))}
        </select>
        </div>

         ) : null
       }
        

{/* <button onClick={e=>dispatch(fetchCompanies())}>click</button> */}
        <div className="flex flex-col sm:flex-row pt-2">{renderedButtons}</div>
      </div>
    </>
  );
};





const CompnayComponent = ({page}) => {
  const [v, sv]= useState(null);
  const state= useSelector((state)=>state)
  const getV =(value)=>{
    sv((v)=> value);
  }
  const initialValues = {
    "Credit Control Area": '',
    "Currency": '',
    "Update": '',
    "Rep group": '',
    "Fy Variant": '',
    "Risk Category": '',
    "Credit Limit": '',
  
    "All coCodes": '', // Added field
  };
   
  return (
<div className='define-container'>
<ControlBar getV={getV} controls={page} /> 
   { (v)?<h1>{v}</h1>: null}
    <Form initialValues={initialValues} id={page._id} />
    </div>
  )
}

export default CompnayComponent