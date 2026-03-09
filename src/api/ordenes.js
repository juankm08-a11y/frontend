import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  withCredentials: true,
});

export const createOrden = (data) => API.post("ordenes/", data);
export const getOrdenes = (estado = "") =>
  API.get(`ordenes/${estado ? `estado=${estado}` : ""}`);

export const deleteOrden = (id) => API.delete(`ordenes/${id}/`);

export const updateOrden = (id, data) => API.put(`ordenes/${id}/`, data);

export const getOrdenById = (id) => API.get(`ordenes/${id}/`);

export const crearActividad = (ordenId, data) =>
  API.post(`ordenes/${ordenId}/actividades/`, data);

export const marcarOrdenEjecutada = (id) =>
  API.post(`ordenes/${id}/finalizar/`);
