import axios from "axios";
import { API_URL } from "./constant";

const API = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

API.defaults.headers.common["Authorization"] = `Bearer ${process.env.ACCESS_TOKEN}`;

export default API;
