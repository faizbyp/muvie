import axios from "axios";

const API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

API.defaults.headers.common["Authorization"] = `Bearer ${process.env.ACCESS_TOKEN}`;

export default API;
