import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import dataService from "./dataService"


const init_state = {
  homedata: [],
  loading: false,
};

export const fetchProductR = createAsyncThunk(
  "homedata/data",
  async (api) => {
    const allData = await dataService.getData(
      JSON.parse(api)
    );
    return allData?.data;
  }
);



const productsSlice = createSlice({
  name: "homedata",
  initialState: init_state,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductR.fulfilled, (state, action) => {
      let arr = action.payload;
      state.homeproducts = arr ? arr : [];
      state.loading = false;
    });
    builder.addCase(fetchProductR.pending, (state) => {
      state.loading = true;
    });
}})

    export default productsSlice.reducer;