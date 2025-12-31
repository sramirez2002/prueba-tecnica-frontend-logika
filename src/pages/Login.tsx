import { useState } from "react"
import { useNavigate } from "react-router-dom"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import LockIcon from "@mui/icons-material/Lock"
import EmailIcon from "@mui/icons-material/Email"
import { login } from "../api/auth.api"
import logo from "../assets/logo.svg"
import "../styles/login.css"

export const Login = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const token = await login(username, password)
      localStorage.setItem("token", token)
      navigate("/dashboard")
    } catch {
      setError("Usuario o contraseña incorrectos")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <form className="login-container" onSubmit={handleSubmit}>
        <img
          src={logo}
          alt="Be Kind Network"
          className="login-logo"
        />

        <p className="login-subtitle">
          ¡Empieza a conectar tu comunidad ante buenas acciones!
        </p>

        {error && <p className="error">{error}</p>}

        <label>Correo electrónico</label>
        <div className="input-with-icon">
          <EmailIcon />
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <label>Contraseña</label>
        <div className="input-with-icon">
          <LockIcon />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </button>
        </div>

        <p className="forgot-password">Recuperar contraseña</p>

        <button
          type="submit"
          className="login-button"
          disabled={loading || !username || !password}
        >
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  )
}
