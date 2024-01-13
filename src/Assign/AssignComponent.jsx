import { Form } from "formik";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LinkComponent from "../Tools/LinkComponent";
import { fetchCompanies } from "../Redux/Slices/companySlice";
import { fetchsalesOrg } from "../Redux/Slices/salesOrgSlice";
import { Link } from "react-router-dom";

const AssignComponent = ({ page }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const salesorg = useSelector((state) => state);
  const [data, setData] = useState([]);

  console.log(Object.keys(state));
  if (state.company.isLoading) {
    return <h1>Loading.............</h1>;
  }
  if (salesorg.salesorg.isLoading) {
    return <h1>Loading.............</h1>;
  }

  const dispatcher = () => {
    dispatch(fetchCompanies()), dispatch(fetchsalesOrg());
  };

  const add = (value) => {
    setData((prevData) => [...prevData, value]);
  };

  return (
    <>

    <LinkComponent formData={state.company.data} form2Data = {state.salesorg.data }/>
    
    

      <button className="bg-gray-300 p-2 m-2 float-right" onClick={dispatcher}>
        open
      </button>
    </>
  );
};

export default AssignComponent;
