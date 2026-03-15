import API from "./apiClient";

export const getEquipos = () => API.get("equipos/");

export const getEquipoById = (id) => API.get(`equipos/${id}`);

export const createEquipo = (data) => API.post("equipos/", data);
