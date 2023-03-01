import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as wishlistApi from "../apis/wishlist-api";

const initialState = {
  wishlist: [],
};

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {
    try {
      const res = await wishlistApi.getWishlistApi();
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

export const addWishlist = createAsyncThunk(
  "wishlist/addWishlist",
  async (gameId) => {
    try {
      const res = await wishlistApi.addWishlist(gameId);
      return res.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
);

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchWishlist.fulfilled, (state, action) => {
      state.wishlist = action.payload;
    });
    builder.addCase(addWishlist.fulfilled, (state, action) => {
      state.wishlist.push(action.payload);
    });
  },
});

export default wishlistSlice.reducer;