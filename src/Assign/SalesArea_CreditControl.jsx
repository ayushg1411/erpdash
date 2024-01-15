import React, { useState, useEffect } from "react";
import Table from "../Tools/Table";
import axios from "axios";

const SalesArea_CreditControl = ({tableHead, formData, form2Data, form3Data, form4Data }) => {
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
    if (
      selectedOptions[`${tableHead[0]}`] &&
      selectedOptions[`${tableHead[1]}`] &&
      selectedOptions[`${tableHead[2]}`] &&
      selectedOptions[`${tableHead[3]}`]
    ) {
      const newData = {
        [`${tableHead[0]}`]: selectedOptions[`${tableHead[0]}`],
        [`${tableHead[1]}`]: selectedOptions[`${tableHead[1]}`],
        [`${tableHead[2]}`]: selectedOptions[`${tableHead[2]}`],
        [`${tableHead[3]}`]: selectedOptions[`${tableHead[3]}`],
      };
      setRenderedData((prevData) => [...prevData, newData]);
      console.log(renderedData);
      setSelectedOptions({
        [`${tableHead[0]}`]: "",
        [`${tableHead[1]}`]: "",
        [`${tableHead[2]}`]: "",
        [`${tableHead[3]}`]: "",
      });
    }
  };

  return (
    <>
    <div className="p-0 m-0">
      <div className="assign-searchbar">
        {formData != null ? (
          <div>
          {" "}
          <label htmlFor="selectBox1" className="label">
            {tableHead[0]}
          </label>
          <select
            id="selectBox1"
            onChange={(e) => handleSelectChange(e, tableHead[0])}
            className="select"
            value={selectedOptions[`${tableHead[0]}`]}
          >
            <option value="">Select...</option>
            {formData.map((option) => (
              <option
                key={option.form.SalesOrganization}
                value={option.form.SalesOrganization}
              >
                {option.form.SalesOrganization}
              </option>
            ))}
          </select>
        </div>
        ) : null}
        {form2Data ? (
          <div>
          {" "}
          <label htmlFor="selectBox1" className="select">
            {tableHead[1]}
          </label>{" "}
          <select
            id="selectbox2"
            onChange={(e) => handleSelectChange(e, tableHead[1])}
            className="select"
            value={selectedOptions[`${tableHead[1]}`]}
          >
            <option value="">Select...</option>
            {form2Data.map((option) => (
              <option key={option.form.Distribuation} value={option.form.Distribuation}>
                {option.form.Distribuation}
              </option>
            ))}
          </select>
        </div>
        ) : null}
        {form3Data ? (
          <div>
          {" "}
          <label htmlFor="selectBox1" className="select">
            {tableHead[2]}
          </label>{" "}
          <select
            id="selectbox2"
            onChange={(e) => handleSelectChange(e, tableHead[2])}
            className="select"
            value={selectedOptions[`${tableHead[2]}`]}
          >
            <option value="">Select...</option>
            {form3Data.map((option) => (
              <option key={option.form.Division} value={option.form.Division}>
                {option.form.Division}
              </option>
            ))}
          </select>
        </div>
        ) : null}
        {form4Data ? (
          <div>
          {" "}
          <label htmlFor="selectBox1" className="select">
            {tableHead[3]}
          </label>{" "}
          <select
            id="selectbox2"
            onChange={(e) => handleSelectChange(e, tableHead[3])}
            className="select"
            value={selectedOptions[`${tableHead[3]}`]}
          >
            <option value="">Select...</option>
            {form4Data.map((option) => (
              <option key={option.form["Credit Control Area"]} value={option.form["Credit Control Area"]}>
                {option.form["Credit Control Area"]}
              </option>
            ))}
          </select>
        </div>
        ) : null}
        <button className="buttonAdd" onClick={handleAddData}>
          Add Data
        </button>
      </div>
    <div>
      <Table jsonData={renderedData} />
    </div>
  </div>
  </>
  );
};

export default SalesArea_CreditControl;
