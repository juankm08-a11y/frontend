import axios from "axios";
import { useEffect, useState } from "react";

export default function AprobacionPage() {
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    cargarOrdenes();
  }, []);

  const cargarOrdenes = () => {
    axios
      .get("http://localhost:8080/api/ordenes/pendientes-aprobacion/")
      .then((res) => setOrdenes(res.data))
      .catch((err) => console.error(err));
  };

  const aprobarOrden = (id) => {
    axios
      .post(`http://localhost:8080/api/ordenes/${id}/aprobar/`)
      .then(() => cargarOrdenes())
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ordenes Pendientes de Aprobacion</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Código</th>
            <th>Equipo</th>
            <th>Fecha Ejecución</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {ordenes.map((orden) => (
            <tr key={orden.id}>
              <td>{orden.codigo}</td>
              <td>{orden.equipo}</td>

              <td>{orden.fecha_ejecucion}</td>

              <td>
                <button onClick={() => aprobarOrden(orden.id)}>Aprobar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
