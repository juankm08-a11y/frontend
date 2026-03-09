import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOrdenById, marcarOrdenEjecutada } from "../api/ordenes";

export default function OrdenDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [orden, setOrden] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const cargarOrden = () => {
    getOrdenById(id)
      .then((res) => setOrden(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    cargarOrden();
  }, [id]);

  const finalizar = async () => {
    if (!confirm("¿Desea marca orden como ejecutada?")) return;

    try {
      await marcarOrdenEjecutada(id);
      setMensaje("Orden marcada como ejecutada");
      cargarOrden();
    } catch {
      setMensaje("No se pudo finalizar la orden");
    }
  };

  if (!orden) return <p>Cargando orden...</p>;

  return (
    <div className="page">
      <h2>Orden {orden.codigo}</h2>

      <p>
        <strong>Equipo:</strong>
        {orden.equipo}
      </p>
      <p>
        <strong>Tipo:</strong>
        {orden.tipo}
      </p>
      <p>
        <strong>Estado:</strong>
        {orden.estado}
      </p>
      <p>
        <strong>Descripcion</strong>
        {orden.descripcion}
      </p>

      {orden.estado !== "ejecutada" && (
        <button onClick={finalizar}>Finalizar mantenimiento</button>
      )}

      {mensaje && <p>{mensaje}</p>}

      <br />

      <button onClick={() => navigate(`/ordenes/${id}/actividad`)}>
        Registrar Actividad
      </button>
    </div>
  );
}
