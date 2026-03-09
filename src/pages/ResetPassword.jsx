import { useState } from "react";
import { useParams } from "react-router-dom";

export default function ResetPassword() {
  const { uid, token } = useParams();
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await ResetPassword({
        uid,
        token,
        new_password: password,
      });
      setMensaje(res.data.mensaje);
    } catch {
      setMensaje("Enlace inválido o expirado");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Nueva contraseña</h2>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Actualizar</button>

      <p>{mensaje}</p>
    </form>
  );
}
