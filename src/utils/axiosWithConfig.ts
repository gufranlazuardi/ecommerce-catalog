import axios from "axios";

const axiosWithConfig = axios.create();

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  // Set baseURL
  axiosConfig.baseURL = import.meta.env.BASE_URL;

  return axiosConfig;
});

export default axiosWithConfig;
