import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getProducts = () => API.get("/products/category/groceries");