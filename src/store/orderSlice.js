import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const addOrder = createAsyncThunk("getOrderById", async (order) => {
  try {
    const response = await axios.post("http://localhost:3005/order", order, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
  } catch (error) {
    throw error;
  }
});

export const getOrderById = createAsyncThunk(
  "getOrderById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:3005/order/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getOrders = createAsyncThunk("getOrders", async (_, thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:3005/order");
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const deleteOrder = createAsyncThunk(
  "deleteOrder",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3005/order/${id}`);
      return id;
    } catch (error) {
      throw error;
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: { isLoadingOrder: false, order: {}, orders: [] },
  extraReducers: (builder) => {
    builder.addCase(getOrderById.pending, (state, action) => {
      state.isLoadingOrder = true;
    });
    builder.addCase(getOrderById.fulfilled, (state, action) => {
      state.isLoadingOrder = false;
      state.order = action.payload;
      state.error = "";
    });
    builder.addCase(getOrderById.rejected, (state, action) => {
      state.isLoadingOrder = false;
      state.error = action.error.message;
    });

    builder.addCase(getOrders.pending, (state, action) => {
      state.isLoadingOrder = true;
    });
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.isLoadingOrder = false;
      state.orders = action.payload;
      state.error = "";
    });
    builder.addCase(getOrders.rejected, (state, action) => {
      state.isLoadingOrder = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteOrder.pending, (state, action) => {
      state.isLoadingOrder = true;
    });
    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.isLoadingOrder = false;
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    });
    builder.addCase(deleteOrder.rejected, (state, action) => {
      state.isLoadingOrder = false;
    });
  },
});

export default orderSlice.reducer;
