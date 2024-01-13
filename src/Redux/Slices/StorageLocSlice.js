import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchStorageLoc = createAsyncThunk ('fetchStorageLoc',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad90a19f785b6b0bd36b');
    return response.json();
})

const StorageLocSlice = createSlice({
    name:"StorageLoc",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchStorageLoc.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchStorageLoc.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchStorageLoc.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  StorageLocSlice.reducer;