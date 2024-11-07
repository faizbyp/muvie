import axios from "axios";
import { TMDB_URL } from "./constant";

export const TMDB = axios.create({
  baseURL: TMDB_URL,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  },
});

export const fetcher = (url: string) => axios.get("/api" + url).then((res) => res.data);

export default TMDB;
