import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

export const getEquipos = () => API.get("equipos/");

export const getEquipoById = (id) => API.get(`equipos/${id}`);

export const createEquipo = (data) => API.post("equipos/", data);
