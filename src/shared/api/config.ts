import axios from "axios";

const BASE_URL = "https://www.omdbapi.com/";
const DEFAULT_PARAMS = {
  apikey: "8523cbb8",
  i: "tt3896198",
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: DEFAULT_PARAMS,
});

export default axiosInstance;
