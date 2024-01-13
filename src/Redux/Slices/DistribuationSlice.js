import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchDistribuation = createAsyncThunk ('fetchDistribuation',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad90a19f785b6b0bd362');
    return response.json();
})

const DistribuationSlice = createSlice({
    name:"Distribuation",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchDistribuation.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchDistribuation.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchDistribuation.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  DistribuationSlice.reducer;


