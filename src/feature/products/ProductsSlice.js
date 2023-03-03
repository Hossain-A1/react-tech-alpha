import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetching = createAsyncThunk(
  "products/productsFetching",
  async () => {
    const res = await axios.get(
      "https://mocki.io/v1/a731e6e1-5b40-40d8-bfd8-50833c2fad37"
    );
    return res.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productsFetching.pending, (state, action) => {
      state.status = "Loading...";
    });

    builder.addCase(productsFetching.fulfilled, (state, action) => {
      state.status = "";
      state.items = action.payload;
    });

    builder.addCase(productsFetching.rejected, (state, action) => {
      state.status = "Something went wrong!";
    });
  },
});

export default productsSlice.reducer;