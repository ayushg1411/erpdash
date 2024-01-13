



import React from 'react'
import Form from '../Tools/Form'
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { fetchPurchasingOrg } from '../Redux/Slices/PurchasingOrgSlice';
const renderButtons = (data, tcodes) => {
  const dispatch=useDispatch();
  const fetchapi =() =>{
 

      dispatch(fetchPurchasingOrg());
    
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
          <option   className="option" value="">{Object.keys(state)[10]}</option>
          {state.PurchasingOrg.data &&
            state.PurchasingOrg.data.map((formItem, index) => (
              <option key={index} value={formItem.form[index]}>
                {/* You can customize the display of each option here */}
  
                {formItem.form[ "Purchase Organization"]}
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





const PurchasingOrgComponent = ({page}) => {
  const [v, sv]= useState(null);
  const state= useSelector((state)=>state)
  const getV =(value)=>{
    sv((v)=> value);
  }
  const initialValues = {
    "Purchase Organization": '',
    "Descrition": '',
  };
  return (
<div className='define-container'>
<ControlBar getV={getV} controls={page} /> 
   {/* { (v)?<h1>{v}</h1>: null} */}
    <Form initialValues={initialValues} id={page._id} />
    </div>
  )
}

export default PurchasingOrgComponent