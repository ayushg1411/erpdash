import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPurchasingOrg = createAsyncThunk ('fetchPurchasingOrg',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad90a19f785b6b0bd36e');
    return response.json();
})

const PurchasingOrgSlice = createSlice({
    name:"PurchasingOrg",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchPurchasingOrg.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchPurchasingOrg.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchPurchasingOrg.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  PurchasingOrgSlice.reducer;