import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:5000/api/",
  
  // withCredentials: ,
});
axiosClient.interceptors.request.use(async (config:any) => {
  // token
  // config.headers.Authorization = `Bearer ${keycloak.token}`;
  // language
  // config.headers.common['Accept-Language'] = localStorage.getItem("I18N_LANGUAGE");
  // company id
  // config.headers.common['cid'] = localStorage.getItem("cid");

  // if (process.env.REACT_APP_ENV === "dev") {
  //     config.headers.common['uid'] = keycloak.tokenParsed.sub;
  //     config.headers.common['key'] = 'test';
  // }
  // convert data of date
  // if (config.data) {
  //     convertDate(config.data);
  // }

  return config;
})