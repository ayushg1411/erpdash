import React,{ useEffect} from 'react';
import Form from '../Tools/Form'
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { fetchPurchasingOrg } from '../Redux/Slices/PurchasingOrgSlice';
import DefineTable from "../Tools/DefineTable";
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
    console.log(state.PurchasingOrg.data)
    const index= event.target.value;
    console.log(state.PurchasingOrg.data[index]._id);
    const selectedIndex = event.target.value;
    console.log(event.target.value);
    setSelectedFormItem(state.PurchasingOrg.data[index]._id);
    slv(selectedFormItem)
    getV(state.PurchasingOrg.data[index]._id)
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
              <option key={index} value={index}>
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
  const [id, sid] = useState(null);
  const state= useSelector((state)=>state)
  const getV =(value)=>{
    sv((v)=> value);
  }
  const getId = (value) => {
    sid((id) => value);
  };
  const initialValues = {
    "Purchase Organization": '',
    "Descrition": '',
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

export default PurchasingOrgComponent