





import React from 'react'
import Form from '../Tools/Form'
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { fetchsalesOrg } from "../Redux/Slices/salesOrgSlice";
import DefineTable from '../Tools/DefineTable';


const renderButtons = (data, tcodes) => {
  const dispatch=useDispatch();
  const fetchapi =() =>{
 

      dispatch(fetchsalesOrg());
    
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
    console.log(state.salesOrg.data)
    const index= event.target.value;
    console.log(state.salesOrg.data[index]._id);
    const selectedIndex = event.target.value;
    console.log(event.target.value);
    setSelectedFormItem(state.salesOrg.data[index]._id);
    slv(selectedFormItem)
    getV(state.salesOrg.data[index]._id)
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
        
        

{/* <button onClick={e=>dispatch(fetchCompanies())}>click</button> */}
        <div className="button-container">{renderedButtons}</div>
      </div>
    </div>
  );
};





const SalesOrgComponent = ({page}) => {

  const initialValues = {
    "Sales Organization": '',
    "Statistics Currency": '',
    "Address Text": '',
    "RefSorg DocType": '',
    "Letter Header Text": '',
    "Customer Interco Bill": '',
    "Footer Lines Text": '',
    "Sales Organization Calendar": '',
    "Greeting Text Name": '',
    "Text SDS Sender": '',
    "Rebate Proc Active": '',
  };
  const [v, sv]= useState(null);
  const state= useSelector((state)=>state)
  const getV =(value)=>{
    sv((v)=> value);
  }
 
   
  return (
<div className='define-container'>
<ControlBar getV={getV} controls={page} /> 
   { (v)?<h1>{v}</h1>: null}
    <Form initialValues={initialValues} id={page._id} />
    <DefineTable id={page._id} />
    </div>
  )
}

export default SalesOrgComponent