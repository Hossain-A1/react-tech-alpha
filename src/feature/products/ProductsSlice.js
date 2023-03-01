import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initalState = {
    items: [],
    status: null
};

export const productsFetching = createAsyncThunk(
  "products/productsFetching",
  async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initalState:initalState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetching.pending, (state, action) => {
      state.status = "loading ";
    });
    builder.addCase(productsFetching.fulfilled, (state, action) => {
      (state.status = "no issue"), (state.items = action.payload);
    });
    builder.addCase(productsFetching.rejected, (state, action) => {
      state.status = "rejected";
    });
  },
});

export default productsSlice.reducer;
