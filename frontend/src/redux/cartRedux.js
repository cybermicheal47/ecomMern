import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const { productDetail, quantity, price } = action.payload;

      // Check if the product is already in the cart
      const existingProduct = state.products.find(
        (product) => product._id === productDetail._id
      );

      if (existingProduct) {
        // If the product is already in the cart, update its quantity and price
        existingProduct.quantity += quantity;
        existingProduct.price += price;
      } else {
        // If the product is not in the cart, add it
        state.products.push({ ...productDetail, quantity });
      }

      // Update the total quantity and total price
      state.quantity += quantity;
      state.total += price;
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
