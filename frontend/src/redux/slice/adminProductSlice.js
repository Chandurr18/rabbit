import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;
const USER_TOKEN = `Bearer ${localStorage.getItem("userToken")}`;

// Thunk to fetch admin products
export const fetchAdminProducts = createAsyncThunk(
  "adminProducts/fetchAdminProducts",
  async () => {
    const response = await axios.get(`${API_URL}/api/admin/products`, {
      headers: {
        Authorization: USER_TOKEN,
      },
    });

    return response.data;
  }
);

// Thunk to create a new product
export const createProduct = createAsyncThunk(
  "adminProducts/createProduct",
  async (productdata) => {
    const response = await axios.post(
      `${API_URL}/api/admin/products`,
      productdata,
      {
        headers: {
          Authorization: USER_TOKEN,
        },
      }
    );

    return response.data;
  }
);

// Thunk to update an existing product
export const updateProduct = createAsyncThunk(
  "adminProducts/updateProduct",
  async ({id, productdata}) => {
    const response = await axios.put(
      `${API_URL}/api/admin/products/${id}`,
      productdata,
      {
        headers: {
          Authorization: USER_TOKEN,
        },
      }
    );
    
    return response.data;
  }
);

// Thunk to delete product
export const deleteProduct = createAsyncThunk(
  "adminProducts/deleteProduct",
  async (id) => {
    const response = await axios.delete(
      `${API_URL}/api/products/${id}`,
      {
        headers: {
          Authorization: USER_TOKEN,
        },
      }
    );
    
    return response.data;
  }
);

const adminProductsSlice = createSlice({
    name: "adminProducts",
    initialState:{
        products :[],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchAdminProducts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchAdminProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        .addCase(fetchAdminProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
        .addCase(createProduct.fulfilled, (state, action) => {
            state.products.push(action.payload);
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
            const updatedProduct = action.payload;
            const index = state.products.findIndex((product) => product._id === updatedProduct._id);
            if(index != -1) state.products[index] = updatedProduct;
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            state.products = state.products.filter((product) => product._id != action.payload);
        })
    }
})

export default adminProductsSlice.reducer;