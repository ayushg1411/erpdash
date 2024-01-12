import { Form } from "formik";
import React from "react";
import {useDispatch, useSelector} from "react-redux"
import LinkComponent from "../Tools/LinkComponent";
import { fetchCompanies } from "../Redux/Slices/companySlice";
import { fetchsalesOrg } from "../Redux/Slices/salesOrgSlice";



const AssignComponent = ({ page }) => {

  const dispatch=useDispatch();
  const state= useSelector((state) =>state);
  const salesorg= useSelector((state) =>state);

  console.log(Object.keys(state));
  if(state.company.isLoading){
    return <h1>Loading.............</h1>
  }
  if(salesorg.salesorg.isLoading){
    return <h1>Loading.............</h1>
  }

  const dispatcher =() =>{
    dispatch(fetchCompanies()),
    dispatch(fetchsalesOrg())
  }

  return (
    <>
  

 
<div>
      {/* Assuming company.data is an array */}
      
      { state.company.data && state.company.data.map((formItem, index) => (
        <div key={index}>
       
          {/* Render form values here */}
          {Object.entries(formItem.form).map(([key, value]) => (
            <div key={key}>
              {
                (key=="Name") ? (  <strong>{value}:</strong> ) : null
              }
            
            </div>
          ))}
        </div>
      ))}
      
    </div>

    <div>
      {/* Assuming company.data is an array */}
      
      { salesorg.salesorg.data && salesorg.salesorg.data.map((formItem, index) => (
        <div key={index}>
       
          {/* Render form values here */}
          {Object.entries(formItem.form).map(([key, value]) => (
            <div key={key}>
              {
                (key=="SalesOrganization") ? (  <strong>{value}:</strong> ) : null
              }
            
            </div>
          ))}
        </div>
      ))}
      
    </div>



<button className="bg-gray-300 p-2 m-2 float-right"   onClick={dispatcher}>open</button>



    </>
  );
};

export default AssignComponent;
