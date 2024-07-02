// Axios
import axios from "axios";

const baseUrl: string = "http://127.0.0.1:8000";

export const auth = axios.create({
  baseURL: `${baseUrl}/api/v1/auth`,
});
auth.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (err) => {
    console.log(err);
    return err;
  },
);
