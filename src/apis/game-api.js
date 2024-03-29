import axios from "../config/axios";

// export const getGameInfoApi = () => axios.get("/steam/games");
// export const getGameByAppId = (steamAppId) =>
//   axios.get("/steam/games/" + steamAppId);

export const getGameInfoApi = () => axios.get("/game");
export const getGameByAppId = (steamAppId) => axios.get("/game/" + steamAppId);
export const searchGameApi = (name) => axios.get("/game/name?search=" + name);
