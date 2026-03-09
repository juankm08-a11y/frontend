import axios from "axios";
import { useEffect, useState } from "react";
import { getOrdenes } from "../api/ordenes";

export default function HistorialPage() {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/ordenes/historial/")
      .then((res) => getOrdenes(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Historial de Mantenimiento </h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Código</th>
            <th>Equipo</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Fecha Ejecución</th>
            <th>Fecha Aprobación</th>
          </tr>
        </thead>
        <tbody>
          {ordenes.map((orden) => (
            <tr key={orden.id}>
              <td>{orden.codigo}</td>
              <td>{orden.equipo}</td>

              <td>{orden.tipo}</td>
              <td>{orden.estado}</td>
              <td>{orden.fecha_ejecucion}</td>
              <td>{orden.fecha_aprobacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
