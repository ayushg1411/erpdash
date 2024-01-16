import React from "react";
import { Form } from "formik";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "../Redux/Slices/companySlice";
import { fetchsalesOrg } from "../Redux/Slices/salesOrgSlice";

const renderButtons = (data, tcodes) => {
  const dispatch = useDispatch();
  const fetchapi = () => {
    if (tcodes === "GS10001") {
      dispatch(fetchCompanies());
    } else if (tcodes === "GS10002") {
      dispatch(fetchsalesOrg());
    }
  };
  return Object.entries(data).map(([key, value]) => {
    if (typeof value === "boolean" && value) {
      return (
        <button
          className="m-1 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring focus:border-blue-300 h-[40px] px-4"
          key={key}
          onClick={fetchapi}
        >
          <p className="p-1 text-white">{key}</p>
        </button>
      );
    }
    return null;
  });
};
const ControlBar = ({ controls }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  if (state.company.data) {
    console.log(state.company.data);
  }

  const renderedButtons = renderButtons(controls, controls.tcode);

  return (
    <>
      <div className="mb-4 bg-gradient-to-r from-blue-500 to-blue-800 p-4 flex justify-between rounded-lg shadow-md">
        <p className="text-3xl md:text-xl sm:text-xs xl:text-3xl mx-2 pt-2 text-white font-bold">
          {controls.name}
          <span className="text-2xl md:text-xl xl:text-3xl sm:text-base mx-2 pt-2 text-black font-bold">
            {" "}
            - {controls.tcode}
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center pt-2 space-y-2 sm:space-y-0 sm:space-x-2">
          {renderedButtons}
        </div>
      </div>
    </>
  );
};

export default ControlBar;