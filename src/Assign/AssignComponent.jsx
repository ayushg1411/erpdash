import { Form } from "formik";
import React from "react";
import LinkComponent from "../Tools/LinkComponent";

const AssignComponent = ({ page }) => {
  console.log(page)
  return (
    <>
      <div className=" w-[1600px] bg-slate-200 mx-auto mt-1 p-1 rounded-md shadow-md">
        <LinkComponent page={page} />
      </div>
    </>
  );
};

export default AssignComponent;
