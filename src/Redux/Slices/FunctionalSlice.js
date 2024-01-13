import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchFunctional = createAsyncThunk ('fetchFunctional',  async()=>{
    const response = await fetch('https://sdaf-ijn7.onrender.com/api/user/define/659fad8fa19f785b6b0bd353');
    return response.json();
})
export const fetchData = async (pageId) => {
    try {
      const response = await apiService.get(`/your-api-endpoint/${pageId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error for the component to handle
    }
  };

const FunctionalSlice = createSlice({
    name:"Functional",
    initialState:{
        isLoading :false,
        data:null,
        isError:false
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchFunctional.pending, (state, action)=>{
            state.isLoading=true;

        })

        builder.addCase(fetchFunctional.rejected, (state, action)=>{
            state.isError=true;
            
        })


        builder.addCase(fetchFunctional.fulfilled, (state, action) =>{
            state.isLoading =false;
            state.data=action.payload;
        })
    }

})


export default  FunctionalSlice.reducer;