import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCreditControl = createAsyncThunk ('fetchCreditControl',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad8fa19f785b6b0bd34a');
    return response.json();
})

const CreditControlSlice = createSlice({
    name:"CreditControl",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchCreditControl.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchCreditControl.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchCreditControl.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  CreditControlSlice.reducer;