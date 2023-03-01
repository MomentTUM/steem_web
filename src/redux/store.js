import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import userReducer from "./user-slice";
import gameReducer from "./game-slice";
import cartReducer from "./cart-slice";
import wishlistReducer from "./wishlist-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    game: gameReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
