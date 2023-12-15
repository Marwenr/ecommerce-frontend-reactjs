import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getProductById = createAsyncThunk("getProductById", async (id) => {
  try {
    const response = await axios.get(`http://localhost:3005/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getProducts = createAsyncThunk("getProducts", async () => {
  try {
    const response = await axios.get("http://localhost:3005/products");
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getCategories = createAsyncThunk("getCategories", async () => {
  try {
    const response = await axios.get("http://localhost:3005/categories");
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addProduct = createAsyncThunk(
  "addProduct",
  async ({ product, token }) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/products",
        product,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateProd = createAsyncThunk(
  "updateProd",
  async ({ id, product, token }) => {
    try {
      const response = await axios.patch(
        `http://localhost:3005/products/${id}`,
        product,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async ({ id, token }) => {
    try {
      await axios.delete(`http://localhost:3005/products/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      return id;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: { isLoading: false, product: {}, products: [], categories: [] },
  extraReducers: (builder) => {
    builder.addCase(getProductById.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
      state.error = "";
    });
    builder.addCase(getProductById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(getCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
      state.error = "";
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(addProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products.push(action.payload);
      state.error = "";
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(updateProd.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateProd.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, ...action.payload }
          : product
      );
      state.error = "";
    });
    builder.addCase(updateProd.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    builder.addCase(deleteProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.error = "";
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
