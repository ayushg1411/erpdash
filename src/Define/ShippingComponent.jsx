


import React from 'react'
import Form from '../Tools/Form'
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { fetchShipping } from '../Redux/Slices/ShippingSlice';
const renderButtons = (data, tcodes) => {
  const dispatch=useDispatch();
  const fetchapi =() =>{
 

      dispatch(fetchShipping());
    
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
    console.log(state.Shipping.data)
    const index= event.target.value;
    console.log(state.Shipping.data[index]._id);
    const selectedIndex = event.target.value;
    console.log(event.target.value);
    setSelectedFormItem(state.Shipping.data[index]._id);
    slv(selectedFormItem)
    getV(state.Shipping.data[index]._id)
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
          <option   className="option" value="">{Object.keys(state)[14]}</option>
          {state['Shipping'].data &&
            state.Shipping.data.map((formItem, index) => (
              <option key={index} value={index}>
                {/* You can customize the display of each option here */}
                {formItem.form["Shipping Point"]}
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





const ShippingComponent = ({page}) => {
  const [v, sv]= useState(null);
  const state= useSelector((state)=>state)
  const getV =(value)=>{
    sv((v)=> value);
  }
  const initialValues = {
    "Shipping Point": '',
    "Country": '',
    "Departure Zone": '',
    "Factory Calender": '',
    "Working Times": '',
    "cal Load Time": '',
    "Det ick/Pack Time": '',
    "Rounding Work Days": '',
    "Address Text Name": '',
    "Letter Header Text": '',
    "Text Name Foot Lines": '',
    "Text Name Greeting": '',
    "Txt_NM SDB Sender": '',
    "Output Type": '',
    "Message Language": '',
    "No of Messages": '',
    "Send Time": '',
    "Transmission Medium": '',
    "Subsystem": '',
    "Display Info": '',
    "Pick Confirmation": '',
  };
  return (
<div className='define-container'>
<ControlBar getV={getV} controls={page} /> 
   { (v)?<h1>{v}</h1>: null}
    <Form initialValues={initialValues} id={page._id} />
    </div>
  )
}

export default ShippingComponent