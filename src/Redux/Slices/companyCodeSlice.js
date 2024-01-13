import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchCompanysCodes = createAsyncThunk ('fetchCompanysCodes',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad8fa19f785b6b0bd34d');
    return response.json();
})

const companyCodeSlice = createSlice({
    name:"companyCode",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchCompanysCodes.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchCompanysCodes.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchCompanysCodes.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  companyCodeSlice.reducer;