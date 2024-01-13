
import React from "react";

import CompanyComponent from "./Define/CompanyComponent";
import CreditControlComponent from "./Define/CreditControlComponent";
import CompanyCodeComponent from "./Define/CompanyCodeComponent";
import BusinessComponent from "./Define/BusinessComponent";
import FunctionalComponent from "./Define/FunctionalComponent";
import ProfitCenterComponent from "./Define/ProfitCenterComponent";
import PlantComponent from "./Define/PlantComponent";
import DivisionComponent from "./Define/DivisionComponent";
import SalesOrgComponent from "./Define/SalesOrgComponent";
import SalesOfficeComponent from "./Define/SalesOfficeComponent";
import SalesGrpComponent from "./Define/SalesGrpComponent";
import StorageComponent from "./Define/StorageComponent";
import PurchasingOrgComponent from "./Define/PurchasingOrgComponent";
import ShippingComponent from "./Define/ShippingComponent";
import LoadingComponent from "./Define/LoadingComponent";
import DistribuationComponent from "./Define/DistribuationComponent";


import ControlBar from "./Tools/ControlBar";

import AssignComponent from "./Assign/AssignComponent";
// import Division_to_SalesOrg from "./Assign/Division_SalesOrg";

// Import other components as needed

const PageComponent = ({ page, tc }) => {
  const renderPageContent = () => {

    if(tc!=null)
    {
      switch (true) {
        case tc >= "GS10017" && tc <= "GS10034":
          return <AssignComponent page={page} />;
  
        case tc == "GS10001":
          return <CompanyComponent page={page} />;
  
        case tc == "GS10002":
          return <CreditControlComponent page={page} />;
  
        case tc == "GS10003":
          return <CompanyCodeComponent page={page} />;
  
  
        default:
          return <div>No content found for {page.name}</div>;
      }
    }
    else{
      switch (true) {
        case page.tcode >= "GS10017" && page.tcode <= "GS10034":
          return <AssignComponent page={page} />;
  
        case page.name == "Company":
          return <CompanyComponent page={page} />;
  
        case page.name == "Credit Control Area":
          return <CreditControlComponent page={page} />;
  
        case page.name == "Company Code":
          return <CompanyCodeComponent page={page} />;
  
        case page.name == "Business Area":
          return <BusinessComponent page={page} />;
  
        case page.name == "Functional Area":
          return <FunctionalComponent page={page} />;
  
        case page.name == "Profit Center":
          return <ProfitCenterComponent page={page} />;
  
        case page.name == "Plant":
          return <PlantComponent page={page} />;
  
        case page.name == "Division":
          return <DivisionComponent page={page} />;
  
        case page.name == "Sales Organization":
          return <SalesOrgComponent page={page} />;
  
        case page.name == "Distribuation Channel":
          return <DistribuationComponent page={page} />;
  
        case page.name == "Sales Office":
          return <SalesOfficeComponent page={page} />;
  
        case page.name == "Sales Group":
          return <SalesGrpComponent page={page} />;
  
        case page.name == "Storage Location":
          return <StorageComponent page={page} />;
  
        case page.name == "Purchasing Organization":
          return <PurchasingOrgComponent page={page} />;
  
        case page.name == "Shipping Point":
          return <ShippingComponent page={page} />;
  
        case page.name == "Loading Point":
          return <LoadingComponent page={page} />;
  
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

export default PageComponent;
