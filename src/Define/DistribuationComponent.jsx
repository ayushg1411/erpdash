


import React from 'react'
import Form from '../Tools/Form'
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { fetchDistribuation } from '../Redux/Slices/DistribuationSlice';
const renderButtons = (data, tcodes) => {
  const dispatch=useDispatch();
  const fetchapi =() =>{
 

      dispatch(fetchDistribuation());
    
  }
  return Object.entries(data).map(([key, value]) => {
    if (typeof value === "boolean" && value) {
      return (
        <button
          className=" button"
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
    <div>
      <div className="control-bar">
        <p className="page-name">
          {controls.name}
          <span className="page-tcode">
            {" "}
            - {controls.tcode}
          </span>
        </p>
        {
        
        (state!=null)? ( 
          <div className="py-2">
            <select 
          className='select'
          onChange={(e) => handleSelectChange(e)}
            
          >
          <option   className="option" value="">{Object.keys(state)[2]}</option>
          {state.Distribuation.data &&
            state.Distribuation.data.map((formItem, index) => (
              <option key={index} value={formItem.form[index]}>
                {/* You can customize the display of each option here */}
                {formItem.form["Distribuation"]}
              </option>
            ))}
        </select>
          </div>
         ) : null
       }
        

{/* <button onClick={e=>dispatch(fetchCompanies())}>click</button> */}
        <div className="button-container">{renderedButtons}</div>
      </div>
    </div>
  );
};





const DistribuationComponent = ({page}) => {
  const [v, sv]= useState(null);
  const state= useSelector((state)=>state)
  const getV =(value)=>{
    sv((v)=> value);
  }
  const initialValues = {
    "Distribuation": '',
    "Name": '',
    
  };
   
  return (
<div className='define-container'>
<ControlBar getV={getV} controls={page} /> 
   {/* { (v)?<h1>{v}</h1>: null} */}
    <Form initialValues={initialValues} id={page._id} />
    </div>
  )
}

export default DistribuationComponent