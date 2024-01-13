import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./Slices/companySlice";
import DistribuationReducer from "./Slices/DistribuationSlice";
import BusinessReducer from "./Slices/BusinessSlice";
import FunctionalReducer from "./Slices/FunctionalSlice";
import PlantReducer from "./Slices/PlantSlice";
import PurchasingOrgReducer from "./Slices/PurchasingOrgSlice";
import LoadingReducer from "./Slices/LoadingSlice";
import ShippingReducer from "./Slices/ShippingSlice";
import StorageLocReducer from "./Slices/StorageLocSlice";
import ProfitCenterReducer from "./Slices/ProfitCenterSlice";
import DivisionReducer from "./Slices/DivisionSlice";
import CreditControlReducer from "./Slices/CreditControlSlice";
import SalesGrpReducer from "./Slices/SalesGrpSlice";
import SalesOfficeReducer from "./Slices/SalesOfficeSlice";
import CompanyCodeReducer from "./Slices/companyCodeSlice";
import salesOrgReducer from "./Slices/salesOrgSlice";

export const store = configureStore({
  reducer: {
    company: companyReducer,
    CreditControl: CreditControlReducer,
    Distribuation: DistribuationReducer,
    Business: BusinessReducer,
    CompanyCode: CompanyCodeReducer,
    company: companyReducer,
    CreditControl: CreditControlReducer,
    Division: DivisionReducer,
    Functional: FunctionalReducer,
    Loading: LoadingReducer,
    Plant: PlantReducer,
    ProfitCenter: ProfitCenterReducer,
    PurchasingOrg: PurchasingOrgReducer,
    SalesGrp: SalesGrpReducer,
    SalesOffice: SalesOfficeReducer,
    salesOrg: salesOrgReducer,
    Shipping: ShippingReducer,
    StorageLoc: StorageLocReducer,
  },
});
