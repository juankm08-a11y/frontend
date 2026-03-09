import { useState } from "react";
import { login } from "../api/auth";
import "../styles/Login.css";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({
        correo_institucional: correo,
        password,
      });

      setMensaje(res.data.mensaje);
      console.log("Usuario: ", res.data);
      console.log("Correo: ", correo);
      console.log("Password: ", password);
    } catch (error) {
      setMensaje("Credenciales inválidas");
    }
  };

  return (
    <section className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar Sesión</h2>

        <input
          type="email"
          placeholder="Correo institucional"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Ingresar</button>
        <p>{mensaje}</p>
      </form>
    </section>
  );
}
