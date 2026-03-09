import { useState } from "react";

export default function RecoverPassword() {
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await RecoverPassword({
        correo_institucional: correo,
      });
      setMensaje(res.data.mensaje);
    } catch {
      setMensaje("Error al enviar el correo");
    }

    return (
      <form onSubmit={handleSubmit}>
        <h2>Recuperar Acceso</h2>

        <input
          type="email"
          placeholder="Correo institucional"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />

        <button type="submit">Enviar enlace</button>

        <p>{mensaje}</p>
      </form>
    );
  };
}
