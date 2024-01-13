

import React from 'react'
import Form from '../Tools/Form'
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
 import { fetchStorageLoc } from '../Redux/Slices/StorageLocSlice';
const renderButtons = (data, tcodes) => {
  const dispatch=useDispatch();
  const fetchapi =() =>{
 

      dispatch(fetchStorageLoc());
    
  }
  return Object.entries(data).map(([key, value]) => {
    if (typeof value === "boolean" && value) {
      return (
        <button
          className="button"
          key={key}
          
          onClick={fetchapi}
        >
          <p className=""> {key}</p>
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
    console.log(Object.keys(state))
    const selectedIndex = event.target.value;
    console.log(event.target.value);
    setSelectedFormItem(event.target.value);
    slv(selectedFormItem)
    getV(event.target.value)
  };


  const renderedButtons = renderButtons(controls, controls.tcode);

  return (
    <>
      <div className="bg-gray-500 w-full min-w-[1500px] flex justify-between h-16 p-2">
        <p className="text-3xl md:text-xl sm:text-xs xl:text-3xl mx-2 pt-2 text-white font-bold">
          {controls.name}
          <span className="text-2xl md:text-xl  xl:text-3xl sm:text-base mx-2 pt-2 text-black font-bold">
            {" "}
            - {controls.tcode}
          </span>
        </p>
        {
        
        (state!=null)? ( 
          <select 
          className='bg-gray-100 p-2  rounded-md'
          onChange={(e) => handleSelectChange(e)}
            
          >
          <option   className="bg-gray-100 p-2 rounded-md" value="">{Object.keys(state)[15]}</option>
          {state.StorageLoc.data &&
            state.StorageLoc.data.map((formItem, index) => (
              formItem.form&&
              <option key={index} value={formItem.form[index]}>
                {/* You can customize the display of each option here */}
                {formItem.form[ "Description"]}
              </option>
            ))}
        </select>
         ) : null
       }
        

{/* <button onClick={e=>dispatch(fetchCompanies())}>click</button> */}
        <div className="flex flex-col sm:flex-row pt-2">{renderedButtons}</div>
      </div>
    </>
  );
};





const StorageComponent = ({page}) => {
  const initialValues = {
    "Storage Location": '',
    "Description": '',
    "Plant": '',
  // Added field
  };
  const [v, sv]= useState(null);
  const state= useSelector((state)=>state)
  const getV =(value)=>{
    sv((v)=> value);
  }

  return (
<>
<ControlBar getV={getV} controls={page} /> 
   {/* { (v)?<h1>{v}</h1>: null} */}
    <Form initialValues={initialValues} id={page._id} />
    </>
  )
}

export default StorageComponent