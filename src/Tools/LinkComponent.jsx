import React, { useState, useEffect } from "react";
import Table from "./Table";
import axios from "axios";

const LinkComponent = () => {
  const [formData, setFormData] = useState([]);
  const [form2Data, setForm2Data] = useState([]);

  // Define a function to fetch data from the API using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://sdaf-ijn7.onrender.com/api/user/define/659fad8fa19f785b6b0bd353`
      ); // Replace 'your-api-endpoint' with the actual API endpoint
      setFormData(response.data);
      // Set the form data in the state variable
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const fetchData2 = async () => {
    try {
      const response = await axios.get(
        `https://sdaf-ijn7.onrender.com/api/user/define/659fad90a19f785b6b0bd35f`
      ); // Replace 'your-api-endpoint' with the actual API endpoint
      setForm2Data(response.data);
      // Set the form data in the state variable
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


  useEffect(() => {
    fetchData();
    fetchData2();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts


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

      // Reset selected options after adding data
      setSelectedOptions({
        option1: "",
        option2: "",
      });
    }
  };

  return (
    <>
      <div className="px-4">
        <label htmlFor="selectBox1" className="px-4 bg-gray-200 m-4 h-[32px]">
          company
        </label>
        <select
          id="selectBox1"
          onChange={(e) => handleSelectChange(e, "option1")}
          className="p-2 bg-gray-200"
          value={selectedOptions.option1}
        >
          <option value="">Select...</option>
          {formData.map((option) => (
            <option key={option.form.company} value={option.form.company}>
              {option.form.company} {option.form.companyName}
            </option>
          ))}
        </select>

        <label htmlFor="selectBox2" className="px-4 bg-gray-200 m-4 h-[32px]">
          sales org
        </label>
        <select
          id="selectBox2"
          onChange={(e) => handleSelectChange(e, "option2")}
          className="bg-gray-200 p-2"
          value={selectedOptions.option2}
        >
          <option value="">Select...</option>
          {form2Data.map((option) => (
            <option
              key={option.form.SalesOrganization}
              value={option.form.SalesOrganization}
            >
              {option.form.SalesOrganization}
            </option>
          ))}
        </select>

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

export default LinkComponent;
