


import React,{ useEffect} from 'react';
import Form from '../Tools/Form'
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { fetchFunctional } from '../Redux/Slices/FunctionalSlice';
import DefineTable from "../Tools/DefineTable";
const renderButtons = (data, tcodes) => {
  const dispatch=useDispatch();
  const fetchapi =() =>{
 

      dispatch(fetchFunctional());
    
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
    console.log(state.Functional.data)
    const index= event.target.value;
    console.log(state.Functional.data[index]._id);
    const selectedIndex = event.target.value;
    console.log(event.target.value);
    setSelectedFormItem(state.Functional.data[index]._id);
    slv(selectedFormItem)
    getV(state.Functional.data[index]._id)
  };


  const renderedButtons = renderButtons(controls, controls.tcode);

  return (
    <div>
      <div className="control-bar ">
        <p className="page-name">
          {controls.name}
          <span className="page-tcode">
            {" "}
            - {controls.tcode}
          </span>
        </p>
        
        

{/* <button onClick={e=>dispatch(fetchCompanies())}>click</button> */}
        <div className="button-container">{renderedButtons}</div>
      </div>
    </div>
  );
};





const FunctionalComponent = ({page}) => {
  const [v, sv]= useState(null);
  const [id, sid] = useState(null);
  const state= useSelector((state)=>state)
  const getV =(value)=>{
    sv((v)=> value);
  }
  const getId = (value) => {
    sid((id) => value);
  };
  const initialValues = {
    // "Functional Area": '',
    //     "Name": '',
    "Required Delivery Date":'',
    "Delivery Plant":'',
    "Complete Division":'',
    "Total Weight":'',
    "Delivery Block":'',
    "Volume":'',
    "Billing Block":'',
    "Pricing Block":'',
    "Payment Card":'',
    "Expiry Date":'',
    "Payment Terms":'',
    "Incoterms":'',
    "Order Reason":'',
    "Sales Area":'',
    
  };
   
  return (
<div className='define-container'>
<ControlBar getV={getV} controls={page} /> 
   { (v)?<h1>{v}</h1>: null}
    <Form initialValues={initialValues} id={page._id} />

    <div className="mt-4">
        <DefineTable id={page._id} getId={getId} />
        { (id)?<h1>{id}</h1>: <h1>noid</h1>} 
      </div>
    </div>
  )
}

export default FunctionalComponent