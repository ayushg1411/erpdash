import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchsalesOrg = createAsyncThunk ('fetchsalesorg',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad90a19f785b6b0bd35f');
    return response.json();
})

const salesOrgSlice = createSlice({
    name:"salesorg",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchsalesOrg.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchsalesOrg.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchsalesOrg.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  salesOrgSlice.reducer;