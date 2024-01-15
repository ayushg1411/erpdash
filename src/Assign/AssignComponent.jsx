import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "../Redux/Slices/companySlice";
import { fetchCompanysCodes } from "../Redux/Slices/CompanyCodeSlice";
import { fetchFunctional } from "../Redux/Slices/FunctionalSlice";
import { fetchLoading } from "../Redux/Slices/LoadingSlice";
import { fetchCreditControl } from "../Redux/Slices/CreditControlSlice";
import { fetchDistribuation } from "../Redux/Slices/DistribuationSlice";
import { fetchBusiness } from "../Redux/Slices/BusinessSlice";
import { fetchPlant } from "../Redux/Slices/PlantSlice";
import { fetchProfitCenter } from "../Redux/Slices/ProfitCenterSlice";
import { fetchDivision } from "../Redux/Slices/DivisionSlice";
import { fetchsalesOrg } from "../Redux/Slices/salesOrgSlice";
import { fetchSalesOffice } from "../Redux/Slices/SalesOfficeSlice";
import { fetchSalesGrp } from "../Redux/Slices/SalesGrpSlice";
import { fetchStorageLoc } from "../Redux/Slices/StorageLocSlice";
import { fetchPurchasingOrg } from "../Redux/Slices/PurchasingOrgSlice";
import { fetchShipping } from "../Redux/Slices/ShippingSlice";

import CompanyCode_Company from "./CompanyCode_Company";
import CompanyCode_CreditControl from "./CompanyCode_CreditControl";
import Plant_CompanyCode from "./Plant_CompanyCode";
import SalesOrg_CompanyCode from "./SalesOrg_CompanyCode";
import Distribuation_SalesOrg from "./Distribuation_SalesOrg";
import Division_SalesOrg from "./Division_SalesOrg";
import SalesArea from "./SalesArea";
import SalesOffice_SalesArea from "./SalesOffice_SalesArea";
import SalesOrg_Distribuation_Plant from "./SalesOrg_Distribuation_Plant";
import SalesArea_CreditControl from "./SalesArea_CreditControl";
import Purchasing_CompanyCode from "./PurchasingOrg_CompanyCode";
import Purchasing_Plant from "./PurchasingOrg_Plant";
import Standard_PurchasingOrg_Plant from "./Standard_PurchasingOrg_Plant";
import PurchasingOrg_ReferencePurchasingOrg from "./PurchasingOrg_ReferencePurchasingOrg";
import SalesOrg_Plant from "./SalesOrg_Plant";
import Business_Plant_Divison from "./Business_Plant_Divison";
import SalesArea_Business from "./SalesArea_Business";
import Shipping_Plant from "./Shipping_Plant";
import Division_Plant from "./Division_Plant";

