import { useEffect, useState } from "react";
import { getEquipos } from "../api/equipos";
import RegistrarEquipo from "./RegistrarEquipo";

export default function Equipos() {
  const [equipos, setEquipos] = useState([]);

  const cargarEquipos = () => {
    getEquipos()
      .then((res) => setEquipos(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    cargarEquipos();
  }, []);

  return (
    <div>
      <h2>Equipos Biomédicos</h2>

      <RegistrarEquipo onEquipoCreado={cargarEquipos} />

      {equipos.length == 0 ? (
        <p>No hay equipos registrados.</p>
      ) : (
        <ul>
          {equipos.map((equipo) => (
            <li key={equipo.id}>
              <strong>{equipo.nombre}</strong>- {equipo.codigo}
              <br />
              {equipo.marca} {equipo.modelo} - {equipo.estado}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
