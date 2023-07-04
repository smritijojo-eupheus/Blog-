import axios from "axios";

const instance = axios.create({
  baseURL: `https://jogs-backend.onrender.com/`,

  // baseURL: `http://13.215.206.217:4000/`,
  // baseURL: `http://192.168.7.189:80/`,
});

export default instance;
