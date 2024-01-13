import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchProfitCenter = createAsyncThunk ('fetchProfitCenter',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad8fa19f785b6b0bd356');
    return response.json();
})

const ProfitCenterSlice = createSlice({
    name:"ProfitCenter",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchProfitCenter.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchProfitCenter.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchProfitCenter.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  ProfitCenterSlice.reducer;