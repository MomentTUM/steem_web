import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as gameApi from "../apis/game-api";

const initialState = {
  gameInfo: [],
  showGame: {},
};

export const fetchGameInfo = createAsyncThunk(
  "game/fetchGameInfo",
  async () => {
    try {
      const res = await gameApi.getGameInfoApi();
      // console.log(res.data);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

export const fetchGame = createAsyncThunk(
  "game/fetchGame",
  async (steamAppId) => {
    try {
      const res = await gameApi.getGameByAppId(steamAppId);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  },
);

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    clearShowGame: (state, action) => {
      state.showGame = initialState.showGame;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchGameInfo.fulfilled, (state, action) => {
      state.gameInfo = action.payload;
    });
    builder.addCase(fetchGame.fulfilled, (state, action) => {
      state.showGame = action.payload;
    });
  },
});

export default gameSlice.reducer;
export const { clearShowGame } = gameSlice.actions;
