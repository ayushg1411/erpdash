import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchLoading = createAsyncThunk ('fetchLoading',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad90a19f785b6b0bd374');
    return response.json();
})

const LoadingSlice = createSlice({
    name:"Loading",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchLoading.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchLoading.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchLoading.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  LoadingSlice.reducer;