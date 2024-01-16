import React from "react";
import React from "react";
import DefineDocTypeComponent from "../Purchasing/DefineDocTypeComponent";
import NumberRangeComponent from "../Purchasing/NumberRangeComponent";
import ScreenLayoutComponent from "../Purchasing/ScreenLayoutComponent";

import ControlBar from "./Tools/ControlBar";
import AssignComponent from "./Assign/AssignComponent";


const PurchaseOrderComponent = ({ page, tc }) => {
  const renderPageContent = () => {

    if(tc!=null)
    {
      switch (true) {
        case tc >= "GS10017" && tc <= "GS10034":
          return <AssignComponent page={page} />;
  
        case tc == "GS10136":
          return <NumberRangeComponent page={page} />;
  
        case tc == "GS10137":
          return <DefineDocTypeComponent page={page} />;
  
        case tc == "GS10138":
          return <ScreenLayoutComponent page={page} />;
  
  
        default:
          return <div>No content found for {page.name}</div>;
      }
    }
    else{
      switch (true) {
        case page.tcode >= "GS10017" && page.tcode <= "GS10034":
          return <AssignComponent page={page} />;
  
        case page.name == "Number Range":
          return <NumberRangeComponent page={page} />;
  
        case page.name == "Define Document Type":
          return <DefineDocTypeComponent page={page} />;

          case page.name == "Define Screen layout":
          return <ScreenLayoutComponent page={page} />;

        default:
          return <div>No content found for {page.name}</div>;
      }
    }
    
  };

  return (
    <div>
    <div className="">
    {
      (  page.tcode >= "GS10017" && page.tcode <= "GS10034") ?      <ControlBar controls={page} /> : null
      }
    </div>
 
      {renderPageContent()}
    </div>
  );
};

export default PurchaseOrderComponent;
