import { useState } from "react";
import { login } from "../api/auth";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({
        correo_institucional: correo,
        password,
      });

      const access = res.data.access;
      const refresh = res.data.refresh;

      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);

      navigate("/dashboard");
      setMensaje("Inicio de sesión exitoso");
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
