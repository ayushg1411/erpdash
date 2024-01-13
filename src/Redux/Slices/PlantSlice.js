import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPlant = createAsyncThunk ('fetchPlant',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad8fa19f785b6b0bd359');
    return response.json();
})

const PlantSlice = createSlice({
    name:"Plant",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchPlant.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchPlant.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchPlant.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  PlantSlice.reducer;