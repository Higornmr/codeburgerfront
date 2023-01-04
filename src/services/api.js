import axios from "axios";

export const apiCodeBurger = axios.create({
  baseURL: "http://localhost:3001",
});
