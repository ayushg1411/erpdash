import React, { useState, useEffect } from "react";
import Table from "../Tools/Table";
import axios from "axios";

const SalesOrg_Plant = ({ formData, form2Data }) => {
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
    if (selectedOptions.option1 && selectedOptions.option2) {
      const newData = {
        option1: selectedOptions.option1,
        option2: selectedOptions.option2,
      };
      setRenderedData((prevData) => [...prevData, newData]);

      setSelectedOptions({
        option1: "",
        option2: "",
      });
    }
  };

  return (
    <>
        <div className="flex w-full justify-evenly p-4 bg-sky-100">
          {formData != null ? (
            <div>
              {" "}
              <label
                htmlFor="selectBox1"
                className="bg-gray-100 p-2 mx-2 rounded-md"
              >
                company
              </label>
              <select
                id="selectBox1"
                onChange={(e) => handleSelectChange(e, "option1")}
                className="bg-gray-100 p-2 rounded-md"
                value={selectedOptions.option1}
              >
                <option value="">Select...</option>
                {formData.map((option) => (
                  <option key={option.form.SalesOrganization} value={option.form.SalesOrganization}>
                    {option.form.SalesOrganization}
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
                company
              </label>{" "}
              <select
                id="selectbox2"
                onChange={(e) => handleSelectChange(e, "option2")}
                className="bg-gray-100 p-2 rounded-md"
                value={selectedOptions.option2}
              >
                <option value="">Select...</option>
                {form2Data.map((option) => (
                  <option key={option.form.Plant} value={option.form.Plant}>
                    {option.form.Plant}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
          <button className="px-4 bg-yellow-300 p-1" onClick={handleAddData}>
            Add Data
          </button>
        </div>
      <div className="mx-32">
        <Table jsonData={renderedData} />
      </div>
    </>
  );
};

export default SalesOrg_Plant;
