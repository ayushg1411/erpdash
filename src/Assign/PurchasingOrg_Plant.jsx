import React, { useState, useEffect } from "react";
import Table from "../Tools/Table";
import axios from "axios";

const Purchasing_Plant = ({ tableHead, formData, form2Data }) => {
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
      selectedOptions[`${tableHead[1]}`]
    ) {
      const newData = {
        [`${tableHead[0]}`]: selectedOptions[`${tableHead[0]}`],
        [`${tableHead[1]}`]: selectedOptions[`${tableHead[1]}`],
      };
      setRenderedData((prevData) => [...prevData, newData]);
      console.log(renderedData);
      setSelectedOptions({
        [`${tableHead[0]}`]: "",
        [`${tableHead[1]}`]: "",
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
                    key={option.form.Descrition}
                    value={option.form.Descrition}
                  >
                    {option.form.Descrition}
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
                  <option key={option.form.Plant} value={option.form.Plant}>
                    {option.form.Plant}
                  </option>
                ))}
              </select>
            </div>
          ) : null}

          {form2Data ? (
            <button className="buttonAdd" onClick={handleAddData}>
              Add Data
            </button>
          ) : null}
        </div>
        <div>
          <Table jsonData={renderedData} />
        </div>
      </div>
    </>
  );
};

export default Purchasing_Plant;
