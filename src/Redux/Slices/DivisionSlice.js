import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchDivision = createAsyncThunk ('fetchDivision',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad90a19f785b6b0bd35c');
    return response.json();
})

const DivisionSlice = createSlice({
    name:"Division",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchDivision.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchDivision.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchDivision.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  DivisionSlice.reducer;