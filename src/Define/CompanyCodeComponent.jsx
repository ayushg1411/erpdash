import React from "react";
import Form from "../Tools/Form";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanysCodes } from "../Redux/Slices/companyCodeSlice";

const renderButtons = (data) => {
  const dispatch = useDispatch();
  const fetchapi = () => {


    dispatch(fetchCompanysCodes());
  };
  return Object.entries(data).map(([key, value]) => {
    if (typeof value === "boolean" && value) {
      return (
        <button className="button" key={key} onClick={fetchapi}>
          <p className="p-1"> {key}</p>
        </button>
      );
    }
    return null;
  });
};
const ControlBar = ({ controls, getV }) => {
  const [ vl, slv] = useState(null);

  const dispatch=useDispatch();
  const state= useSelector((state) =>state);
  const [selectedFormItem, setSelectedFormItem] = useState(null);

  const handleSelectChange = (event) => {
    console.log(state.CompanyCode.data)
    const index= event.target.value;
    console.log(state.CompanyCode.data[index]._id);
    const selectedIndex = event.target.value;
    console.log(event.target.value);
    setSelectedFormItem(state.CompanyCode.data[index]._id);
    slv(selectedFormItem)
    getV(state.CompanyCode.data[index]._id)
  };

  const renderedButtons = renderButtons(controls, controls.tcode);

  return (
    <div>
      <div className="control-bar">
        <p className="page-name">
          {controls.name}
          <span className="page-tcode"> {" "}- {controls.tcode}</span>
        </p>
        {state != null ? (
          <div className="py-2">
            <select className="select" onChange={(e) => handleSelectChange(e)}>
              <option className="option" value="">
                {Object.keys(state)[4]}
              </option>
              {state.CompanyCode.data &&
                state.CompanyCode.data.map((formItem, index) => (
                  <option key={index} value={index}>
                    {formItem.form["Company"]}
                  </option>
                ))}
            </select>
          </div>
        ) : null}
        <div className="button-container">{renderedButtons}</div>
      </div>
    </div>
  );
};

const CompanyCodeComponent = ({ page }) => {
  const [v, sv] = useState(null);
  const getV = (value) => {
    sv((v) => value);
  };
  const initialValues = {
    Company: "",
    CompanyName: "",
    Street: "",
    Pobox: "",
    PostalCode: "",
    City: "", 
    SelectCountry: "",
    Currency: "inr",
    Language: "",
  };

  return (
    <div className="define-container">
      <ControlBar getV={getV} controls={page} />
      { (v)?<h1>{v}</h1>: null} 
      {/* important comment */}
      <Form initialValues={initialValues} id={page._id} />
    </div>
  );
};
export default CompanyCodeComponent;
