import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchSalesGrp = createAsyncThunk ('fetchSalesGrp',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad90a19f785b6b0bd368');
    return response.json();
})

const SalesGrpSlice = createSlice({
    name:"SalesGrp",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchSalesGrp.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchSalesGrp.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchSalesGrp.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  SalesGrpSlice.reducer;