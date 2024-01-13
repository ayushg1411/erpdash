import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchBusiness = createAsyncThunk ('fetchBusiness',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad8fa19f785b6b0bd350');
    return response.json();
})

const BusinessSlice = createSlice({
    name:"Business",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchBusiness.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchBusiness.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchBusiness.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  BusinessSlice.reducer;


