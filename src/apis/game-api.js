import axios from "../config/axios";

// export const getGameInfoApi = () => axios.get("/game");
export const getGameInfoApi = () => axios.get("/steam/games");

export const findGameApi = (name) => axios.get("/game/", name);