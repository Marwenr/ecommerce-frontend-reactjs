import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "createUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/users",
        { ...user, role: "user" },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
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
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (updatedUser, thunkAPI) => {
    try {
      const response = await axios.patch(
        "http://localhost:3005/users/" + updatedUser.id,
        updatedUser.user,
        {
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${updatedUser.token}`
          },
        }
      );
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
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: { isLoading: false, isCreated: false, isUpdated: false, error: "" },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isCreated = true;
      state.error = "";
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isUpdated = true;
      state.error = "";
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
