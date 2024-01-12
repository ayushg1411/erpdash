import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const Form = ({ initialValues, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const validationSchema = Yup.object().shape(
    Object.keys(initialValues).reduce((acc, key) => {
      return {
        ...acc,
        [key]: Yup.string().required(`${key} is required`),
      };
    }, {})
  );

  const countryList = ['Country 1', 'Country 2', 'Country 3', 'Country 4', 'Country 5', 'Country 6', 'Country 7', 'Country 8', 'Country 9', 'Country 10'];

  const handleButtonClick = () => {
    console.log('Submit button clicked!');
    // Add your additional button click functionality here
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`https://sdaf-ijn7.onrender.com/api/user/save/${id}`, values);
        console.log('API response:', response.data);
        console.log(values);

        // Call the additional function when the submit button is clicked
        handleButtonClick();

        // You can also add logic here for a successful submission
        // For example, redirect, show success message, etc.

        //   window.location.reload();
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle errors, e.g., show error message to the user
      }
    },
  });

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const form = e.target.form;
      const index = Array.from(form).indexOf(e.target);
      const nextField = form.elements[index + 1];

      // Check if the current field is filled before moving to the next one
      if (e.target.value.trim() !== '') {
        nextField && nextField.focus();
      }
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const form = e.target.form;
      const index = Array.from(form).indexOf(e.target);
      const nextField = form.elements[index - 1];

      // Check if the current field is filled before moving to the next one
      if (e.target.value.trim() !== '') {
        nextField && nextField.focus();
      }
    }
  };

  return (
    <div className="w-full bg-slate-200 mx-auto mt-1 p-1 rounded-md shadow-md">
      <form onSubmit={formik.handleSubmit} className="form-tab-css">
        <div className="w-full block float-end">
          <button
            className={`m-1 py-1 px-2 rounded-lg transition-colors duration-300 ${
              isHovered ? 'bg-yellow-400' : 'bg-yellow-300'
            } ${isClicked ? 'border-2 border-blue-500' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseDown={() => setIsClicked(true)}
            onMouseUp={() => setIsClicked(false)}
            onClick={() => {
              handleButtonClick();
              formik.handleSubmit();
            }}
          >
            submit
          </button>
        </div>
        {Object.keys(initialValues).map((fieldName) => (
          <div key={fieldName} className="div-label-field">
            <label className="label-css">{fieldName}</label>
            {fieldName === 'selectCountry' ? (
              <select
                name={fieldName}
                value={formik.values[fieldName]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={handleKeyPress}
                onKeyPress={handleKeyPress}
                className={`input-tag-css ${
                  formik.touched[fieldName] && formik.errors[fieldName] ? 'custom-border' : ''
                }`}
              >
                <option value="" label="Select a country" />
                {countryList.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                name={fieldName}
                value={formik.values[fieldName]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={handleKeyPress}
                onKeyPress={handleKeyPress}
                className={`input-tag-css ${
                  formik.touched[fieldName] && formik.errors[fieldName] ? 'custom-border' : ''
                }`}
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default Form;
