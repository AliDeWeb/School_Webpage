// Axios
import axios from "axios";

const baseUrl: string = "127.0.0.1:8000";

export const signup = axios.create({
  baseURL: `${baseUrl}/api/v1/auth/signup`,
});
