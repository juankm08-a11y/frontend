import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/auth",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = (data) => API.post("login/", data);

export const recoverPassword = (data) => API.post("recuperar-acceso", data);

export const resetPassword = (data) =>
  API.post("recuperar-acceso/confirmar/", data);
