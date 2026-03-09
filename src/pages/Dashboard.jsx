import { useEffect, useState } from "react";
import { getDashboardResumen } from "../api/dashboard";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [resumen, setResumen] = useState(null);

  useEffect(() => {
    getDashboardResumen()
      .then((res) => setResumen(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);
  if (!resumen) return <p>Cargando pantalla...</p>;

  return (
    <div className="dashboard">
      <h2 className="title-dashboard">Dashboard</h2>

      <ul className="lista-ordenes">
        <li className="total-ordenes">
          Total ordénes: {resumen.total_ordenes}
        </li>
        <li className="ordenes-pendientes">Pendientes: {resumen.pendientes}</li>
        <li className="ordenes-ejecutadas">Ejecutadas: {resumen.ejecutadas}</li>
        <li className="ordenes-criticas">
          Ordenes críticas: <strong>{resumen.criticas}</strong>
        </li>
      </ul>
    </div>
  );
}
