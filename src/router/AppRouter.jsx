import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import RecoverPassword from "../pages/RecoverPassword";
import ResetPassword from "../pages/ResetPassword";
import Dashboard from "../pages/Dashboard";
import Equipos from "../pages/Equipos";
import EquipoDetalle from "../pages/EquipoDetalle";
import Ordenes from "../pages/Ordenes";
import OrdenDetalle from "../pages/OrdenDetalle";
import RegistrarActividad from "../pages/RegistrarActividad";
import HistorialPage from "../pages/HistorialPage";
import AprobacionPage from "../pages/AprobacionPage";
import HojaVidaEquipo from "../pages/HojaVidaquipo";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recuperar" element={<RecoverPassword />} />
        <Route path="/reset-password/:uid/:token" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/equipos" element={<Equipos />} />
        <Route path="/equipos/:id" element={<EquipoDetalle />} />
        <Route path="/ordenes" element={<Ordenes />} />
        <Route path="/ordenes/:id" element={<OrdenDetalle />} />
        <Route path="/ordenes/:id/actividad" element={<RegistrarActividad />} />
        <Route path="/historial" element={<HistorialPage />} />
        <Route path="/aprobacion " element={<AprobacionPage />} />
        <Route path="/equipo-demo" element={<HojaVidaEquipo />} />
      </Routes>
    </BrowserRouter>
  );
}
