import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
  search: "",
  category: "all",
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const {
  setLoading,
  setProducts,
  setError,
  setSearch,
  setCategory,
} = productSlice.actions;

export default productSlice.reducer;