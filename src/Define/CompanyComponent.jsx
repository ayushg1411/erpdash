import React,{ useEffect} from 'react';
import Form from '../Tools/Form';
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { fetchCompanies } from '../Redux/Slices/companySlice';
import DefineTable from "../Tools/DefineTable";

const renderButtons = (data, tcodes) => {
  const dispatch=useDispatch();
  const fetchapi =() =>{
 

      dispatch(fetchCompanies());
    
  }
  return Object.entries(data).map(([key, value]) => {
    if (typeof value === "boolean" && value) {
      return (
        <button
          className="button"
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
    console.log(state.company.data)
    const index= event.target.value;
    console.log(state.company.data[index]._id);
    const selectedIndex = event.target.value;
    console.log(event.target.value);
    setSelectedFormItem(state.company.data[index]._id);
    slv(selectedFormItem)
    getV(state.company.data[index]._id)
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
        <div className='py-2'>
             <select 
          className='select'
          onChange={(e) => handleSelectChange(e)}
            
          >
          <option   className="option" value="">{Object.keys(state)[0]}</option>
          {state.company.data &&
            state.company.data.map((formItem, index) => (
              <option key={index} value={index}>
                {/* You can customize the display of each option here */}
                {formItem.form["CompanyName"]}
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





const CompnayComponent = ({page}) => {
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
    "Company": "",
    "Company Name": "",
    "Street": "",
   " PO Box": "",
    "Postal Code": "",
    "City": "", 
    "Select Country": "",
    "Currency": "inr",
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

export default CompnayComponent