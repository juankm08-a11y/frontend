import { useEffect, useState } from "react";

export default function OrdenForm({ onSubmit, orden }) {
  const [form, setForm] = useState({
    codigo: "",
    equipo: "",
    tipo: "preventivo",
    descripcion: "",
    estado: "pendiente",
  });

  useEffect(() => {
    if (orden) {
      setForm({
        codigo: orden.codigo,
        equipo: orden.equipo,
        tipo: orden.tipo,
        descripcion: orden.descripcion,
        estado: orden.estado,
      });
    }
  }, [orden]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(form);
    setForm({
      codigo: "",
      equipo: "",
      tipo: "preventivo",
      descripcion: "",
      estado: "pendiente",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{orden ? "Editar orden" : "Crear orden"}</h3>

      <input
        type="text"
        name="codigo"
        placeholder="Codigo de la orden"
        value={form.codigo}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="equipo"
        placeholder="ID del equipo"
        value={form.equipo}
        onChange={handleChange}
        required
      />

      <select name="tipo" value={form.tipo} onChange={handleChange}>
        <option value="preventivo">Preventivo</option>
        <option value="correctivo">Correctivo</option>
      </select>

      <textarea
        name="descripcion"
        placeholder="Descripcion"
        value={form.descripcion}
        onChange={handleChange}
        required
      />

      {orden && (
        <select name="estado" value={form.estado} onChange={handleChange}>
          <option value="pendiente">Pendiente</option>
          <option value="ejecutada">Ejecutada</option>
          <option value="aprobada">Aprobada</option>
        </select>
      )}
      <button type="submit">
        {orden ? "Actualizar orden" : "Crear orden"}
      </button>
    </form>
  );
}
