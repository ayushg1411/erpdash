import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchSalesOffice = createAsyncThunk ('fetchSalesOffice',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad90a19f785b6b0bd365');
    return response.json();
})

const SalesOfficeSlice = createSlice({
    name:"SalesOffice",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchSalesOffice.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchSalesOffice.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchSalesOffice.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  SalesOfficeSlice.reducer;