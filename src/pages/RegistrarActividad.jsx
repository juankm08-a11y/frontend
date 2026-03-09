import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { crearActividad } from "../api/ordenes";

export default function RegistrarActividad() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await crearActividad(id, { descripcion });
      setMensaje("Actividad registrada correctamente");
      setDescripcion("");
    } catch {
      setMensaje("Error al registrar la actividad");
    }
  };

  return (
    <div className="page">
      <h2>Registrar Actividad</h2>

      <form onSubmit={handleSubmit} className="form">
        <textarea
          placeholder="Describe la actividad realizada"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <button type="submit"> Guardar actividad</button>

        {mensaje && <p>{mensaje}</p>}

        <button onClick={() => navigate(`/ordenes/${id}`)}></button>
      </form>
    </div>
  );
}
