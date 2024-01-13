import React from 'react'
import Form from '../Tools/Form'
import { useState } from 'react';
import {useDispatch, useSelector} from "react-redux"
import { fetchCompanies } from '../Redux/Slices/companySlice';
import { fetchsalesOrg } from "../Redux/Slices/salesOrgSlice";


const renderButtons = (data, tcodes) => {
  const dispatch=useDispatch();
  const fetchapi =() =>{

      dispatch(fetchCompanies());
   
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

  const dispatch=useDispatch();
  const state= useSelector((state) =>state);

  if(state.company.data)
  {
    console.log(state.company.data);
  }

  const renderedButtons = renderButtons(controls, controls.tcode);
  const [selectedFormItem, setSelectedFormItem] = useState(null);

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedFormItem(event.target.value);
    getV(event.target.value)
  };



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
          onChange={(e) => handleSelectChange(e)}
         >
          <option value="">Select Form Item</option>
          {state.company.data &&
            state.company.data.map((formItem, index) => (
              <option key={index} value={formItem.form[index]}>
                {/* You can customize the display of each option here */}
                {formItem.form.Name}
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





const CompanyComponent = ({page}) => {
  const [v, sv]= useState(null);

   const getV =(value)=>{
      sv(value)
   }

  const state= useSelector((state)=>state)
    const initialValues = {
        "Company": '',
        "CompanyName": '',
        "Street": '',
        "Pobox": '',
        "PostalCode": '',
        "City": '', 
        "SelectCountry": '',
        "Currency": 'inr',
      };
   
  return (
<>


{
  v!=null ? <h1>{v}</h1> :<h1></h1>
}
<ControlBar getV={getV} controls={page} /> 
    <Form initialValues={initialValues} id={page._id} />
    </>
  )
}

export default CompanyComponent