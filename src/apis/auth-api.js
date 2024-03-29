import axios from "../config/axios";

export const registerApi = (input) => axios.post("/auth/register", input);
export const checkEmailApi = input => axios.post("/auth/checkemail", input)
export const loginApi = (input) => axios.post("/auth/login", input);

export const getMeApi = () => axios.get("/auth/me");
