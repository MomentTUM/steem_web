import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import userReducer from "./user-slice";
import gameReducer from "./game-slice";
import cartReducer from "./cart-slice";
import wishlistReducer from "./wishlist-slice";
import friendReducer from "./friend-slice";
import transactionReducer from "./transaction-slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    game: gameReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    friend: friendReducer,
    transaction: transactionReducer,
  },
});
