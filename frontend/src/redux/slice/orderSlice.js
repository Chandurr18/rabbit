import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk to fetch user orders
export const fetchuserOrders = createAsyncThunk(
  "orders/fetchuserOrders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/orders/my-orders`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Thunk to fetch order details by Id
export const fetchOrderDetails = createAsyncThunk(
  "orders/fetchOrderDetails",
  async (orderId, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/orders/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orders: [],
        totalOrders : 0,
        orderDetails : null,
        loading: false,
        error: null,
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchuserOrders.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchuserOrders.fulfilled, (state, action) => {
            state.loading = false,
            state.orders = action.payload;
        })
        .addCase(fetchuserOrders.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload.message
        })
        .addCase(fetchOrderDetails.pending, (state) => {
            state.loading = true,
            state.error = null
        })
        .addCase(fetchOrderDetails.fulfilled, (state, action) => {
            state.loading = false,
            state.orderDetails = action.payload;
        })
        .addCase(fetchOrderDetails.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload.message
        })
    }
})

export default orderSlice.reducer;