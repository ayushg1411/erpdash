import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchShipping = createAsyncThunk ('fetchShipping',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad90a19f785b6b0bd371');
    return response.json();
})

const ShippingSlice = createSlice({
    name:"Shipping",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchShipping.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchShipping.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchShipping.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  ShippingSlice.reducer;