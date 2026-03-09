import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEquipoById } from "../api/equipos";

export default function EquipoDetalle() {
  const { id } = useParams();
  const { equipo, setEquipo } = useState(null);

  useEffect(() => {
    getEquipoById(id)
      .then((res) => setEquipo(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!equipo) {
    return <p>Cargando equipo...</p>;
  }
  return (
    <div>
      <h2>{equipo.nombre}</h2>
      <p>Código: {equipo.codigo}</p>
      <p>Marca: {equipo.marca}</p>
      <p>Modelo: {equipo.modelo}</p>
      <p>Ubicación: {equipo.ubicacion} </p>
      <p>Estado: {equipo.estado}</p>
    </div>
  );
}
