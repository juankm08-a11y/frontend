import API from "./apiClient";

export const getDashboardResumen = () => API.get("dashboard/resumen/");
