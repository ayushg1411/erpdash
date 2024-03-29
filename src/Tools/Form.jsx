import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

const Form = ({ initialValues, id }) => {
  const validationSchema = Yup.object().shape(
    Object.keys(initialValues).reduce((acc, key) => {
      return {
        ...acc,
        [key]: Yup.string().required(`${key} is required`),
      };
    }, {})
  );

  const countryList = [
    "Country 1",
    "Country 2",
    "Country 3",
    "Country 4",
    "Country 5",
    "Country 6",
    "Country 7",
    "Country 8",
    "Country 9",
    "Country 10",
  ];

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          `https://sdaf-ijn7.onrender.com/api/user/save/${id}`,
          values
        );
        console.log("API response:", response.data);
        // Add any additional logic here, e.g., redirect, show success message, etc.
        console.log(values);
        resetForm();
        //   window.location.reload();
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle errors, e.g., show error message to the user
      }
    },
  });

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const form = e.target.form;
      const index = Array.from(form).indexOf(e.target);
      const nextField = form.elements[index + 1];

      // Check if the current field is filled before moving to the next one
      if (e.target.value.trim() !== "") {
        nextField && nextField.focus();
      }
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const form = e.target.form;
      const index = Array.from(form).indexOf(e.target);
      const nextField = form.elements[index - 1];

      // Check if the current field is filled before moving to the next one
      if (e.target.value.trim() !== "") {
        nextField && nextField.focus();
      }
    }
  };

  const handleSaveButtonClick = () => {
    // Manually submit the form
    console.log("clicked");
    formik.submitForm();
  };

  return (
    <div className="w-full bg-slate-200 mx-auto mt-1 p-1 rounded-md shadow-md">
      <form onSubmit={formik.handleSubmit} className="form-tab-css">
        <div className="w-full block float-end"></div>
        {Object.keys(initialValues).map((fieldName) => (
          <div key={fieldName} className="div-label-field">
            <label className="label-css">{fieldName}</label>
            {fieldName === "selectCountry" ? (
              <select
                name={fieldName}
                value={formik.values[fieldName]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={handleKeyPress}
                onKeyPress={handleKeyPress}
                className={`input-tag-css ${
                  formik.touched[fieldName] && formik.errors[fieldName]
                    ? "custom-border"
                    : ""
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
                  formik.touched[fieldName] && formik.errors[fieldName]
                    ? "custom-border"
                    : ""
                }`}
              />
            )}
          </div>
        ))}
      </form>

      <button
        className="m-2 float-right py-1 px-2 rounded-md bg-yellow-400 h-[40px] hover:bg-slate-500 focus:outline-none focus:ring focus:border-blue-300"
        onClick={() => {
          handleSaveButtonClick();

        }}
      >
        SAVE
      </button>
    </div>
  );
};

export default Form;
