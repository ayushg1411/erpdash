import { configureStore} from "@reduxjs/toolkit"
import companyReducer from './Slices/companySlice'
import salesReducer from './Slices/salesOrgSlice'


export const store = configureStore({
    reducer:{

        company: companyReducer,
        salesorg: salesReducer,


    }
})