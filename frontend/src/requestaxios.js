import axios from "axios";

const BACKEND_URL = "https://ecomappi.onrender.com/api";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
console.log(TOKEN);
export const publicRequest = axios.create({
  baseURL: BACKEND_URL,
});

export const userRequest = axios.create({
  baseURL: BACKEND_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