const AssignComponent = ({ page }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const dispatcher = async () => {
    try {
      await Promise.all([
        dispatch(fetchCompanies()),
        dispatch(fetchCompanysCodes()),
        dispatch(fetchFunctional()),
        dispatch(fetchLoading()),
        dispatch(fetchCreditControl()),
        dispatch(fetchDistribuation()),
        dispatch(fetchBusiness()),
        dispatch(fetchPlant()),
        dispatch(fetchProfitCenter()),
        dispatch(fetchDivision()),
        dispatch(fetchsalesOrg()),
        dispatch(fetchSalesOffice()),
        dispatch(fetchSalesGrp()),
        dispatch(fetchStorageLoc()),
        dispatch(fetchPurchasingOrg()),
        dispatch(fetchShipping()),
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderComponent = () => {
    switch (page.tcode) {
      case "GS10017":
        return (
          <CompanyCode_Company
            tableHead={["Company Code", "Company"]}
            formData={state.CompanyCode.data}
            form2Data={state.company.data}
          />
        );
      case "GS10018":
        return (
          <CompanyCode_CreditControl
            tableHead={["Company Code", "Credit Control Area"]}
            formData={state.CompanyCode.data}
            form2Data={state.CreditControl.data}
          />
        );
      case "GS10019":
        return (
          <Plant_CompanyCode
            tableHead={["Company Code", "Plant"]}
            formData={state.CompanyCode.data}
            form2Data={state.Plant.data}
          />
        );
        case "GS10020" :
          return (
          <SalesOrg_CompanyCode
            tableHead={["Sales Organization", "Company Code"]}
            formData={state.salesOrg.data}
            form2Data={state.CompanyCode.data}
          />
        ); 
      
        case "GS10021" :
          return (
          <Distribuation_SalesOrg
            tableHead={[" Distribuation Channel ", "Sales Organization"]}
            formData={state.Distribuation.data}
            form2Data={state.salesOrg.data}
          />
        ); 
      
        case "GS10022" :
          return (
          <Division_SalesOrg
            tableHead={["Division", "Sales Organization"]}
            formData={state.Division.data}
            form2Data={state.salesOrg.data}
          />
        ); 
      
        case "GS10023" :
          return (
          <SalesArea
            tableHead={["Sales Organization ", "Distribuation Channel ","Division"]}
            formData={state.salesOrg.data}
            form2Data={state.Distribuation.data}
            form3Data={state.Division.data}
          />
        ); 
      
        case "GS10024" :
          return (
          <SalesOffice_SalesArea
            tableHead={["Sales Organization ", "Distribuation Channel ","Division", "Sales Office"]}
            formData={state.salesOrg.data}
            form2Data={state.Distribuation.data}
            form3Data={state.Division.data}
            form4Data={state.SalesOffice.data}
          />
        ); 
      
        case "GS10025" :
          return (
          <SalesOrg_Distribuation_Plant
            tableHead={["Sales Organization ", "Distribuation Channel ","Plant"]}
            formData={state.salesOrg.data}
            form2Data={state.Distribuation.data}
            form3Data={state.Plant.data}
          />
        ); 
      
        case "GS10026" :
          return (
          <SalesArea_CreditControl
            tableHead={["Sales Organization ", "Distribuation Channel ","Division", "Credit Control Area"]}
            formData={state.salesOrg.data}
            form2Data={state.Distribuation.data}
            form3Data={state.Division.data}
            form4Data={state.CreditControl.data}
          />
        ); 
      
        case "GS10027" :
          return (
          <Purchasing_CompanyCode
            tableHead={["Purchasing Organization", "Company Code"]}
            formData={state.PurchasingOrg.data}
            form2Data={state.CompanyCode.data}
          />
        ); 
      
        case "GS10028" :
          return (
          <Purchasing_Plant
            tableHead={["Purchasing Organization", "Plant"]}
            formData={state.PurchasingOrg.data}
            form2Data={state.Plant.data}
          />
        ); 
      
        case "GS10029" :
          return (
          <Standard_PurchasingOrg_Plant
            tableHead={["Plant","Purchasing Organization", "Plant Description"]}
            formData={state.PurchasingOrg.data}
            form2Data={state.Plant.data}
            form3Data={state.Plant.data}
          />
        ); 
      
        case "GS10030" :
          return (
          <PurchasingOrg_ReferencePurchasingOrg
            tableHead={["Purchasing Organization", "Refrence Purchasing Organization"]}
            formData={state.PurchasingOrg.data}
            form2Data={state.PurchasingOrg.data}
          />
        ); 
      
        case "GS10031" :
          return (
          <SalesOrg_Plant
            tableHead={["Sales Area", "Rule"]}
            formData={state.salesOrg.data}
            form2Data={state.Plant.data}
          />
        ); 
      
        case "GS10032" :
          return (
          <Business_Plant_Divison
            tableHead={["Plant" , "Division", "Division Name" ,"Business Area"]}
            formData={state.Plant.data}
            form2Data={state.Division.data}
            form3Data={state.Division.data}
            form4Data={state.Business.data}
          />
        ); 
      
        case "GS10033" :
          return (
          <SalesArea_Business
            tableHead={["Sales Organization ", "Distribuation Channel ","Division", "Business"]}
            formData={state.salesOrg.data}
            form2Data={state.Distribuation.data}
            form3Data={state.Division.data}
            form4Data={state.Business.data}
          />
        ); 
      
        case "GS10034" :
          return (  
          <Shipping_Plant
            tableHead={["Shipping Point","Plant" ]}
            formData={state.Shipping.data}
            form2Data={state.Plant.data}
          />
        )
      // Add more cases for other tcodes...
      default:
        return (
          <div>
            <h1>Component for {page.tcode} not found</h1>
          </div>
        );
    }
  };

  return (
    <div className="define-container bg-gray-100 min-h-screen">
      {renderComponent()}
      <button className="button" onClick={dispatcher}>
        Show
      </button>
    </div>
  );
};

export default AssignComponent;
