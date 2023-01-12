import { axiosClient } from "./axiosClient";
// cons= process.enAPI || 'http://localhost:5000/api';
// console.lo;
const server = {
  upload: {
    upload: (payload: Object) => {
      return axiosClient.post(`/upload`, payload);
    },
    destroy: (payload: Object) => {
      return axiosClient.post(`/destroy`, payload);
    },
  },
  posts: {
    get: (page: number, pageSize: number) => {
      return axiosClient.post(
        `/post/search?pageSize=${pageSize || 20}&page=${page || 0}`
      );
    },
    create: (payload: object) => {
      return axiosClient.post(`/post/`, payload);
    },
    getById:(id:string)=>{
      return axiosClient.get(`/post/${id}`);
    }
  },
  tag: {
    create: (payload: object) => {
      return axiosClient.post(`/tag/create`, payload);
    },
  },
  user: {
    register: (payload: object) => {
      return axiosClient.post(`/user/register`, payload);
    },
    login: (payload: object) => {
      return axiosClient.post(`/login`, payload);
    },
    logout: (payload: object) => {
      return axiosClient.post(`/logout`, payload);
    },
    refreshToken: () => {
      return axiosClient.post(`/refreshToken`);
    },
  },
};
export default server;
