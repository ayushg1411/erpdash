import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCompanies = createAsyncThunk ('fetchCompanies',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad8fa19f785b6b0bd353');
    return response.json();
})

const companySlice = createSlice({
    name:"company",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchCompanies.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchCompanies.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchCompanies.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  companySlice.reducer;