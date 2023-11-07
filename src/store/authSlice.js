import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signIn = createAsyncThunk("signIn", async (userAuth, thunkAPI) => {
  try {
    const response = await axios.post("http://localhost:3005/auth", userAuth, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("user", response.data.token);
    return response.data;
  } catch (error) {
    if (error.response) {
      const errorData = Array.isArray(error.response.data.message)
        ? error.response.data.message.join(",")
        : error.response.data.message;
      throw errorData;
    } else {
      throw error;
    }
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoading: false, error: "", user: {} },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.user = {};
    });
  },
});

export default authSlice.reducer;
