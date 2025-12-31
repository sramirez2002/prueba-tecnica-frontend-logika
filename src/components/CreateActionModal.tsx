import { useState } from "react"
import { createAction } from "../api/actions.api"
import "../styles/modal.css"

type Props = {
  onClose: () => void
  onCreated: () => void
}

export const CreateActionModal = ({ onClose, onCreated }: Props) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState(1)
  const [icon, setIcon] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const isFormValid =
    name.trim().length > 0 && description.trim().length > 0

  const handleSubmit = async () => {
    if (!isFormValid || loading) return

    setLoading(true)
    setError("")

    try {
      await createAction({
        name,
        description,
        status,
        icon,
      })

      setSuccess(true)
      onCreated()

      setTimeout(() => {
        onClose()
      }, 800)
    } catch {
      setError("No se pudo crear la acción")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="modal-overlay">
      <div className="modal">

        <div className="modal-header">
          <h2>Crear acción</h2>
          <button onClick={onClose}>×</button>
        </div>

        {error && <p className="error">{error}</p>}
        {success && (
          <p className="success">Acción creada correctamente</p>
        )}

        <div className="form-group">
          <label>Nombre *</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Descripción *</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Estado *</label>
          <select
            value={status}
            onChange={(e) =>
              setStatus(Number(e.target.value))
            }
          >
            <option value={1}>Activo</option>
            <option value={0}>Inactivo</option>
          </select>
        </div>

        <div className="form-group">
          <label>Ícono</label>
          <input
            type="file"
            accept="image/png, image/jpeg, image/svg+xml"
            onChange={(e) =>
              setIcon(
                e.target.files ? e.target.files[0] : null
              )
            }
          />
        </div>

        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button
            onClick={handleSubmit}
            disabled={!isFormValid || loading}
          >
            {loading ? "Creando..." : "Crear"}
          </button>
        </div>

      </div>
    </div>
  )
}
