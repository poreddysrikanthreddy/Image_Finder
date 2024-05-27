import axios from "axios";

const axiosHandler = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

export default axiosHandler;