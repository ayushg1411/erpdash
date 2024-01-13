import React, { useState, useEffect } from "react";
import Table from "../Tools/Table";
import axios from "axios";

const Division_SalesOrg = ({ tableHead, formData, form2Data }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [renderedData, setRenderedData] = useState([]);

  const handleSelectChange = (e, optionName) => {
    const selectedValue = e.target.value;
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: selectedValue,
    }));
    console.log(`${optionName} - Selected Value:`, selectedValue);
  };

  
  const handleAddData = () => {
    console.log(renderedData);
    if (selectedOptions[`${tableHead[0]}`] && selectedOptions[`${tableHead[1]}`]) {
      const newData = {
       [ `${tableHead[0]}`]: selectedOptions[`${tableHead[0]}`],
        [`${tableHead[1]}`]: selectedOptions[`${tableHead[1]}`],
      };
      setRenderedData((prevData) => [...prevData, newData]);

      setSelectedOptions({
       [`${tableHead[0]}`]: '',
        [`${tableHead[1]}`]: '',
      });
    }
  };

  return (
    <>
      <div className="p-0 m-0">
      <div className="flex  justify-evenly p-2 bg-indigo-100">
          {formData != null ? (
            <div>
              {" "}
              <label
                htmlFor="selectBox1"
                className="bg-gray-100 p-2 mx-2 rounded-md"
              >
               {tableHead[0]}
              </label>
              <select
                id="selectBox1"
                onChange={(e) => handleSelectChange(e, tableHead[0])}
                className="bg-gray-100 p-2 rounded-md"
                value={selectedOptions[`${tableHead[0]}`]}
              >
                <option value="">Select...</option>
                {formData.map((option) => (
                  <option key={option.form.Division} value={option.form.Division}>
                    {option.form.Division}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
          {form2Data ? (
            <div>
              {" "}
              <label
                htmlFor="selectBox1"
                className="bg-gray-100 p-2  mx-2 rounded-md"
              >
                {tableHead[1]}
              </label>{" "}
              <select
                id="selectbox2"
                onChange={(e) => handleSelectChange(e, tableHead[1])}
                className="bg-gray-100 p-2 rounded-md"
                value={selectedOptions[`${tableHead[1]}`]}
              >
                <option value="">Select...</option>
                {form2Data.map((option) => (
                  <option key={option.form.SalesOrganization} value={option.form.SalesOrganization}>
                    {option.form.SalesOrganization}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
         {
          formData ?  <button className="buttonAdd" onClick={handleAddData}>
          Add Data
        </button> :null
         }
        </div>
      <div className="">
        <Table jsonData={renderedData} />
      </div>
      </div>
    </>
  );
};

export default Division_SalesOrg;
