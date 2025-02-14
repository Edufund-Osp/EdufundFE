import axios, { AxiosInstance } from "axios";
import { getItemFromSessionStorage } from "../utils/helperFuncitons";

const APIClient: AxiosInstance = axios.create({
  baseURL: "baseUrl",
  headers: {
    "Content-Type": "application/json",
    // "auth-token": token,
  },
});


APIClient.interceptors.request.use(
  (config) => {
    // const token = sessionStorage.getItem("auth-token");
    const token = getItemFromSessionStorage("token");
    // Replace with your token source
    // console.log(token)
    if (token) {
      config.headers["auth-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);