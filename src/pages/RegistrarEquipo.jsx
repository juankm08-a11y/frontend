import { useState } from "react";
import { createEquipo } from "../api/equipos";

export default function RegistrarEquipo({ onEquipoCreado }) {
  const [form, setForm] = useState({
    nombre: "",
    codigo: "",
    marca: "",
    modelo: "",
    numero_serie: "",
    ubicacion: "",
    estado: "activo",
  });

  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");
    setError("");
    try {
      await createEquipo(form);
      setMensaje("Equipo registrado exitosamente.");

      setForm({
        nombre: "",
        codigo: "",
        marca: "",
        modelo: "",
        numero_serie: "",
        ubicacion: "",
        estado: "activo",
      });
      if (onEquipoCreado) {
        onEquipoCreado();
      }
    } catch (err) {
      console.error(err);
      setError("Error al registrar el equipo.");
    }
  };

  return (
    <div>
      <h3>Registrar equipo biomédico</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="nombre"
          placeholder="Nombre del equipo"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="codigo"
          placeholder="Código del equipo"
          value={form.codigo}
          onChange={handleChange}
        />
        <input
          type="marca"
          placeholder="Marca"
          value={form.marca}
          onChange={handleChange}
          required
        />
        <input
          type="modelo"
          placeholder="Modelo"
          value={form.modelo}
          onChange={handleChange}
          required
        />
        <input
          type="numero_serie"
          placeholder="Número de serie (opcional)"
          value={form.numero_serie}
          onChange={handleChange}
        />
        <input
          type="ubicacion"
          placeholder="Ubicación"
          value={form.ubicacion}
          onChange={handleChange}
        />

        <select name="estado" value={form.estado} onChange={handleChange}>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
        <button type="submit">Registrar equipo</button>
      </form>

      {mensaje && <p style={{ color: "green" }}></p>}
      {error && <p style={{ color: "red" }}></p>}
    </div>
  );
}
