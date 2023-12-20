const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    },
    updateQty: (state, action) => {
      const cartUpdated = state.cart.map((prod) => {
        if (prod.productId === action.payload.id) {
          return {
            ...prod,
            quantity: action.payload.quantity,
          };
        }
        return prod;
      });
      return {
        ...state,
        cart: cartUpdated,
      };
    },
    deleteFromCart: (state, action) => {
      const newCart = state.cart.filter(
        (item) => item.productId !== action.payload
      );
      return {
        ...state,
        cart: newCart,
      };
    },
    resetCart: (state) => {
      return {
        ...state,
        cart: [],
      };
    },
  },
});

export const { addToCart, deleteFromCart, updateQty,resetCart } = cartSlice.actions;
export default cartSlice.reducer;
