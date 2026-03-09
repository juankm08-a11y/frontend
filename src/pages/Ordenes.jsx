import { useEffect, useState } from "react";
import {
  createOrden,
  deleteOrden,
  getOrdenes,
  updateOrden,
} from "../api/ordenes";
import OrdenForm from "./OrdenForm";

export default function Ordenes() {
  const [ordenes, setOrdenes] = useState([]);
  const [estado, setEstado] = useState("");
  const [ordenEditando, setOrdenEditando] = useState(null);

  const cargarOrdenes = () => {
    getOrdenes(estado)
      .then((res) => setOrdenes(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    cargarOrdenes();
  }, [estado]);

  const handleCrear = async (data) => {
    await createOrden(data);
    cargarOrdenes();
  };

  const handleEditar = async (data) => {
    await updateOrden(ordenEditando.id, data);
    setOrdenEditando(null);
    cargarOrdenes();
  };

  const handleEliminar = async (id) => {
    if (!confirm("¿Estas seguro de que quieres eliminar esta orden?")) return;
    await deleteOrden(id);
    cargarOrdenes();
  };

  return (
    <div>
      <h2>Ordenes de Mantenimiento</h2>

      <OrdenForm
        onSubmit={ordenEditando ? handleEditar : handleCrear}
        orden={ordenEditando}
      />

      <hr />

      <select value={estado} onChange={(e) => setEstado(e.target.value)}>
        <option value="">Todas</option>
        <option value="pendiente">Pendiente</option>
        <option value="ejecutada">Ejecutada</option>
        <option value="aprobada">Aprobada</option>
      </select>

      {ordenes.length === 0 ? (
        <p>No hay ordenes</p>
      ) : (
        <ul>
          {ordenes.map((orden) => (
            <li key={orden.id}>
              <strong>{orden.codigo}</strong> - {orden.tipo}
              <br />
              Estado: {orden.estado}
              <br />
              <button onClick={() => setOrdenEditando(orden)}>Editar</button>
              <button onClick={() => handleEditar(orden.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
