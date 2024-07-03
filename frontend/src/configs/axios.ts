// Axios
import axios from "axios";

export const baseUrl: string = "http://127.0.0.1:8000";

export const auth = axios.create({
  baseURL: `${baseUrl}/api/v1/auth`,
});

export const users = axios.create({
  baseURL: `${baseUrl}/api/v1/users`,
});

export const articles = axios.create({
  baseURL: `${baseUrl}/api/v1/articles`,
});

export const gallery = axios.create({
  baseURL: `${baseUrl}/api/v1/gallery`,
});
