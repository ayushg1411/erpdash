// import { Form } from "formik";
// import React from "react";
// import {useDispatch, useSelector} from "react-redux"
// import LinkComponent from "../Tools/LinkComponent";

// import { fetchDivision } from "../Redux/Slices/DivisionSlice";
// import { fetchsalesOrg } from "../Redux/Slices/salesOrgSlice";




// const AssignComponent = ({ page }) => {

//   const dispatch=useDispatch();
//   const state= useSelector((state) =>state);
//   const CreditControl= useSelector((state) =>state);
//   const companyCode= useSelector((state) =>state);
//   const Business= useSelector((state) =>state);
//   const Functional= useSelector((state) =>state);
//   const Plant= useSelector((state) =>state);
//   const ProfitCenter= useSelector((state) =>state);
//   const Division= useSelector((state) =>state);
//   const SalesGrp= useSelector((state) =>state);
//   const SalesOffice= useSelector((state) =>state);
//   const StorageLoc= useSelector((state) =>state);
//   const PurchasingOrg= useSelector((state) =>state);
//   const Shipping= useSelector((state) =>state);
//   const Loading= useSelector((state) =>state);
//   const salesorg= useSelector((state) =>state);

//   console.log(Object.keys(state));
//   if(state.company.isLoading){
//     return <h1>Loading.............</h1>
//   }

//   if(state.CreditControl.isLoading){
//     return <h1>Loading.............</h1>
//   }
//   if(state.Business.isLoading){
//     return <h1>Loading.............</h1>
//   }
//   if(state.Functional.isLoading){
//     return <h1>Loading.............</h1>
//   }
//   if(state.Plant.isLoading){
//     return <h1>Loading.............</h1>
//   }
//   if(state.ProfitCenter.isLoading){
//     return <h1>Loading.............</h1>
//   }
//   if(state.Division.isLoading){
//     return <h1>Loading.............</h1>
//   }
//   if(state.SalesGrp.isLoading){
//     return <h1>Loading.............</h1>
//   }
//   if(state.SalesOffice.isLoading){
//     return <h1>Loading.............</h1>
//   }
//   if(state.StorageLoc.isLoading){
//     return <h1>Loading.............</h1>
//   }
//   if(state.PurchasingOrg.isLoading){
//     return <h1>Loading.............</h1>
//   }
//   if(state.Shipping.isLoading){
//     return <h1>Loading.............</h1>
//   }
//   if(salesorg.salesorg.isLoading){
//     return <h1>Loading.............</h1>
//   }

//   const dispatcher =() =>{
//     // dispatch(fetchCompanies()),
//     // dispatch(fetchCompanysCodes())
//     // dispatch(fetchFunctional())
//     // dispatch(fetchLoading())
//     // dispatch(fetchCreditControl())
//     // dispatch(fetchBusiness())
//     // dispatch(fetchPlant())
//     // dispatch(fetchProfitCenter())
//     dispatch(fetchDivision())
//     // dispatch(fetchsalesOrg())
//     // dispatch(fetchSalesOffice())
//     // dispatch(fetchSalesGrp())
//     // dispatch(fetchStorageLoc())
//     // dispatch(fetchPurchasingOrg())
//     // dispatch(fetchShipping())
//     // dispatch(fetchLoading())
//   }

//   return (
//     <>
  

//   <div>
//       {/* Assuming company.data is an array */}
      
//       { Division.Division.data && Division.Division.data.map((formItem, index) => (
//         <div key={index}>
       
//           {/* Render form values here */}
//           {Object.entries(formItem.form).map(([key, value]) => (
//             <div key={key}>
//               {
//                 (key=="Division") ? (  <strong>{value}:</strong> ) : null
//               }
            
//             </div>
//           ))}
//         </div>
//       ))}
      
//     </div>

 


// <button className="bg-gray-300 p-2 m-2 float-right"   onClick={dispatcher}>open</button>



//     </>
//   );
// };

// export default AssignComponent;



import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LinkComponent from "./Division_Plant";

import { fetchDivision } from "../Redux/Slices/DivisionSlice";
import { fetchPurchasingOrg } from "../Redux/Slices/PurchasingOrgSlice";

import { fetchsalesOrg } from "../Redux/Slices/salesOrgSlice";
import { fetchCompanies } from "../Redux/Slices/companySlice";
import { fetchCompanysCodes } from "../Redux/Slices/companyCodeSlice";
import { fetchCreditControl } from "../Redux/Slices/CreditControlSlice";
import { fetchSalesOffice } from "../Redux/Slices/SalesOfficeSlice";
import { fetchSalesGrp } from "../Redux/Slices/SalesGrpSlice";
import { fetchShipping } from "../Redux/Slices/ShippingSlice";
import { fetchPlant } from "../Redux/Slices/PlantSlice";
import { fetchBusiness } from "../Redux/Slices/BusinessSlice";
import { fetchDistribuation } from "../Redux/Slices/DistribuationSlice";






import Purchasing_Plant from "./PurchasingOrg_Plant";
import Division_Plant from "./Division_Plant";
import SalesOrg_Plant from "./SalesOrg_Plant";
import CompanyCode_Company from "./CompanyCode_Company";
import CompanyCode_CreditControl from "./CompanyCode_CreditControl";
import SalesOffice_SalesArea from "./SalesOffice_SalesArea";
import Shipping_Plant from "./Shipping_Plant";
import Business_Plant from "./Business_Plant";
import Division_SalesOrg from "./Division_SalesOrg";
import Distribuation_SalesOrg from "./Distribuation_SalesOrg";










const AssignComponent = ({ page }) => {
  const dispatch = useDispatch();
  const state= useSelector((state) =>state);

  const dispatcher =() =>{
    // dispatch(fetchCompanies()),
    // dispatch(fetchCompanysCodes())
    // dispatch(fetchFunctional())
    // dispatch(fetchLoading())
    // dispatch(fetchCreditControl())
    // dispatch(fetchDistribuation())
    // dispatch(fetchBusiness())
    dispatch(fetchPlant())
    // dispatch(fetchProfitCenter())
    dispatch(fetchDivision())
    dispatch(fetchsalesOrg())
    // dispatch(fetchSalesOffice())
    // dispatch(fetchSalesGrp())
    // dispatch(fetchStorageLoc())
    dispatch(fetchPurchasingOrg())
    // dispatch(fetchShipping())
    // dispatch(fetchLoading())
  }


  return(



<div className= " define-container bg-gray-100 min-h-screen">
{

  page.tcode=="GS10028"? <Purchasing_Plant  tableHead={["Purchasing Org", "Plant"]}  formData={state.PurchasingOrg.data} form2Data={state.Plant.data} /> :
  <Division_SalesOrg  tableHead = {["Division", "Sales Organization"]} formData={state.Division.data} form2Data={state.salesOrg.data} />


}



  <button className="button " onClick={dispatcher}>
    Show
  </button>
</div>


  )


};

export default AssignComponent;
