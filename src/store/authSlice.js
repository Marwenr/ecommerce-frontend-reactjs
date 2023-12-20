import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signIn = createAsyncThunk("signIn", async (userAuth) => {
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

export const refreshToken = createAsyncThunk(
  "refreshToken",
  async (currentUser) => {
    try {
      const response = await axios.get("http://localhost:3005/auth", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`,
        },
      });
      localStorage.setItem("user", response.data);
      return { token: response.data, user: currentUser.user };
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
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoadingAuth: false,
    error: "",
    user: "",
    userData: {},
    isLoggedIn: false,
  },
  reducers: {
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.user = "";
      state.userData = {};
    },
    isLoadingReducer: (state, action) => {
      state.isLoadingAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state, action) => {
      state.isLoadingAuth = true;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLoadingAuth = false;
      state.user = action.payload.token;
      state.userData = action.payload.user;
      state.isLoggedIn = true;
      state.error = "";
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoadingAuth = false;
      state.isLoggedIn = false;
      state.error = action.error.message;
      state.user = {};
    });

    builder.addCase(refreshToken.pending, (state, action) => {
      state.isLoadingAuth = true;
    });
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      state.isLoadingAuth = false;
      state.user = action.payload.token;
      state.userData = action.payload.user;
      state.isLoggedIn = true;
      state.error = "";
    });
    builder.addCase(refreshToken.rejected, (state, action) => {
      state.isLoadingAuth = false;
      state.isLoggedIn = false;
      state.error = action.error.message;
      state.user = {};
    });
  },
});

export const { isLoadingReducer, logout } = authSlice.actions;
export default authSlice.reducer;
